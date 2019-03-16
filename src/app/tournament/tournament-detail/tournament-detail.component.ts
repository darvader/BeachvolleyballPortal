import { Component, OnInit } from '@angular/core';
import { TournamentResourceService } from 'src/app/api/services';
import { Tournament } from 'src/app/api/models';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { loc } from 'src/app/shared/localizer';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  tournament$: Observable<Tournament>;
  loc = loc;

  constructor(private ts: TournamentResourceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tournament$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.ts.retrieveTournamentUsingGET(parseInt(id, 10)))
    );

  }

  deleteTournament(tournament: Tournament) {
    if (confirm(`Sind Sie sich sicher, dass sie das Turnier ${tournament.name} löschen möchten?`)) {
      this.ts.deleteTournamentUsingDELETE(tournament.id).subscribe(() =>
        this.router.navigate(['tournament/all'])
      );
    }
  }

}
