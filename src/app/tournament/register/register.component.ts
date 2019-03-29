import { Component, OnInit } from '@angular/core';
import { TournamentResourceService, PlayerResourceService } from 'src/app/api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament, Player } from 'src/app/api/models';
import { map, switchMap, startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Registration } from 'src/app/api/models/registration';
import { hasRole } from 'src/app/shared/helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  hasRole = hasRole;
  tournament: Tournament;
  players: Player[] = [];
  filteredPlayers1: Observable<Player[]>;
  filteredPlayers2: Observable<Player[]>;
  registrationForm: FormGroup;
  player1 = new FormControl('', [
  ])
  player2 = new FormControl('', [
  ])
  registration: Registration;
  p1: Player = {};
  p2: Player = {};
  player1Id = new FormControl('', [
    Validators.required,
  ]);
  player2Id = new FormControl('', [
    Validators.required,
  ]);
  error: string;
  
  constructor(private ts: TournamentResourceService, private route: ActivatedRoute,
    private router: Router, private ps: PlayerResourceService, private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrieveTournamentUsingGET(parseInt(id, 10)))
    ).subscribe(t => this.tournament = t);

    this.ps.getAllPlayersUsingGET().subscribe(p => {
      this.players = p;
    });

    this.registrationForm = new FormGroup({
      player1: this.player1,
      player1Id: this.player1Id,
      player2: this.player2,
      player2Id: this.player2Id,
    });

    this.filteredPlayers1 = this.player1.valueChanges
      .pipe(
        map(search => search ? this.filterPlayers(search, this.players) : [])
      );
    this.filteredPlayers2 = this.player2.valueChanges
      .pipe(
        startWith(' '),
        map(search => search ? this.filterPlayers(search, this.players) : [])
      );
  }

  submitForm() {
    const player1 = this.getPlayer(this.registrationForm.value.player1Id);
    const player2 = this.getPlayer(this.registrationForm.value.player2Id);
    if (player1 === undefined || player2 === undefined) {
      return;
    }
    const registration: Registration = {
      player1: player1,
      player2: player2,
      tournament: this.tournament
    }
    this.ts.registerTournamentUsingPOST(registration).subscribe(
      r => this.router.navigate(['../../registrations/', this.tournament.id], {relativeTo: this.route}),
      error => this.error = error
      );
  }

  private getPlayer(playerId: number) {
    return this.players.filter(player => player.id === playerId)[0];
  }

  goBack() {
    this.location.back();
  }

  private filterPlayers(value: string, players: Player[]): Player[] {
    const filterValues = [...value.toLowerCase().split(/[\s,]+/), '', ''];
//    debugger;
    const registeredPlayers: number[] = this.tournament ? [...this.tournament.registrations.map(r => r.player1.id), ...this.tournament.registrations.map(r => r.player2.id)]: [];
    console.log(registeredPlayers);
    return players
    .filter(player => !registeredPlayers.includes(player.id))
    .filter(player => player.name.toLowerCase().includes(filterValues[0]))
    .filter(player => player.firstName.toLowerCase().includes(filterValues[1]))
    .filter(player => player.club.toLowerCase().includes(filterValues[2]));
  }

  changePlayer1(player: Player) {
    this.player1Id.setValue(player.id);
  }
  
  changePlayer2(player: Player) {
    this.player2Id.setValue(player.id);
  }
}
