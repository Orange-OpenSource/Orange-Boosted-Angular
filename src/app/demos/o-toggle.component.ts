import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'demo-o-toggle',
    styles: [`
        h4 {
            margin-top: 2.5rem;
        }
    `],
    templateUrl: './o-toggle.component.html'
})
export class DemoOToggle {
    // define which radio is toggled on init
    model = 2;
    model2 = 1;
}