import { Component, OnInit } from '@angular/core';
import { PlayerResourceService } from '../api/services';
import { Observable } from 'rxjs';
import { Player } from '../api/models';
import { loc } from '../shared/localizer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  columnsToDisplay = [
    'id',
    'name',
    'gender',
  ];

  loc = loc;

  constructor(private ps: PlayerResourceService) { }

  ngOnInit() {
    this.ps.getAllPlayersUsingGET().subscribe(p => this.players = p);
  }

}
