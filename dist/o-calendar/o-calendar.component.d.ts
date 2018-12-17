import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class OCalendarComponent {
    private calendar;
    model: NgbDateStruct;
    today: import("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date").NgbDate;
    color: string;
    constructor(calendar: NgbCalendar);
}
