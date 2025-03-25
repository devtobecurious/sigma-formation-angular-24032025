import { Component, inject } from '@angular/core';
import { PersonList } from '../../models';
import { GetAllPersonsService } from '../../services/get-all-persons.service';

@Component({
  selector: 'sig-select-persons',
  imports: [],
  templateUrl: './select-persons.component.html',
  styleUrl: './select-persons.component.css',
  //providers: [GetAllPersonsService] // scoped
})
export class SelectPersonsComponent {
  private readonly service = inject(GetAllPersonsService)
  list = this.service.getAll();
}
