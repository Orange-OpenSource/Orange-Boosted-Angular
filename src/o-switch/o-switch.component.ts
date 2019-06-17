/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'o-switch',
  template: `
      <input class="checkbox sr-only" [class.success]="successColor" [id]="inputId" type="checkbox" [name]="inputId" [checked]="toggled" [(ngModel)]="check" (change)="checkValue(check?true:false)"/>
      <label [for]="inputId" class="toggle col-form-label" [class.toggle-rounded]="rounded" aria-hidden="true"
      [ngStyle]="{'width': customWidth}" >
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
  public check: boolean;

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

  @Output()
  public isChecked = new EventEmitter();
  public checkValue(event: any) {
    this.isChecked.emit(this.check);
 }
}
