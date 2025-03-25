import { Component } from '@angular/core';
import { SelectPersonsComponent } from "../select-persons/select-persons.component";

@Component({
  selector: 'sig-search-persons',
  imports: [SelectPersonsComponent],
  templateUrl: './search-persons.component.html',
  styleUrl: './search-persons.component.css'
})
export class SearchPersonsComponent {
  
}
