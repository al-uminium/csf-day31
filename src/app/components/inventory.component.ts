import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})

export class InventoryComponent {
  @Input() url = '';
  @Input() id = '';
  @Output() onClickEvent = new EventEmitter<string>();

  printId(e: any) {
    const id = e.target.id;
    this.onClickEvent.emit(id);
  }
}
