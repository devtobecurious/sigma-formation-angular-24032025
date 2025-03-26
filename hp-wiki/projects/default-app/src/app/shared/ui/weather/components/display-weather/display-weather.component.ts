import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { AsyncPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'sig-display-weather',
  imports: [AsyncPipe, UpperCasePipe],
  templateUrl: './display-weather.component.html',
  styleUrl: './display-weather.component.css'
})
export class DisplayWeatherComponent {
  title = signal('Temperature')
  private readonly service = inject(WeatherService)
  weather$ = this.service.getOne()
}
