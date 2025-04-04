import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ColorType, ListPersonsComponent } from "./features/persons/components/list-persons/list-persons.component";
import { ListCreaturesComponent } from "./features/creatures/components/list-creatures/list-creatures.component";
import { GetAllPersonsService } from './features/persons/services/get-all-persons.service';
import { LoggerService } from './shared/tools/logger.service';
import { DisplayWeatherComponent } from "./shared/ui/weather/components/display-weather/display-weather.component";
import { DiscoverObsComponent } from './learning/discover-obs/discover-obs.component';
import { AddPersonComponent } from "./features/persons/components/add-person/add-person.component";
import { DiscoverResourcesComponent } from "./learnings/discover-resources/discover-resources.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DiscoverResourcesComponent, ListPersonsComponent, ListCreaturesComponent, DisplayWeatherComponent, DiscoverObsComponent, DisplayWeatherComponent, AddPersonComponent, DiscoverResourcesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [GetAllPersonsService]
})
export class AppComponent implements OnInit {
  //titleParent= 'default-app';
  titleParent = signal<string>('default-app')
  titleParentMaj = computed(() => this.titleParent().toUpperCase())
  private readonly logger = inject(LoggerService)
  
  
  ngOnInit(): void {
    this.logger.log('App', 'info')

    setTimeout(() => {
      this.titleParent.set('default-app 2')
    }, 1500);
  }

  setDarkModeColor(color: ColorType): void {
    console.info(color)
  }
}
