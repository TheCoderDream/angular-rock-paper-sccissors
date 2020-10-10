import { Component, EventEmitter, Output } from '@angular/core';
import { Choices } from '../models/choices';

@Component({
  selector: 'choices',
  templateUrl: './choices.component.html'
})
export class ChoicesComponent {
  @Output() choosed = new EventEmitter<Choices>();

  sendAction(e): void {
    e.target.name && this.choosed.emit(e.target.name);
  }
}