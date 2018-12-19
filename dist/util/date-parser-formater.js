var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var DateParserFormatter = /** @class */ (function (_super) {
    __extends(DateParserFormatter, _super);
    function DateParserFormatter() {
        var _this = _super.call(this) || this;
        _this.anSumar = 0;
        _this.mask = 'dd/MM/yyyy';
        _this.separator = _this.mask.indexOf('-') >= 0 ? '-' : _this.mask.indexOf('.') >= 0 ? '.' : '/';
        var part = _this.mask.split(_this.separator);
        _this.ddIndex = part.indexOf('dd');
        _this.mmIndex = part.indexOf('MM');
        _this.yyIndex = part.indexOf('yyyy');
        if (_this.yyIndex < 0) {
            _this.yyIndex = part.indexOf('yy');
            _this.anSumar = 2000;
        }
        return _this;
    }
    Object.defineProperty(DateParserFormatter.prototype, "Mask", {
        set: function (value) {
            this.mask = value;
        },
        enumerable: true,
        configurable: true
    });
    DateParserFormatter.prototype.parse = function (value) {
        if (value) {
            value = value.replace(/\.|\/|-/g, this.separator);
            var dateParts = value.trim().split(this.separator);
            if (dateParts.length !== 3) {
                return { year: 0, month: 0, day: 0 };
            }
            var an = 0;
            var mois = 0;
            var jour = 0;
            var today = new Date();
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
                return { year: 0, month: 0, day: 0 };
            }
            if (an < 100) {
                an = 2000 + an;
            }
            return { year: an, month: mois, day: jour };
        }
        return { year: 0, month: 0, day: 0 };
    };
    DateParserFormatter.prototype.format = function (date) {
        var stringDate = '';
        if (date) {
            var stringDay = isNumber(date.day) ? padNumber(date.day) : '';
            var stringMonth = isNumber(date.month) ? padNumber(date.month) : '';
            var stringYear = isNumber(date.year) ? (date.year - this.anSumar).toString() : '';
            stringDate = (stringDay) ? this.mask.replace('dd', stringDay) :
                this.ddIndex === 0 ? this.mask.replace('dd' + this.separator, '') : this.mask.replace(this.separator + 'dd', '');
            stringDate = (stringMonth) ? stringDate.replace('MM', stringMonth) : this.mmIndex === 0 ? stringDate.replace('MM' + this.separator, '') :
                stringDate.replace(this.separator + 'MM', '');
            if (this.anSumar) {
                stringDate = (stringDay) ? stringDate.replace('yy', stringYear) :
                    this.yyIndex === 0 ? stringDate.replace('yy' + this.separator, '') : stringDate.replace(this.separator + 'yy', '');
            }
            else {
                stringDate = (stringDay) ? stringDate.replace('yyyy', stringYear) :
                    this.yyIndex === 0 ? stringDate.replace('yyyy' + this.separator, '') : stringDate.replace(this.separator + 'yyyy', '');
            }
        }
        return stringDate;
    };
    DateParserFormatter = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], DateParserFormatter);
    return DateParserFormatter;
}(NgbDateParserFormatter));
export { DateParserFormatter };
//# sourceMappingURL=date-parser-formater.js.map