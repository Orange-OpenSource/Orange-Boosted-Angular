/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - index.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var scroll_top_component_1 = require("./scroll-top/scroll-top.component");
var o_navbar_component_1 = require("./o-navbar/o-navbar.component");
var scroll_top_component_2 = require("./scroll-top/scroll-top.component");
exports.ScrollTopComponent = scroll_top_component_2.ScrollTopComponent;
var o_navbar_component_2 = require("./o-navbar/o-navbar.component");
exports.ONavbarComponent = o_navbar_component_2.ONavbarComponent;
exports.ONavLink = o_navbar_component_2.ONavLink;
var NG_BOOSTED_DECLARATIONS = [scroll_top_component_1.ScrollTopComponent, o_navbar_component_1.ONavbarComponent, o_navbar_component_1.ONavLink];
var NgBoostedModule = (function () {
    function NgBoostedModule() {
    }
    return NgBoostedModule;
}());
NgBoostedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, ng_bootstrap_1.NgbModule],
        declarations: NG_BOOSTED_DECLARATIONS,
        exports: NG_BOOSTED_DECLARATIONS
    })
], NgBoostedModule);
exports.NgBoostedModule = NgBoostedModule;
//# sourceMappingURL=index.js.map