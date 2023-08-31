import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClientModule) { }

  getWeatherData(cityName: string) {
    this.http.get(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapdi)
    })
  }
}
