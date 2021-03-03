import {BaseEntity} from './entities/base-entity.model';
import {CityEntity} from './entities/city-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {TemperatureMinMaxEntity} from './entities/temperature-min-max-entity.model';
import {TemperatureFullDayEntity} from './entities/temperature-full-day-entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';
import {WeatherEntity} from './entities/weather-entity.model';
import {WindEntity} from './entities/wind-entity.model';

export interface ForecastClimateResponse extends BaseEntity {
  city: CityEntity;
  list: SunriseSunsetEntity & PressureHumidityEntity & WindEntity & {
    dt: number;
    temp: TemperatureMinMaxEntity & TemperatureFullDayEntity;
    feels_like: TemperatureFullDayEntity;
    weather: WeatherEntity;
    clouds: number;
    rain: number;
  }[];
}
