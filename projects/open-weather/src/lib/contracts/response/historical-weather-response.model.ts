import {WeatherEntity} from './entities/weather-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';

export interface HistoricalWeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: SunriseSunsetEntity & PressureHumidityEntity & {
    dt: number;
    temp: number;
    feels_like: number;
    dew_point: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherEntity[]
  };
  hourly: PressureHumidityEntity & {
    dt: number;
    temp: number;
    feels_like: number;
    dew_point: number;
    clouds: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherEntity[]
  }[];
}
