import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbDateParserFormatter, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateParserFormatter } from '../services/date-parser.service';
import { isNumber, toInteger } from '../services/checking.service';

@Component({
    selector: 'lib-o-calendar',
    styleUrls: ['./o-calendar.component.scss'],
    templateUrl: './o-calendar.component.html',
    providers: [{provide: NgbDateParserFormatter, useClass: DateParserFormatter}]
})
export class OCalendarComponent {
    public today = this.calendar.getToday();
    public model: NgbDateStruct;

    @ViewChild('bdatepicker', {static: true}) public bdatepicker: ElementRef;
    @Input()
    public color: string;
    @Input()
    public  labelButton: string;
    @Input()
    public labelInput: string;
    @Input()
    public labelFooterToday: string;
    @Input()
    public labelFooterClose: string;
    @Input()
    public placeHolder: string;
    @Output()
    public childEvent = new EventEmitter();
    constructor(private calendar: NgbCalendar) {}
    public onChange(value) {
        if (value) {
            const dateParts = value.trim().split('/');
            (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) ? 
            this.childEvent.emit({year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])}) : 
            this.childEvent.emit();
        }else{
            this.childEvent.emit();
        }
    }
    public focusCalendar() {
        this.bdatepicker.nativeElement.focus();
    }
 }
