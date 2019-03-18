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
    Validators.required,
  ])
  player2 = new FormControl('', [
    Validators.required,
  ])
  registration: Registration;

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
      player2: this.player2,
    });

    this.filteredPlayers1 = this.player1.valueChanges
      .pipe(
        startWith(' '),
        map(search => search ? this.filterPlayers(search, this.players) : this.players.slice())
      );
    this.filteredPlayers2 = this.player2.valueChanges
      .pipe(
        startWith(' '),
        map(search => search ? this.filterPlayers(search, this.players) : this.players.slice())
      );
  }

  submitForm() {
    const player1String: string = this.registrationForm.value.player1;
    const player2String: string = this.registrationForm.value.player2;
    debugger;
    const player1 = this.getPlayer(player1String);
    const player2 = this.getPlayer(player2String);
    if (player1 === null || player2 === null) {
      return;
    }
    const registration: Registration = {
      player1: player1,
      player2: player2,
      tournament: this.tournament
    }
    this.ts.registerTournamentUsingPOST(registration).subscribe(r => this.router.navigate(['../../registrations/', this.tournament.id], {relativeTo: this.route}));
  }

  private getPlayer(player1String: string) {
    const players = this.filterPlayersExact(player1String, this.players);
    if (players.length === 1) {
      return players[0];
    }
  }

  goBack() {
    this.location.back();
  }

  private filterPlayers(value: string, players: Player[]): Player[] {
    const filterValues = [...value.toLowerCase().split(/[\s,]+/), '', ''];
    return players.filter(player => player.name.toLowerCase().includes(filterValues[0])
      ).filter((player => player.firstName.toLowerCase().includes(filterValues[1]))).filter(player => player.club.toLowerCase().includes(filterValues[2]));
  }

  private filterPlayersExact(value: string, players: Player[]): Player[] {
    const filterValues = [...value.toLowerCase().split(/[\s,]+/), '', ''];
    return players.filter(player => player.name === filterValues[0]
      ).filter((player => player.firstName === filterValues[1])).filter(player => player.club === filterValues[2]);
  }
}
