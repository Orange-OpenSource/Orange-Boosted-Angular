import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export declare class DateParserFormatter extends NgbDateParserFormatter {
    private separator;
    private ddIndex;
    private mmIndex;
    private yyIndex;
    private anSumar;
    private mask;
    Mask: string;
    constructor();
    parse(value: string): NgbDateStruct;
    format(date: NgbDateStruct): string;
}
