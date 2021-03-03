import {WeatherEntity} from './entities/weather-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {TemperatureFullDayEntity} from './entities/temperature-full-day-entity.model';
import {TemperatureMinMaxEntity} from './entities/temperature-min-max-entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';

export interface OneCallResponse {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  current?: SunriseSunsetEntity & PressureHumidityEntity & {
    dt: number;
    temp: number;
    feels_like: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherEntity[];
  };
  minutely?: {
    dt: number;
    precipitation: number;
  }[];
  hourly?: PressureHumidityEntity & {
    dt: number;
    temp: number;
    feels_like: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    pop: number;
    weather: WeatherEntity[];
  }[];
  daily?: SunriseSunsetEntity & PressureHumidityEntity & {
    dt: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
    temp: TemperatureFullDayEntity & TemperatureMinMaxEntity;
    feels_like: TemperatureFullDayEntity;
    weather: WeatherEntity[];
  }[];
}
