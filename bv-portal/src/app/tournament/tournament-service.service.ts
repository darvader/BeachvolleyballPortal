import { Injectable } from '@angular/core';
import { Tournament } from '../shared/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentServiceService {

  constructor() { }

  getAll(): Tournament {
	  return [
		  {
			name: 'dotSource-Cup',
			date: new Date(2019,6,6),
			category: 'Kategorie 3',
			description: 'Schöner Cup in Jena',
			playMode: 'Gruppenspiel und Single-Out',
			gender: string; // men, women, mixed
			startingAmount: number;
			priceMoney: number;
			contact: string;
			location: string;
		  }, {

		  }
	  ]
  }
}
