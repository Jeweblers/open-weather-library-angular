import {ZipParameters} from '../parameters/zip-parameters.model';
import {ModeParameters} from '../parameters/mode-parameters.model';
import {CountParameters} from '../parameters/count-parameters.model';
import {LangParameters} from '../parameters/lang-parameters.model';

export interface ByZipCodeRequest extends ZipParameters, ModeParameters, CountParameters, LangParameters {
}
