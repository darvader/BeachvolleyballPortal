import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Provider, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentListItemComponent } from './tournament/tournament-list-item/tournament-list-item.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { SharedModule, INIT_API_CONFIGURATION } from './shared/shared.module';
import { MatTableModule} from '@angular/material/table';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent,
    TournamentListItemComponent,
    TournamentDetailComponent,
    CreateTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    INIT_API_CONFIGURATION
  ]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }

}
