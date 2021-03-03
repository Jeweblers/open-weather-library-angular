import {LatLonParameters} from '../parameters/lat-lon-parameters.model';
import {ModeParameters} from '../parameters/mode-parameters.model';
import {CountParameters} from '../parameters/count-parameters.model';
import {LangParameters} from '../parameters/lang-parameters.model';

export interface ByGeographicalCoordinatesRequest extends LatLonParameters, ModeParameters, CountParameters, LangParameters {
}
