export interface WeatherUnitsLangRequest {
  units?: 'standard' | 'metric' | 'imperial';
  lang?: string;
}

export interface WeatherCommonRequest extends WeatherUnitsLangRequest {
  mode?: 'xml' | 'html';
}

export interface WeatherRequest {
  location: string;
  countryCode?: string;
}

export interface WeatherByCityNameRequest extends WeatherCommonRequest {
  cityName: string;
  stateCode?: string;
  countryCode?: string;
}

export interface WeatherByGeographicalCoordinatesRequest extends WeatherCommonRequest {
  lat: number;
  lon: number;
}

export interface WeatherByZipCodeRequest extends WeatherCommonRequest {
  zipCode: string;
  countryCode: string;
}

export interface WeatherByCitiesWithinRectangleZoneRequest extends WeatherUnitsLangRequest {
  lonLeft: string;
  lonRight: string;
  latBottom: string;
  latTop: string;
  zoom: string;
}

export interface WeatherByCitiesInCircleRequest extends WeatherCommonRequest {
  lat: number;
  lon: number;
  cnt: number;
}
