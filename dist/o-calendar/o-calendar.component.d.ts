import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
export declare class OCalendarComponent {
    private calendar;
    private sanitize;
    model: NgbDateStruct;
    today: import("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date").NgbDate;
    color: string;
    constructor(calendar: NgbCalendar, sanitize: DomSanitizer);
}
