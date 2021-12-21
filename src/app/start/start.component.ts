import { Component, OnInit } from '@angular/core';
import { Globals } from '../directives/global';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  providers: [Globals]
})
export class StartComponent {

  constructor(public globals: Globals) {}
}
