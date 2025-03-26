import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Creature, CreatureList } from '../../models/creature';
import { RowCreaturesComponent } from '../row-creatures/row-creatures.component';

@Component({
  selector: 'sig-table-creatures',
  imports: [RowCreaturesComponent],
  templateUrl: './table-creatures.component.html',
  styleUrl: './table-creatures.component.css'
})
export class TableCreaturesComponent implements OnChanges, OnInit {
  
  items = input.required<CreatureList>()// [ { id: 1, name: 'Creature 1', description: 'Description 1' }, { name: 'Creature 2', description: 'Description 2' } ];
  index = input(0)

  toEdit = output<Creature>()

  clickToEdit(item: Creature): void {
    console.info('TableCreaturesComponent.clickToEdit', item);
    this.toEdit.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('TableCreaturesComponent.ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.info('TableCreaturesComponent.ngOnInit');
  }
}
