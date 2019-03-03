import { NgModule, Provider, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { ApiConfiguration } from '../api/api-configuration';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule
  ]
})
export class SharedModule { }

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => {
    config.rootUrl = 'http://localhost:8080';
  };
}

export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};

