/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
        this.showMe = false;
    }
    ScrollTopComponent.prototype.onWindowScroll = function () {
        if (document.documentElement.scrollTop > window.innerHeight) {
            this.showMe = true;
        }
        else {
            this.showMe = false;
        }
    };
    return ScrollTopComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ScrollTopComponent.prototype, "label", void 0);
__decorate([
    core_1.HostListener('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollTopComponent.prototype, "onWindowScroll", null);
ScrollTopComponent = __decorate([
    core_1.Component({
        selector: 'scroll-top',
        styles: ['a { display: inline;}'],
        template: "\n    <a href=\"javascript:void(0)\" class=\"o-scroll-up\" title=\"{{label}}\"\n    onclick=\"window.scrollTo(0, 0);\" *ngIf=\"showMe\">\n      <span class=\"o-scroll-up-text hidden-sm-down\">{{label}}</span>\n      <span class=\"o-scroll-up-icon\" aria-hidden=\"true\"></span>\n    </a>\n  "
    })
], ScrollTopComponent);
exports.ScrollTopComponent = ScrollTopComponent;
//# sourceMappingURL=scroll-top.component.js.map