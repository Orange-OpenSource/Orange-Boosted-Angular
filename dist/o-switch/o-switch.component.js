/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding } from '@angular/core';
var OSwitchComponent = /** @class */ (function () {
    function OSwitchComponent() {
        this.toggled = false;
        this.rounded = false;
        this.successColor = false;
        this.customWidth = 'auto';
        this.onLabel = 'on';
        this.offLabel = 'off';
    }
    __decorate([
        HostBinding('class.o-switch'),
        Input(),
        __metadata("design:type", String)
    ], OSwitchComponent.prototype, "inputId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "toggled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "rounded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "successColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "customWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "onLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OSwitchComponent.prototype, "offLabel", void 0);
    OSwitchComponent = __decorate([
        Component({
            selector: 'o-switch',
            template: "\n      <input class=\"checkbox sr-only\" [class.success]=\"successColor\" [id]=\"inputId\" type=\"checkbox\" [name]=\"inputId\" [checked]=\"toggled\"/>\n      <label [for]=\"inputId\" class=\"toggle col-form-label\" [class.toggle-rounded]=\"rounded\" aria-hidden=\"true\"\n      [ngStyle]=\"{'width': customWidth}\">\n        <span class=\"on\" [class.svg-checkbox-tick]=\"onLabel === 'on'\" role=\"presentation\">\n          <span [class.sr-only]=\"onLabel === 'on'\">{{onLabel}}</span>\n        </span>\n        <span class=\"off\" [class.svg-delete]=\"offLabel === 'off'\" role=\"presentation\">\n          <span [class.sr-only]=\"offLabel === 'off'\">{{offLabel}}</span>\n        </span>\n      </label>\n  "
        })
    ], OSwitchComponent);
    return OSwitchComponent;
}());
export { OSwitchComponent };
//# sourceMappingURL=o-switch.component.js.map