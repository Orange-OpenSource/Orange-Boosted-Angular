import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    'fr': {
      weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
      months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
  };

  // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
  // use the Angular LOCALE_ID value
@Injectable()
    export class I18n {
        public language = 'fr';
    }

  // Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

constructor(private _i18n: I18n) {
    super();
}

public getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
}
public getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
}
public getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
}

public getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
    }
}

@Component({
    selector: 'demo-o-calendar',
    styles: [],
    templateUrl: './o-calendar.component.html',
    providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class DemoOCalendar {
    public model: NgbDateStruct;

}
