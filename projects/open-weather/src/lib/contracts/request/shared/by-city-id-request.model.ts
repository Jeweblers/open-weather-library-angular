import {CountParameters} from '../parameters/count-parameters.model';
import {ModeParameters} from '../parameters/mode-parameters.model';
import {UnitsParameters} from '../parameters/units-parameters.model';
import {LangParameters} from '../parameters/lang-parameters.model';

export interface ByCityIdRequest extends CountParameters, ModeParameters, UnitsParameters, LangParameters {
  id: number;
}
