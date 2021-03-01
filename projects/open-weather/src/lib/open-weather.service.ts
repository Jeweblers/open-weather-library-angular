import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenWeatherConfig} from './open-weather.config';
import {OneCallRequest} from './contracts/request/one-call-request.model';
import {OneCallResponse} from './contracts/response/one-call-response.model';
import {WeatherResponse} from './contracts/response/weather-response.model';
import {WeatherRequest} from './contracts/request/weather-request.model';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient,
    private config: OpenWeatherConfig
  ) {
  }

  oneCall(options: OneCallRequest): Observable<OneCallResponse> {
    return this.get<OneCallResponse>(`onecall`, options as any);
  }

  getCurrentWeather(options: WeatherRequest): Observable<WeatherResponse> {
    return this.get<WeatherResponse>('weather', {q: Object.values(options).join(',')});
  }

  private get<T>(endpoint: string, options: { [param: string]: string | string[] }): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}/${endpoint}`, {
      params: options
    });
  }
}
