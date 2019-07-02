import { Component, OnInit } from '@angular/core';
import { Globals } from '../directives/global';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [Globals]
})
export class StartComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
