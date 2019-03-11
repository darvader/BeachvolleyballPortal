import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Provider, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { SharedModule, INIT_API_CONFIGURATION } from './shared/shared.module';
import { MatTableModule} from '@angular/material/table';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData, DatePipe } from '@angular/common';
import { EditTournamentComponent } from './tournament/edit-tournament/edit-tournament.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlayerComponent } from './player/player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import { PlayerEditComponent } from './player/player-edit/player-edit.component'; 


@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent,
    TournamentDetailComponent,
    EditTournamentComponent,
    PlayerComponent,
    PlayerListComponent,
    MenuComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    INIT_API_CONFIGURATION,
    DatePipe
  ]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }

}
