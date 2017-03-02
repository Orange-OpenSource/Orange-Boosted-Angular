import { Component } from '@angular/core';

@Component({
    selector: 'demo-o-switch',
    styles: [`
        label {
            font-weight: bold;
        }
    `],
    template: require('./o-switch.component.html')
})
export class DemoOSwitch { }