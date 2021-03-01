import {ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OpenWeatherInterceptor} from './open-weather.interceptor';
import {OpenWeatherConfig} from './open-weather.config';
import {OpenWeatherService} from './open-weather.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    OpenWeatherService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OpenWeatherInterceptor,
      multi: true
    },
  ]
})
export class OpenWeatherModule {
  static forRoot(config: OpenWeatherConfig): ModuleWithProviders<any> {
    return {
      ngModule: OpenWeatherModule,
      providers: [
        {
          provide: OpenWeatherConfig,
          useValue: config
        }
      ]
    };
  }

  constructor(config: OpenWeatherConfig) {
  }
}
