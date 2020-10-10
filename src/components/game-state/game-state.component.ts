import { Component, EventEmitter,  Input, Output } from '@angular/core';
import { Choices } from '../models/choices';
import { State } from '../models/state';



@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html'
})
export class GameStateComponent {
  @Input() state: State;
  @Input() userChoice: Choices;
  @Input() computerChoice: Choices;
  @Output() clicked = new EventEmitter<void>();

  stateMessages: {[key in State]: string} = {
    win: 'Congrats! You won!',
    lose: 'Sorry! You lost!',
    draw: 'You draw!'
  }
}