import { Component } from '@angular/core';

@Component({
    selector: 'demo-o-toggle',
    templateUrl: './o-toggle.component.html'
})
export class DemoOToggle {
    // define which radio is toggled on init
    public model = 2;
}
