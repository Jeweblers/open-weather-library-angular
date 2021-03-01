export interface OneCallRequest {
  lat: number;
  lon: number;
  exclude?: string;
  units?: 'standard' | 'metric' | 'imperial';
  lang?: string;
}
