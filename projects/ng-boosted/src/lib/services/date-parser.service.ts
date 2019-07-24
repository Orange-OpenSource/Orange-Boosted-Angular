import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}
@Injectable()
export class DateParserFormatter extends NgbDateParserFormatter {
    private separator: string;
    private ddIndex: number;
    private mmIndex: number;
    private yyIndex: number;
    private anSumar = 0;
    private mask = 'dd/MM/yyyy';

    set Mask(value: string) {
        this.mask = value;
    }

    constructor() {
        super();
        this.separator = this.mask.indexOf('-') >= 0 ? '-' : this.mask.indexOf('.') >= 0 ? '.' : '/';
        const part = this.mask.split(this.separator);
        this.ddIndex = part.indexOf('dd');
        this.mmIndex = part.indexOf('MM');
        this.yyIndex = part.indexOf('yyyy');
        if (this.yyIndex < 0) {
          this.yyIndex = part.indexOf('yy');
          this.anSumar = 2000;
        }
    }
    public parse(value: string): NgbDateStruct {
        if (value) {
          value = value.replace(/\.|\/|-/g, this.separator);
          const dateParts = value.trim().split(this.separator);
          if (dateParts.length !== 3) {
              return { year: 0, month: 0, day: 0 };
          }
          let an = 0;
          let mois = 0;
          let jour = 0;
          const today = new Date();
          if (isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
              jour = this.ddIndex === 0 ? toInteger(dateParts[0]) : this.ddIndex === 1 ? toInteger(dateParts[1]) :
              this.ddIndex === 2 ? toInteger(dateParts[2]) : 0;
              mois = this.mmIndex === 0 ? toInteger(dateParts[0]) : this.mmIndex === 1 ? toInteger(dateParts[1]) :
              this.mmIndex === 2 ? toInteger(dateParts[2]) : 0;
              an = this.yyIndex === 0 ? (dateParts[0].length < 2) ? 0 : toInteger(dateParts[0]) + this.anSumar :
              this.yyIndex === 1 ? (dateParts[1].length < 2) ? 0 : toInteger(dateParts[1]) + this.anSumar :
              this.yyIndex === 2 ? (dateParts[2].length < 2) ? 0 : toInteger(dateParts[2]) + this.anSumar : 0;
          }
          if (jour === 0 || mois === 0 || an === 0) {
              return { year: 0, month: 0, day: 0};
            }
          if (an < 100) {
              an = 2000 + an;
            }
          return { year: an, month: mois, day: jour };
        }
        return { year: 0, month: 0, day: 0 };
      }

    public format(date: NgbDateStruct): string {
        let stringDate = '';
        if (date) {
          const stringDay = isNumber(date.day) ? padNumber(date.day) : '';
          const stringMonth = isNumber(date.month) ? padNumber(date.month) : '';
          const stringYear = isNumber(date.year) ? (date.year - this.anSumar).toString() : '';
          stringDate = (stringDay) ? this.mask.replace('dd', stringDay) :
          this.ddIndex === 0 ? this.mask.replace('dd' + this.separator, '') : this.mask.replace(this.separator + 'dd', '');
          stringDate = (stringMonth) ? stringDate.replace('MM', stringMonth) : this.mmIndex === 0 ?
          stringDate.replace('MM' + this.separator, '') :
          stringDate.replace(this.separator + 'MM', '');
          if (this.anSumar) {
              stringDate = (stringDay) ? stringDate.replace('yy', stringYear) :
              this.yyIndex === 0 ? stringDate.replace('yy' + this.separator, '') : stringDate.replace(this.separator + 'yy', '');
          } else {
              stringDate = (stringDay) ? stringDate.replace('yyyy', stringYear) :
              this.yyIndex === 0 ? stringDate.replace('yyyy' + this.separator, '') : stringDate.replace(this.separator + 'yyyy', '');
          }
        }
        return stringDate;
    }
}
