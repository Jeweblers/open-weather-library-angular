import {CityEntity} from './entities/city-entity.model';
import {WeatherEntity} from './entities/weather-entity.model';
import {WindEntity} from './entities/wind-entity.model';
import {BaseEntity} from './entities/base-entity.model';
import {SunriseSunsetEntity} from './entities/sunrise-sunset.entity.model';
import {PressureHumidityEntity} from './entities/pressure-humidity-entity.model';

export interface HourlyForecastResponse extends BaseEntity{
  cnt: number;
  list: {
    dt: number;
    main: PressureHumidityEntity & {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      sea_level: number;
      grnd_level: number;
      temp_kf: number;
    };
    weather: WeatherEntity[];
    clouds: {
      all: number;
    };
    wind: WindEntity;
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: CityEntity & SunriseSunsetEntity;
}
