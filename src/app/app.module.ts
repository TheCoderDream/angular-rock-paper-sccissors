import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChoicesComponent } from '../components/choices/choices.component';
import { GameStateComponent } from '../components/game-state/game-state.component';
import { InfoComponent } from '../components/info/info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChoicesComponent, GameStateComponent, InfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
