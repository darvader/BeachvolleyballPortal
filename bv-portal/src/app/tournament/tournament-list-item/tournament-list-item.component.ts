import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from 'src/app/shared/tournament';

@Component({
  selector: 'app-tournament-list-item',
  templateUrl: './tournament-list-item.component.html',
  styleUrls: ['./tournament-list-item.component.scss']
})
export class TournamentListItemComponent implements OnInit {

  @Input() tournament: Tournament;

  constructor() { }

  ngOnInit() {
    console.log(this.tournament);
  }

}
