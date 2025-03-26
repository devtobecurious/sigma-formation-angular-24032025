import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherData } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  getOne(): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q=London&appid=6f4e0d4c8f9c4b3a3b');
  }
}
