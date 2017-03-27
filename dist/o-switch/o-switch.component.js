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
import { Component, Input } from '@angular/core';
var OSwitchComponent = (function () {
    function OSwitchComponent() {
        this.toggled = false;
        this.rounded = false;
        this.successColor = false;
        this.customWidth = 'auto';
        this.onLabel = 'on';
        this.offLabel = 'off';
    }
    OSwitchComponent.prototype.toggleSwitch = function () {
        this.toggled = !this.toggled;
    };
    return OSwitchComponent;
}());
__decorate([
    Input()
], OSwitchComponent.prototype, "inputId", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "toggled", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "rounded", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "successColor", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "customWidth", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "onLabel", void 0);
__decorate([
    Input()
], OSwitchComponent.prototype, "offLabel", void 0);
OSwitchComponent = __decorate([
    Component({
        selector: 'o-switch',
        styles: ["\n    .o-switch {\n      display: inline-block;\n    }\n  "],
        template: "\n    <div class=\"o-switch\" (click)=\"toggleSwitch()\">\n      <input class=\"checkbox sr-only\" [class.success]=\"successColor\" [id]=\"inputId\" type=\"checkbox\" [checked]=\"toggled\"/>\n      <div class=\"toggle form-control-label\" [class.rounded]=\"rounded\" aria-hidden=\"true\"\n      [ngStyle]=\"{'width': customWidth}\">\n        <span class=\"on\" [class.icon-checkbox-tick]=\"onLabel === 'on'\" role=\"presentation\">\n          <span [class.sr-only]=\"onLabel === 'on'\">{{onLabel}}</span>\n        </span>\n        <span class=\"off\" [class.icon-delete]=\"offLabel === 'off'\" role=\"presentation\">\n          <span [class.sr-only]=\"offLabel === 'off'\">{{offLabel}}</span>\n        </span>\n      </div>\n    </div>\n  "
    })
], OSwitchComponent);
export { OSwitchComponent };
//# sourceMappingURL=o-switch.component.js.map