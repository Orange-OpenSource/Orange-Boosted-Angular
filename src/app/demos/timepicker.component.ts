import { Component } from '@angular/core';

@Component({
    selector: 'demo-timepicker',
    templateUrl: './timepicker.component.html'
})
export class DemoTimepicker {
    time = {hour: 13, minute: 30};
}
