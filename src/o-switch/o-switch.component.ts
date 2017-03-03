/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'o-switch',
  styles: [`
    .o-switch {
      display: inline-block;
    }
  `],
  template: `
    <div class="o-switch" (click)="toggleSwitch()">
      <input class="checkbox sr-only" [class.success]="successColor" [id]="inputId" type="checkbox" [checked]="toggled"/>
      <div class="toggle form-control-label" [class.rounded]="rounded" aria-hidden="true"
      [ngStyle]="{'width': customWidth}">
        <span class="on" [class.icon-checkbox-tick]="onLabel === 'on'" role="presentation">
          <span [class.sr-only]="onLabel === 'on'">{{onLabel}}</span>
        </span>
        <span class="off" [class.icon-delete]="offLabel === 'off'" role="presentation">
          <span [class.sr-only]="offLabel === 'off'">{{offLabel}}</span>
        </span>
      </div>
    </div>
  `
})
export class OSwitchComponent {
  @Input()
  public inputId: string;

  @Input()
  public toggled = false;

  @Input()
  public rounded = false;

  @Input()
  public successColor = false;

  @Input()
  public customWidth = 'auto';

  @Input()
  public onLabel = 'on';

  @Input()
  public offLabel = 'off';

  public toggleSwitch() {
    this.toggled = !this.toggled;
  }
}
