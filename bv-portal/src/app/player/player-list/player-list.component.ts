import { Component, OnInit } from '@angular/core';
import { PlayerResourceService } from '../../api/services';
import { Player } from '../../api/models';
import { loc } from '../../shared/localizer';
import { Router, ActivatedRoute } from '@angular/router';

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
    'firstName',
    'gender',
    'email',
  ];

  loc = loc;

  constructor(private ps: PlayerResourceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps.getAllPlayersUsingGET().subscribe(p => this.players = p);
  }

  goDetails(player: Player) {
    this.router.navigate(['../details/', player.id], {relativeTo: this.route});
  }

}
