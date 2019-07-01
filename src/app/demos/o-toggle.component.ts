import { Component } from '@angular/core';

@Component({
    selector: 'demo-o-toggle',
    styles: [`
        h4 {
            margin-top: 2.5rem;
        }
    `],
    template: require('./o-toggle.component.html')
})
export class DemoOToggle {
    // define which radio is toggled on init
    public model = 2;
    public model2 = 1;
}
