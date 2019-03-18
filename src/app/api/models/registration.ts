/* tslint:disable */
import { Player } from './player';
import { Tournament } from './tournament';
export interface Registration {
  id?: number;
  player1?: Player;
  player2?: Player;
  tournament?: Tournament;
}
