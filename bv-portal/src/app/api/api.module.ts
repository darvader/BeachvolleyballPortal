/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { PlayerResourceService } from './services/player-resource.service';
import { WebMvcLinksHandlerService } from './services/web-mvc-links-handler.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { TournamentResourceService } from './services/tournament-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    PlayerResourceService,
    WebMvcLinksHandlerService,
    BasicErrorControllerService,
    TournamentResourceService
  ],
})
export class ApiModule { }
