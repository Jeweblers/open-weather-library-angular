import {WeatherEntity} from './entities/weather-entity.model';
import {CoordEntity} from './entities/coord-entity.model';
import {WindEntity} from './entities/wind-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';

export interface WeatherResponse {
  coord: CoordEntity;
  weather: WeatherEntity[];
  base: string;
  main: PressureHumidityEntity & {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: WindEntity;
  clouds: {
    all: number;
  };
  dt: number;
  sys: SunriseSunsetEntity &{
    type: number;
    id: number;
    country: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
