import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  baseURL = 'https://api.open-meteo.com/v1';

  constructor(private http: HttpClient) { }

  getBaseWeatherData(lat: number, lng: number, days: number): Observable<any> {
    return this.http.get<any> (this.baseURL + '/forecast?latitude=' + lat.toString() + '&longitude=' + lng.toString() + '&hourly=temperature_2m,precipitation,cloudcover&forecast_days=' + days.toString());
  }

  getAdvancedWeatherData(lat: number, lng: number, days: number): Observable<any> {
    return this.http.get<any> (this.baseURL + '/forecast?latitude=' + lat.toString() + '&longitude=' + lng.toString() + '&hourly=rain,snowfall,surface_pressure,visibility,windspeed_10m&forecast_days=' + days.toString());
  }

  getCityLatLng(city: string): Observable<any> {
    return this.http.get<any> ('https://geocoding-api.open-meteo.com/v1/search?name=' + city);
  }
}
