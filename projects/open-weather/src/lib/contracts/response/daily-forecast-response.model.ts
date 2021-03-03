import {CityEntity} from './entities/city-entity.model';
import {BaseEntity} from './entities/base-entity.model';
import {WeatherEntity} from './entities/weather-entity.model';
import {WindEntity} from './entities/wind-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {TemperatureFullDayEntity} from './entities/temperature-full-day-entity.model';
import {TemperatureMinMaxEntity} from './entities/temperature-min-max-entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';

export interface DailyForecastResponse extends BaseEntity {
  city: CityEntity & {
    population: number;
  };
  cnt: number;
  list: WindEntity & SunriseSunsetEntity & PressureHumidityEntity & {
    dt: number;
    temp: TemperatureFullDayEntity & TemperatureMinMaxEntity;
    feels_like: TemperatureFullDayEntity;
    weather: WeatherEntity[];
    clouds: number;
    pop: number;
  }[];
}
