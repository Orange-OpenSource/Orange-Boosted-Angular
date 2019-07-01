import { Component } from '@angular/core';

@Component({
    selector: 'demo-tooltip',
    styles: [`
    button {
        margin-right: 0.5rem;
    }
    `],
    template: require('./tooltip.component.html')
})
export class DemoTooltip {

}
