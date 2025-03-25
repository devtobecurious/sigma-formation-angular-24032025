import { Injectable } from '@angular/core';
import { PersonList } from '../models';

@Injectable()// scoped ou transient
export class GetAllPersonsService {
  getAll(): PersonList {
    return [
      
    ];
  }
}
