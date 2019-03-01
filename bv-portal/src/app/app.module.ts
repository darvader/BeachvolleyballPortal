import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentListItemComponent } from './tournament/tournament-list-item/tournament-list-item.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent,
    TournamentListItemComponent,
    TournamentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
