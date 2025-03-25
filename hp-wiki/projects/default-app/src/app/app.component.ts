import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPersonsComponent } from "./features/persons/components/list-persons/list-persons.component";
import { ListCreaturesComponent } from "./features/creatures/components/list-creatures/list-creatures.component";
import { GetAllPersonsService } from './features/persons/services/get-all-persons.service';
import { LoggerService } from './shared/tools/logger.service';

@Component({
  selector: 'app-root',
  imports: [ ListPersonsComponent, ListCreaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [GetAllPersonsService]
})
export class AppComponent implements OnInit {
  title = 'default-app';
  private readonly logger = inject(LoggerService)
  
  
  ngOnInit(): void {
    this.logger.log('App', 'info')
  }
}
