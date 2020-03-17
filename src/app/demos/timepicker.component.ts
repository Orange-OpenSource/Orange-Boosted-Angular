import { Component } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-timepicker',
    templateUrl: './timepicker.component.html'
})
export class DemoTimepicker {
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;
}
