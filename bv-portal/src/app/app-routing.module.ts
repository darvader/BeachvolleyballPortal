import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';

const routes: Routes = [
  {path: 'tournaments', component: TournamentListComponent},
  {path: '', redirectTo: '/tournaments', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
