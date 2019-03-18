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
  players1: Player[] = [];
  players2: Player[] = [];
  filteredPlayers1: Observable<Player[]>;
  filteredPlayers2: Observable<Player[]>;
  registrationForm: FormGroup;
  player1 = new FormControl('', [
    Validators.required,
  ])
  player2 = new FormControl('', [
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

    this.ps.getAllPlayersUsingGET().subscribe(p => {
      this.players1 = p;
      this.players2 = [...this.players1];
    });

    this.registrationForm = new FormGroup({
      player1: this.player1,
      player2: this.player2,
    });

    this.filteredPlayers1 = this.player1.valueChanges
      .pipe(
        startWith(' '),
        map(search => search ? this.filterPlayers(search, this.players1) : this.players1.slice())
      );
    this.filteredPlayers2 = this.player2.valueChanges
      .pipe(
        startWith(' '),
        map(search => search ? this.filterPlayers(search, this.players2) : this.players2.slice())
      );
  }

  submitForm() {

  }

  register(player1: Player, player2: Player) {

  }

  goBack() {
    this.location.back();
  }

  private filterPlayers(value: string, players: Player[]): Player[] {
    const filterValues = [...value.toLowerCase().split(/[\s,]+/), '', ''];
    return players.filter(player => player.name.toLowerCase().includes(filterValues[0])
      ).filter((player => player.firstName.toLowerCase().includes(filterValues[1]))).filter(player => player.club.toLowerCase().includes(filterValues[2]));
  }
}
