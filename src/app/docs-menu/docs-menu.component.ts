import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docs-wrapper',
  templateUrl: './docs-menu.component.html'
})
export class DocsMenuComponent {

  @Input() public component: string;

  public isCollapsed = true;

  constructor() {}
}
