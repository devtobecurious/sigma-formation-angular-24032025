import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPersonsComponent } from "./features/persons/components/list-persons/list-persons.component";
import { ListCreaturesComponent } from "./features/creatures/components/list-creatures/list-creatures.component";
import { GetAllPersonsService } from './features/persons/services/get-all-persons.service';

@Component({
  selector: 'app-root',
  imports: [ ListPersonsComponent, ListCreaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // providers: [GetAllPersonsService]
})
export class AppComponent {
  title = 'default-app';
}
