import { Component, OnInit } from '@angular/core';
import { TournamentResourceService } from 'src/app/api/services';
import { Tournament } from 'src/app/api/models';
import { loc } from 'src/app/shared/localizer';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  tournaments: Tournament[] = [];
  columnsToDisplay = [
    'id',
    'name',
    'category',
    'gender',
    'date',
    'playMode',
    'description',
    'entryFee',
    'priceMoney',
    'contact'
  ];

  loc = loc;

  constructor(private ts: TournamentResourceService) { }

  ngOnInit() {
    this.ts.getAllTournamentsUsingGET().subscribe(t => {
      this.tournaments = t;
      console.log(t);
    });
  }

  mapCategory(category: string): string {
    switch (category) {
      case 'CATEGORY1': {
        return 'Kategorie 1';
      }
      case 'CATEGORY2': {
        return 'Kategorie 2';
      }
      case 'CATEGORY3': {
        return 'Kategorie 3';
      }
      case 'CATEGORY4': {
        return 'Kategorie 4';
      }
      default: {
        return category;
      }

    }
  }

}
