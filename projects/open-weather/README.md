# OpenWeather Angular Client

This library provides Angular client bindings to the [OpenWeather](https://openweathermap.org/) service.

## Setup

Import OpenWeatherModule inside your module

```typescript
import {OpenWeatherModule} from '@kilimanjaare/open-weather';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
      OpenWeatherModule.forRoot({
        apiKey: 'your-api-key',
        apiUrl: 'your-api-url'
      })
  ]
})
```

## Usage

Inject OpenWeatherService in your class

```typescript
import {OpenWeatherService} from '@kiliemanjaare/open-weather';

export class TestComponent {
  constructor(
    private openWeatherService: OpenWeatherService
  ) {
  }
}
```
