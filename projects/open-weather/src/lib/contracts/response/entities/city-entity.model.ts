import {CoordEntity} from './coord-entity.model';

export interface CityEntity {
  id: number;
  name: string;
  country: string;
  coord: CoordEntity;
  timezone: number;
}
