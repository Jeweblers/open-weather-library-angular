import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenWeatherConfig} from './open-weather.config';
import {OneCallRequest} from './contracts/request/one-call-request.model';
import {OneCallResponse} from './contracts/response/one-call-response.model';
import {WeatherResponse} from './contracts/response/weather-response.model';
import {OpenWeatherEndpoint} from './open-weather-endpoint.enum';
import {WeatherByCitiesWithinRectangleZoneRequest} from './contracts/request/weather-by-cities-within-rectangle-zone-request.model';
import {WeatherByCitiesInCircleRequest} from './contracts/request/weather-by-cities-in-circle-request.model';
import {HourlyForecastResponse} from './contracts/response/hourly-forecast-response.model';
import {HistoricalWeatherRequest} from './contracts/request/historical-weather-request.model';
import {HistoricalWeatherResponse} from './contracts/response/historical-weather-response.model';
import {DailyForecastResponse} from './contracts/response/daily-forecast-response.model';
import {ByCityNameRequest} from './contracts/request/shared/by-city-name-request.model';
import {ForecastClimateResponse} from './contracts/response/forecast-climate-response.model';
import {ByCityIdRequest} from './contracts/request/shared/by-city-id-request.model';
import {ByGeographicalCoordinatesRequest} from './contracts/request/shared/by-geographical-coordinates-request.model';
import {ByZipCodeRequest} from './contracts/request/shared/by-zip-code-request.model';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient,
    private config: OpenWeatherConfig
  ) {
  }

  /**************************************************************
   * One Call
   **************************************************************/

  getCurrentAndForecastWeather(options: OneCallRequest): Observable<OneCallResponse> {
    return this.get(OpenWeatherEndpoint.ONECALL, options);
  }

  getHistoricalWeather(options: HistoricalWeatherRequest): Observable<HistoricalWeatherResponse> {
    return this.get(OpenWeatherEndpoint.ONECALL_TIMEMACHINE, options);
  }

  /**************************************************************
   * Current weather
   **************************************************************/

  getCurrentWeatherByCityName(options: ByCityNameRequest): Observable<WeatherResponse> {
    return this.getByCityName(OpenWeatherEndpoint.WEATHER, options);
  }

  getCurrentWeatherByGeographicCoordinates(options: ByGeographicalCoordinatesRequest): Observable<WeatherResponse> {
    return this.getByGeographicalCoordinates(OpenWeatherEndpoint.WEATHER, options);
  }

  getCurrentWeatherByZipCode(options: ByZipCodeRequest): Observable<WeatherResponse> {
    return this.getByZipCode(OpenWeatherEndpoint.WEATHER, options);
  }

  getCurrentWeatherByCitiesWithinRectangleZone(options: WeatherByCitiesWithinRectangleZoneRequest): Observable<WeatherResponse> {
    const {lonLeft, lonRight, latBottom, latTop, zoom, ...payload} = options;
    const bbox = [lonLeft, latBottom, lonRight, latTop, zoom].join(',');

    return this.get(OpenWeatherEndpoint.BOX_CITY, {bbox, ...payload});
  }

  getCurrentWeatherByCitiesInCircle(options: WeatherByCitiesInCircleRequest): Observable<WeatherResponse> {
    return this.get(OpenWeatherEndpoint.FIND, options);
  }

  /**************************************************************
   * Hourly forecast
   **************************************************************/

  getHourlyForecastByCityName(options: ByCityNameRequest): Observable<HourlyForecastResponse> {
    return this.getByCityName(OpenWeatherEndpoint.FORECAST_HOURLY, options);
  }

  getHourlyForecastByCityId(options: ByCityIdRequest): Observable<HourlyForecastResponse> {
    return this.getByCityId(OpenWeatherEndpoint.FORECAST_HOURLY, options);
  }

  getHourlyForecastByGeographicalCoordinates(options: ByGeographicalCoordinatesRequest): Observable<HourlyForecastResponse> {
    return this.getByGeographicalCoordinates(OpenWeatherEndpoint.FORECAST_HOURLY, options);
  }

  getHourlyForecaseByZipCode(options: ByZipCodeRequest): Observable<HourlyForecastResponse> {
    return this.getByZipCode(OpenWeatherEndpoint.FORECAST_HOURLY, options);
  }

  /**************************************************************
   * Daily forecast
   **************************************************************/

  getDailyForecastByCityName(options: ByCityNameRequest): Observable<DailyForecastResponse> {
    return this.getByCityName(OpenWeatherEndpoint.FORECAST_DAILY, options);
  }

  getDailyForecastByCityId(options: ByCityIdRequest): Observable<DailyForecastResponse> {
    return this.getByCityId(OpenWeatherEndpoint.FORECAST_DAILY, options);
  }

  getDailyForecastByGeographicalCoordinates(options: ByGeographicalCoordinatesRequest): Observable<DailyForecastResponse> {
    return this.getByGeographicalCoordinates(OpenWeatherEndpoint.FORECAST_DAILY, options);
  }

  getDailyForecastByZipCode(options: ByZipCodeRequest): Observable<DailyForecastResponse> {
    return this.getByZipCode(OpenWeatherEndpoint.FORECAST_DAILY, options);
  }

  /**************************************************************
   * Climate forecast
   **************************************************************/

  getClimateForecastByCityName(options: ByCityNameRequest): Observable<ForecastClimateResponse> {
    return this.getByCityName(OpenWeatherEndpoint.FORECAST_CLIMATE, options);
  }

  getClimateForecastByCityId(options: ByCityIdRequest): Observable<ForecastClimateResponse> {
    return this.getByCityId(OpenWeatherEndpoint.FORECAST_CLIMATE, options);
  }

  getClimateForecastByGeographicalCoordinates(options: ByGeographicalCoordinatesRequest): Observable<ForecastClimateResponse> {
    return this.getByGeographicalCoordinates(OpenWeatherEndpoint.FORECAST_CLIMATE, options);
  }

  getClimateForecastByZipCode(options: ByZipCodeRequest): Observable<ForecastClimateResponse> {
    return this.getByZipCode(OpenWeatherEndpoint.FORECAST_CLIMATE, options);
  }

  /**************************************************************
   * Shared request methods
   **************************************************************/

  private getByCityName<T>(endpoint: OpenWeatherEndpoint, options: ByCityNameRequest): Observable<T> {
    const {cityName, stateCode, countryCode, ...payload} = options;
    const query = this.toFilledQuery([cityName, stateCode, countryCode]);

    return this.get(endpoint, {q: query, ...payload});
  }

  private getByCityId<T>(endpoint: OpenWeatherEndpoint, options: ByCityIdRequest): Observable<T> {
    return this.get(endpoint, options);
  }

  private getByGeographicalCoordinates<T>(endpoint: OpenWeatherEndpoint, options: ByGeographicalCoordinatesRequest): Observable<T> {
    return this.get(endpoint, options);
  }

  private getByZipCode<T>(endpoint: OpenWeatherEndpoint, options: ByZipCodeRequest): Observable<T> {
    const {zip, countryCode, ...payload} = options;
    const query = this.toFilledQuery([zip, countryCode]);

    return this.get(endpoint, {q: query, ...payload});
  }

  /**************************************************************
   * Helper methods
   **************************************************************/

  private get(endpoint: string, options: { [param: string]: any | any[] }): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/${endpoint}`, {
      params: options
    });
  }

  private toFilledQuery(payload: string[]): string {
    return payload.filter(item => !!item).join(',');
  }
}
