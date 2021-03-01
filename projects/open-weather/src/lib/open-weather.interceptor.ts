import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenWeatherConfig} from './open-weather.config';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {
  constructor(private config: OpenWeatherConfig) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(this.config.apiUrl)) {
      return next.handle(request.clone({
        setParams: {
          appid: this.config.apiKey
        }
      }));
    }

    return next.handle(request);
  }
}
