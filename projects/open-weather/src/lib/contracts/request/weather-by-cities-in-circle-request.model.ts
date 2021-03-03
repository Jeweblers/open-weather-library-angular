import {UnitsParameters} from './parameters/units-parameters.model';
import {LangParameters} from './parameters/lang-parameters.model';
import {ModeParameters} from './parameters/mode-parameters.model';
import {LatLonParameters} from './parameters/lat-lon-parameters.model';
import {CountParameters} from './parameters/count-parameters.model';

export interface WeatherByCitiesInCircleRequest extends UnitsParameters, LangParameters, ModeParameters, LatLonParameters, CountParameters {
}
