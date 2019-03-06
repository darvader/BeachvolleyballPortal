import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/api/models';
import { TournamentResourceService } from 'src/app/api/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  tournament$: Observable<Tournament>;
  tournament: Tournament;
  tournamentForm: FormGroup;

  categories = [
    { name: 'Kategorie 1', value: 'CATEGORY1' },
    { name: 'Kategorie 2', value: 'CATEGORY2' },
    { name: 'Kategorie 3', value: 'CATEGORY3' },
    { name: 'Kategorie 4', value: 'CATEGORY4' },
  ]
  genders = [
    {name: 'Frauen', value: 'WOMEN'},
    {name: 'Männer', value: 'MEN'},
    {name: 'Mixed', value: 'MIXED'},
  ]

  playmodes = [
    {name: 'Gruppen/Single-Out', value: 'GROUP_SINGLEOUT'},
    {name: 'Doppel-KO', value: 'DOUBLEOUT'},
    {name: 'Sonstiges', value: 'OTHER'},
  ]

  constructor(private ts: TournamentResourceService, private route: ActivatedRoute, private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.tournament$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => parseInt(id, 10) > 0), 
      switchMap(id => this.ts.retrieveTournamentUsingGET(parseInt(id, 10)))
    );

    this.tournament$.subscribe(t => {
      this.tournament = t;
      this.fillForm(this.tournament);
    });

    this.tournamentForm = new FormGroup({
      id: new FormControl('', [
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      category: new FormControl('', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      playMode: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      entryFee: new FormControl('', [
        Validators.required,
      ]),
      priceMoney: new FormControl('', [
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });  
  }

  goToDetails = (t: Tournament) => {
    this.router.navigate(['../../details/', t.id], {relativeTo: this.route});
  }

  submitForm() {
    const newTournament: Tournament = {
      ...this.tournamentForm.value, date: this.tournamentForm.value.date
    };

    if (newTournament.id === null) {
      this.ts.createTournamentUsingPOST(newTournament).subscribe(this.goToDetails);
    } else {
      this.ts.updateTournamentUsingPUT(newTournament).subscribe(this.goToDetails);      
    }
    this.tournamentForm.reset();
  }

  fillForm(tournament: Tournament) {
    console.log(this.datePipe.transform(tournament.date, 'shortDate'));
    this.tournamentForm.setValue({...tournament, date: this.datePipe.transform(tournament.date, 'yyyy-MM-ddTHH:mm:ss.SSSZZZZZ')})
    this.tournament = tournament;
    console.log(tournament);
  }
}
