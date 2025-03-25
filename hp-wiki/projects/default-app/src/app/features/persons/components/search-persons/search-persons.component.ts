import { Component, inject } from '@angular/core';
import { SelectPersonsComponent } from "../select-persons/select-persons.component";
import { LoggerService } from '../../../../shared/tools/logger.service';

@Component({
  selector: 'sig-search-persons',
  imports: [SelectPersonsComponent],
  templateUrl: './search-persons.component.html',
  styleUrl: './search-persons.component.css'
})
export class SearchPersonsComponent {
  private readonly logger = inject(LoggerService)

  constructor() {
    this.logger.log('constructor, search', 'info')
  }
  
  ngOnInit(): void {
    this.logger.log('ngOnInit, search', 'info')

  }
}
