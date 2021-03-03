import {LatLonParameters} from './parameters/lat-lon-parameters.model';
import {UnitsParameters} from './parameters/units-parameters.model';
import {LangParameters} from './parameters/lang-parameters.model';

export interface HistoricalWeatherRequest extends LatLonParameters, UnitsParameters, LangParameters {
  dt: number;
}
