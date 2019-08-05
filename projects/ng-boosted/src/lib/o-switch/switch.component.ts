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
      this.isChecked.emit(this.toggled);
   }
}
