import { Component } from '@angular/core';

@Component({
    selector: 'demo-o-switch',
    templateUrl: './o-switch.component.html'
})
export class DemoOSwitchComponent {
    public checked: boolean;

    public getCheck(check) {
        this.checked = check;
    }
}
