import { Component, OnInit } from '@angular/core';
import { TournamentResourceService } from 'src/app/api/services';
import { Tournament } from 'src/app/api/models';
import { loc } from 'src/app/shared/localizer';
import { Router, ActivatedRoute } from '@angular/router';
import { hasRole } from 'src/app/shared/helpers';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  hasRole = hasRole;
  tournaments: Tournament[] = [];
  columnsToDisplay = [
    'id',
    'name',
    'category',
    'gender',
    'date',
    'playMode',
 //   'description',
    'entryFee',
    'priceMoney',
    'contact'
  ];

  loc = loc;

  constructor(private ts: TournamentResourceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ts.getAllTournamentsUsingGET().subscribe(t => {
      this.tournaments = t;
    });
  }

  goDetails(tournament: Tournament) {
    this.router.navigate(['../details/', tournament.id], {relativeTo: this.route});
  }

}
