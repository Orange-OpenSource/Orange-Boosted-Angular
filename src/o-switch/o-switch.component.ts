/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'o-switch',
  template: `
      <input class="checkbox sr-only" [class.success]="successColor" [id]="inputId" type="checkbox" [checked]="toggled"/>
      <label [for]="inputId" class="toggle col-form-label" [class.toggle-rounded]="rounded" aria-hidden="true"
      [ngStyle]="{'width': customWidth}">
        <span class="on" [class.svg-checkbox-tick]="onLabel === 'on'" role="presentation">
          <span [class.sr-only]="onLabel === 'on'">{{onLabel}}</span>
        </span>
        <span class="off" [class.svg-delete]="offLabel === 'off'" role="presentation">
          <span [class.sr-only]="offLabel === 'off'">{{offLabel}}</span>
        </span>
      </label>
  `
})
export class OSwitchComponent {
  @HostBinding('class.o-switch')

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
}
