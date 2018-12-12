import { Component } from '@angular/core';
import { Globals } from './global';

@Component({
  selector: 'getting-started',
  template: require('./start.component.html'),
  providers: [Globals]
})
export class StartComponent {
  constructor(public globals: Globals) {}
}
