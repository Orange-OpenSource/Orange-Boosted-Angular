import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'demo-scrollspy',
  templateUrl: './scrollspy.component.html'
})

export class DemoScrollspyComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}
}
