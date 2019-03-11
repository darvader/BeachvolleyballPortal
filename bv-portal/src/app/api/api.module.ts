/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { WebMvcLinksHandlerService } from './services/web-mvc-links-handler.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { PlayerResourceService } from './services/player-resource.service';
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
    WebMvcLinksHandlerService,
    BasicErrorControllerService,
    PlayerResourceService,
    TournamentResourceService
  ],
})
export class ApiModule { }
