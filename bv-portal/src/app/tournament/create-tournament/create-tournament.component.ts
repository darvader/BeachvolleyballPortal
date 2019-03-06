import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/api/models';
import { TournamentResourceService } from 'src/app/api/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  tournament$: Observable<Tournament>;
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

  constructor(private ts: TournamentResourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tournament$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrieveTournamentUsingGET(parseInt(id, 10)))
    );

    this.tournamentForm = new FormGroup({
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

  submitForm() {
    const newTournament: Tournament = {
      ...this.tournamentForm.value,
    };
    this.ts.createTournamentUsingPOST(newTournament).subscribe();
    this.tournamentForm.reset();
  }
}
/*'id',
'name',
'category',
'gender',
'date',
'playMode',
'description',
'entryFee',
'priceMoney',
'contact'*/