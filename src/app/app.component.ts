import { Component } from '@angular/core';
import { Globals } from './directives/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Globals]
})
export class AppComponent {
  title = 'Orange-Boosted-Angular';
  constructor(public globals: Globals) {}
}
