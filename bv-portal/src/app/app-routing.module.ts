import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';

const routes: Routes = [
  {path: 'tournament/all', component: TournamentListComponent},
  {path: '', redirectTo: '/tournament/all', pathMatch: 'full'},
  {path: 'tournament/create', component: CreateTournamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
