import {TestBed} from '@angular/core/testing';

import {OpenWeatherService} from './open-weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {OpenWeatherModule} from './open-weather.module';
import {OneCallResponse} from './contracts/response/one-call-response.model';

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OpenWeatherModule.forRoot({
          apiKey: 'test-id',
          apiUrl: 'http://api.dev'
        }),
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(OpenWeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned observable should match the right data', () => {
    const mockResponse: OneCallResponse = {
      lat: 10.001
    };

    service.oneCall({
      lat: 10.001,
      lon: 20.002
    }).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpTestingController.expectOne('http://api.dev/onecall?lat=10.001&lon=20.002&appid=test-id');

    expect(request.request.method).toEqual('GET');

    request.flush(mockResponse);
  });

  it('should match response of current weather with the right data', () => {
    const responseMock = {};

    service.getCurrentWeather({
      location: 'Odessa'
    }).subscribe(response => {
      expect(response).toEqual(responseMock);
    });

    const request = httpTestingController.expectOne('http://api.dev/weather?q=Odessa&appid=test-id');

    expect(request.request.method).toEqual('GET');

    request.flush(responseMock);
  });
});
