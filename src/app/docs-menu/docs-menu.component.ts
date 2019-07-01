import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docs-wrapper',
  templateUrl: './docs-menu.component.html',
  styleUrls: ['./docs-menu.component.scss']
})
export class DocsMenuComponent implements OnInit {

  @Input()
  public component: string;

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
