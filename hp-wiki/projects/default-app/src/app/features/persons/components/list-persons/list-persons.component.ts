import { Component, input, output } from '@angular/core';
import { Person, PersonList } from '../../models';
import { SearchPersonsComponent } from "../search-persons/search-persons.component";

export type ColorType = 1 | 7 | 10

@Component({
  selector: 'app-list-persons',
  imports: [SearchPersonsComponent],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent {
  title = input.required<string>()
  list: PersonList = []


  changeColor = output<ColorType>()

  setColor(): void {
    this.changeColor.emit(7)
   // this.color.emit(10)
  }
}
