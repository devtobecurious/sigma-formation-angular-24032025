import { Component, input, output, signal } from '@angular/core';
import { Creature } from '../../models/creature';

@Component({
  selector: 'sig-row-creatures',
  imports: [],
  templateUrl: './row-creatures.component.html',
  styleUrl: './row-creatures.component.css'
})
export class RowCreaturesComponent {
  item = input.required<Creature>()
  toEdit = output<Creature>()

  clickToEdit(): void {
    console.info('RowCreaturesComponent.clickToEdit');
    this.toEdit.emit(this.item());
  }
}
