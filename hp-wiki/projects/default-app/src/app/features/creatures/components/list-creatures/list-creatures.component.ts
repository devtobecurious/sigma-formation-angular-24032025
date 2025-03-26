import { Component, signal } from '@angular/core';
import { TableCreaturesComponent } from "../table-creatures/table-creatures.component";
import { Creature, CreatureList } from '../../models/creature';

@Component({
  selector: 'sig-list-creatures',
  imports: [TableCreaturesComponent],
  templateUrl: './list-creatures.component.html',
  styleUrl: './list-creatures.component.css'
})
export class ListCreaturesComponent {
  list: CreatureList = [{ id: 1, name: 'Creature 1', description: 'Description 1' }, { name: 'Creature 2', description: 'Description 2' }];
  editItem = signal<Creature | undefined>(undefined)


  editOne(item: Creature): void {
    console.info('ListCreaturesComponent.editOne', item);
    this.editItem.set(item);
  }

  cancelEdit(): void {
    console.info('ListCreaturesComponent.cancelEdit');
    this.editItem.set(undefined);
  }

  add() {
    //this.list.push({ id: this.list.length + 1, name: `Creature ${this.list.length + 1}`, description: `Description ${this.list.length + 1}` });
    this.list = [...this.list, { id: this.list.length + 1, name: `Creature ${this.list.length + 1}`, description: `Description ${this.list.length + 1}` }];
  }
}
