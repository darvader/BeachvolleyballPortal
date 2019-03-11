import { Component, OnInit } from '@angular/core';
import { TournamentResourceService, PlayerResourceService } from 'src/app/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament, Player } from 'src/app/api/models';
import { map, switchMap, startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  tournament$: Observable<Tournament>;
  players: Player[] = [];
  filteredPlayers: Observable<Player[]>;
  registrationForm: FormGroup;
  player1 = new FormControl('', [
    Validators.required,
  ])

  constructor(private ts: TournamentResourceService, private route: ActivatedRoute,
    private router: Router, private ps: PlayerResourceService, private location: Location) {
  }

  ngOnInit() {
    this.tournament$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrieveTournamentUsingGET(parseInt(id, 10)))
    );

    this.ps.getAllPlayersUsingGET().subscribe(p => this.players = p);

    this.registrationForm = new FormGroup({
      player1: this.player1,
      player2: new FormControl(' ', [
        Validators.required,
      ]),
    });

    this.filteredPlayers = this.player1.valueChanges
      .pipe(
        startWith(' '),
        map(player => player ? this.filterPlayers(player) : this.players.slice())
      );
  }

  submitForm() {

  }

  register(player1: Player, player2: Player) {

  }

  goBack() {
    this.location.back();
  }

  private filterPlayers(value: string): Player[] {
    if (value == '') {
      value = ' ';
    }
    const filterValues = value.toLowerCase().split(' ');
    console.log(filterValues);
    return this.players.filter(player => player.name.toLowerCase().includes(filterValues[0])
      || player.firstName.toLowerCase().includes(filterValues[0])).filter((player => player.name.toLowerCase().includes(filterValues[1])
        || player.firstName.toLowerCase().includes(filterValues[1])));
  }
}
