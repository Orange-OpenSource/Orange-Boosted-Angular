import { Component, OnInit } from '@angular/core';
import { Globals } from '../directives/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [Globals]
})
export class HomeComponent implements OnInit {

  constructor(public globals: Globals) {}

  ngOnInit() {}
}