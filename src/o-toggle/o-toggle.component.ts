/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-toggle.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Directive,
  Input,
  QueryList,
  ContentChildren
} from '@angular/core';

@Directive({selector: 'o-toggle-item'})
export class OToggleItem {
  @Input()
  public label: string;

  @Input()
  public active = false;
}

@Component({
  selector: 'o-toggle',
  styles: [`
  `],
  template: `
    <div class="o-switch btn-group" data-toggle="buttons" role="group">
      <label class="btn btn-secondary" *ngFor="let item of items" [class.active]="item.active" (click)="handleToggle()">
        <input type="radio" name="options" id="option1" autocomplete="off" checked>{{item.label}}
      </label>
    </div>
  `
})
export class OToggleComponent {
  @ContentChildren(OToggleItem)
  private items: QueryList<OToggleItem>;

  public handleToggle() {
    console.log('toggle');
  }
}
