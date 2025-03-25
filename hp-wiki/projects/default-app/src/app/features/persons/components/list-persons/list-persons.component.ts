import { Component } from '@angular/core';
import { Person, PersonList } from '../../models';
import { SearchPersonsComponent } from "../search-persons/search-persons.component";

@Component({
  selector: 'app-list-persons',
  imports: [SearchPersonsComponent],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent {
  //list = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
  list: PersonList = []
  //   { id: 1, name: 'Harry Potter', age: 30 },
  //   { id: 2, name: 'Hermione Granger', age: 30 },
  //   { id: 3, name: 'Ron Weasley', age: 30 }    
  // ];
}
