import { Component, OnInit } from '@angular/core';
import { TournamentResourceService } from 'src/app/api/services';
import { Tournament } from 'src/app/api/models';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  tournaments: Tournament[];

  constructor(private ts: TournamentResourceService) { }

  ngOnInit() {
    this.ts.getAllTournamentsUsingGET().subscribe(t => {
      this.tournaments = t;
      console.log(t);
    });
  }

}
