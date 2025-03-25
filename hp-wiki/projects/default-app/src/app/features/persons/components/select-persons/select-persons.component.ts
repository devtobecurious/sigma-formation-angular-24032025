import { Component } from '@angular/core';
import { PersonList } from '../../models';

@Component({
  selector: 'sig-select-persons',
  imports: [],
  templateUrl: './select-persons.component.html',
  styleUrl: './select-persons.component.css'
})
export class SelectPersonsComponent {
  list: PersonList = []
}
