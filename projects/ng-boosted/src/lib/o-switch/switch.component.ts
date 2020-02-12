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
    selector: 'lib-o-switch',
    templateUrl: './switch.component.html'
  })
  export class OSwitchComponent {
    @HostBinding('class') public SwitchClass = 'custom-control custom-switch';

    @Input() public inputId: string;

    @Input() public toggled = false;

    @Input() public customWidth = 'auto';

    @Input() public label: string;

    @Output() public isChecked = new EventEmitter();

    public checkValue(event: any) {
      this.isChecked.emit(this.toggled);
   }
}
