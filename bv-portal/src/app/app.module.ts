import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentListItemComponent } from './tournament/tournament-list-item/tournament-list-item.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { SharedModule, INIT_API_CONFIGURATION } from './shared/shared.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent,
    TournamentListItemComponent,
    TournamentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule
  ],
  bootstrap: [AppComponent],
  providers: [
    INIT_API_CONFIGURATION
  ]
})
export class AppModule {

  
 }


