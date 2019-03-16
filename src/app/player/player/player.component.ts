import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../api/models';
import { loc } from '../../shared/localizer';
import { PlayerResourceService } from '../../api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player$: Observable<Player>;
  loc = loc;

  constructor(private ts: PlayerResourceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrievePlayerUsingGET(parseInt(id, 10)))
    );

  }

  deletePlayer(player: Player) {
    if (confirm(`Sind Sie sich sicher, dass sie den Spieler ${player.name}, ${player.firstName} löschen möchten?`)) {
      this.ts.deletePlayerUsingDELETE(player.id).subscribe(() =>
        this.router.navigate(['player/all'])
      );
    }
  }

}
