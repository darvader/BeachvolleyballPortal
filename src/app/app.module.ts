import { DatePipe, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerComponent } from './player/player/player.component';
import { INIT_API_CONFIGURATION, SharedModule } from './shared/shared.module';
import { EditTournamentComponent } from './tournament/edit-tournament/edit-tournament.component';
import { RegisterComponent } from './tournament/register/register.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor, ErrorInterceptor } from './api/helpers';
import { LoginComponent } from './login/login.component';
import { RegistrationListComponent } from './tournament/registration-list/registration-list.component';



export const imports = [
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
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
];
export const declarations = [
  AppComponent,
  TournamentListComponent,
  TournamentDetailComponent,
  EditTournamentComponent,
  PlayerComponent,
  PlayerListComponent,
  MenuComponent,
  PlayerEditComponent,
  RegisterComponent,
  LoginComponent,
  RegistrationListComponent
];

export const providers = [
  { provide: LOCALE_ID, useValue: 'de' },
  INIT_API_CONFIGURATION,
  DatePipe,
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: MAT_DATE_LOCALE, useValue: LOCALE_ID},
];

@NgModule({
  declarations: declarations,
  imports: imports,
  bootstrap: [AppComponent],
  providers: providers
})
export class AppModule {
  constructor() {
    init();
  }

  
}
export function init() {
  registerLocaleData(localeDe);
}

