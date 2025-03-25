import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPersonsComponent } from "./features/persons/components/list-persons/list-persons.component";
import { ListCreaturesComponent } from "./features/creatures/components/list-creatures/list-creatures.component";

@Component({
  selector: 'app-root',
  imports: [ ListPersonsComponent, ListCreaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'default-app';
}
