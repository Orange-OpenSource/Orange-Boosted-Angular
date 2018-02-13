/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, HostBinding } from '@angular/core';
var OSwitchComponent = (function () {
    function OSwitchComponent() {
        this.toggled = false;
        this.rounded = false;
        this.successColor = false;
        this.customWidth = 'auto';
        this.onLabel = 'on';
        this.offLabel = 'off';
    }
    OSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'o-switch',
                    template: "\n      <input class=\"checkbox sr-only\" [class.success]=\"successColor\" [id]=\"inputId\" type=\"checkbox\" [checked]=\"toggled\"/>\n      <label [for]=\"inputId\" class=\"toggle col-form-label\" [class.toggle-rounded]=\"rounded\" aria-hidden=\"true\"\n      [ngStyle]=\"{'width': customWidth}\">\n        <span class=\"on\" [class.svg-checkbox-tick]=\"onLabel === 'on'\" role=\"presentation\">\n          <span [class.sr-only]=\"onLabel === 'on'\">{{onLabel}}</span>\n        </span>\n        <span class=\"off\" [class.svg-delete]=\"offLabel === 'off'\" role=\"presentation\">\n          <span [class.sr-only]=\"offLabel === 'off'\">{{offLabel}}</span>\n        </span>\n      </label>\n  "
                },] },
    ];
    /** @nocollapse */
    OSwitchComponent.ctorParameters = function () { return []; };
    OSwitchComponent.propDecorators = {
        "inputId": [{ type: HostBinding, args: ['class.o-switch',] }, { type: Input },],
        "toggled": [{ type: Input },],
        "rounded": [{ type: Input },],
        "successColor": [{ type: Input },],
        "customWidth": [{ type: Input },],
        "onLabel": [{ type: Input },],
        "offLabel": [{ type: Input },],
    };
    return OSwitchComponent;
}());
export { OSwitchComponent };
//# sourceMappingURL=o-switch.component.js.map