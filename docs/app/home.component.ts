import { Component } from '@angular/core';
import { Globals } from './global';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  providers: [Globals]
})
export class HomeComponent {
  constructor(public globals: Globals) {}
}
