import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenWeatherConfig} from './open-weather.config';
import {OneCallRequest} from './contracts/request/one-call-request.model';
import {OneCallResponse} from './contracts/response/one-call-response.model';
import {WeatherResponse} from './contracts/response/weather-response.model';
import {
  WeatherByCitiesInCircleRequest,
  WeatherByCitiesWithinRectangleZoneRequest,
  WeatherByCityNameRequest,
  WeatherByGeographicalCoordinatesRequest,
  WeatherByZipCodeRequest
} from './contracts/request/weather-request.model';
import {OpenWeatherEndpoint} from './open-weather-endpoint.enum';

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

  getCurrentWeatherByCityName(options: WeatherByCityNameRequest): Observable<WeatherResponse> {
    const {cityName, stateCode, countryCode, ...payload} = options;
    const query = this.toFilledQuery([cityName, stateCode, countryCode]);

    return this.get<WeatherResponse>(OpenWeatherEndpoint.WEATHER, {q: query, ...payload});
  }

  getCurrentWeatherByGeographicCoordinates(options: WeatherByGeographicalCoordinatesRequest): Observable<WeatherResponse> {
    return this.get<WeatherResponse>(OpenWeatherEndpoint.WEATHER, {...options});
  }

  getCurrentWeatherByZipCode(options: WeatherByZipCodeRequest): Observable<WeatherResponse> {
    const {zipCode, countryCode, ...payload} = options;
    const query = this.toFilledQuery([zipCode, countryCode]);

    return this.get<WeatherResponse>(OpenWeatherEndpoint.WEATHER, {q: query, ...payload});
  }

  getCurrentWeatherByCitiesWithinRectangleZone(options: WeatherByCitiesWithinRectangleZoneRequest): Observable<WeatherResponse> {
    const {lonLeft, lonRight, latBottom, latTop, zoom, ...payload} = options;
    const bbox = [lonLeft, latBottom, lonRight, latTop, zoom].join(',');

    return this.get(OpenWeatherEndpoint.BOX_CITY, {bbox, ...payload});
  }

  getCurrentWeatherByCitiesInCircle(options: WeatherByCitiesInCircleRequest): Observable<WeatherResponse> {
    return this.get(OpenWeatherEndpoint.FIND, options);
  }

  private get<T>(endpoint: string, options: { [param: string]: any | any[] }): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}/${endpoint}`, {
      params: options
    });
  }

  private toFilledQuery(payload: string[]): string {
    return payload.filter(item => !!item).join(',');
  }
}
