import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { EditTournamentComponent } from './tournament/edit-tournament/edit-tournament.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerComponent } from './player/player/player.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/tournament/all', pathMatch: 'full'},
  {path: 'tournament/all', component: TournamentListComponent},
  {path: 'tournament/edit/:id', component: EditTournamentComponent},
  {path: 'tournament/details/:id', component: TournamentDetailComponent},
  {path: 'player/all', component: PlayerListComponent},
  {path: 'player/edit/:id', component: PlayerEditComponent},
  {path: 'player/details/:id', component: PlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
