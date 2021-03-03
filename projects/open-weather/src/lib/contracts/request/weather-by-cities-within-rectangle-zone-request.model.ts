import {UnitsParameters} from './parameters/units-parameters.model';
import {LangParameters} from './parameters/lang-parameters.model';

export interface WeatherByCitiesWithinRectangleZoneRequest extends UnitsParameters, LangParameters {
  lonLeft: string;
  lonRight: string;
  latBottom: string;
  latTop: string;
  zoom: string;
}
