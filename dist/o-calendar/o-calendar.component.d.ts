import { EventEmitter, ElementRef } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class OCalendarComponent {
    private calendar;
    today: import("@ng-bootstrap/ng-bootstrap").NgbDate;
    model: NgbDateStruct;
    bdatepicker: ElementRef;
    color: string;
    labelButton: string;
    labelInput: string;
    labelFooterToday: string;
    labelFooterClose: string;
    placeHolder: string;
    childEvent: EventEmitter<{}>;
    constructor(calendar: NgbCalendar);
    onChange(value: any): void;
    focusCalendar(): void;
}
