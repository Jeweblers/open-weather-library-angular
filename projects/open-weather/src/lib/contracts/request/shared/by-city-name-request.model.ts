import {CityNameParameters} from '../parameters/city-name-parameters.model';
import {CountParameters} from '../parameters/count-parameters.model';
import {ModeParameters} from '../parameters/mode-parameters.model';
import {UnitsParameters} from '../parameters/units-parameters.model';
import {LangParameters} from '../parameters/lang-parameters.model';

export interface ByCityNameRequest extends CityNameParameters, CountParameters, ModeParameters, UnitsParameters, LangParameters {
}
