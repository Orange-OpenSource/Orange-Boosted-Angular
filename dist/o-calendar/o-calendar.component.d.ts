import { EventEmitter } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class OCalendarComponent {
    private calendar;
    today: import("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date").NgbDate;
    model: NgbDateStruct;
    color: string;
    labelButton: string;
    labelInput: string;
    labelFooterToday: string;
    labelFooterClose: string;
    placeHolder: string;
    childEvent: EventEmitter<{}>;
    constructor(calendar: NgbCalendar);
    onChange(value: any): any;
}
