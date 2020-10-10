import { ChangeDetectorRef, Component } from '@angular/core';
import { Choices } from '../components/models/choices';

interface Choice {
  id: number;
  name: Choices;
  losesTo: number;
}

const choices: Array<Choice> = [
  { id: 1, name: 'rock', losesTo: 2 },
  { id: 2, name: 'paper', losesTo: 3 },
  { id: 3, name: 'scissors',losesTo: 1 }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  wins = 0;
  losses = 0;

  userChoice: Choice = null;
  computerChoice: Choice = this.getRandomChoice();

  state = null;

  constructor(private cdr: ChangeDetectorRef) {}

  playGame(choice: Choices): void {
    const chosenChoice = choices.find(c => c.name === choice);
    this.userChoice = chosenChoice;

    if (chosenChoice.losesTo === this.computerChoice.id ) {
      this.losses++;
      this.state = 'lose';
    } else if (this.computerChoice.losesTo === chosenChoice.id) {
      this.wins++;
      this.state = 'win';
    } else if (this.computerChoice.id === chosenChoice.id) {
      this.state = 'draw';
    }
  }

  restartGame(): void {
    this.state = null;
    this.computerChoice = this.getRandomChoice();
    this.cdr.detectChanges();
  }

  getRandomChoice(): Choice {
    return choices[Math.floor(Math.random() * choices.length)];
  }
}
