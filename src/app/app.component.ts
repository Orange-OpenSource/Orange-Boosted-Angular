import { Component } from '@angular/core';
import { Globals } from './directives/global';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Globals]
})
export class AppComponent {
  title = 'Orange-Boosted-Angular';
  public isCollapsed = true;
  constructor(public globals: Globals, private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}
}
