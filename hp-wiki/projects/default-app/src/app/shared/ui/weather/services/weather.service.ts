import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherData } from '../models';
import { filter, interval, Observable, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  private coordinates$ = new Observable<{ lat: number, lon: number }>((observer) => {
    if (! ("geolocation" in navigator)) {
      return observer.error('Geolocation is not available');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      observer.next({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
      observer.complete();

    });
  }).pipe(shareReplay(1));

  getOne(): Observable<WeatherData> {
    return interval(1000).pipe(
      switchMap(tick => this.coordinates$),
      switchMap(coord => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=weather_code,temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
        return this.http.get<WeatherData>(url)
     }),
     filter(coord => coord.current.temperature_2m > 0)
    );
  }
}
