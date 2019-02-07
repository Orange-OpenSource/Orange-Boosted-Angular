/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - index.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ONavbarComponent, ONavLink, ONavMenu } from './o-navbar/o-navbar.component';
import { OSwitchComponent } from './o-switch/o-switch.component';
import { OCarouselContainerComponent } from './o-carousel/o-carousel-container.component';
import { OCarouselComponent } from './o-carousel/o-carousel.component';
import { ODropdownComponent } from './o-dropdown/o-dropdown.component';
import { OCalendarComponent } from './o-calendar/o-calendar.component';
export { ScrollTopComponent } from './scroll-top/scroll-top.component';
export { ONavbarComponent, ONavLink } from './o-navbar/o-navbar.component';
export { OSwitchComponent } from './o-switch/o-switch.component';
export { OCarouselContainerComponent } from './o-carousel/o-carousel-container.component';
export { OCarouselComponent } from './o-carousel/o-carousel.component';
export { ODropdownComponent } from './o-dropdown/o-dropdown.component';
export { OCalendarComponent } from './o-calendar/o-calendar.component';
var NG_BOOSTED_DECLARATIONS = [
    ScrollTopComponent,
    ONavbarComponent,
    ONavLink,
    ONavMenu,
    OSwitchComponent,
    OCarouselContainerComponent,
    OCarouselComponent,
    ODropdownComponent,
    OCalendarComponent
];
var NgBoostedModule = /** @class */ (function () {
    function NgBoostedModule() {
    }
    NgBoostedModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule, NgbModule, FormsModule],
            declarations: NG_BOOSTED_DECLARATIONS,
            exports: NG_BOOSTED_DECLARATIONS
        })
    ], NgBoostedModule);
    return NgBoostedModule;
}());
export { NgBoostedModule };
//# sourceMappingURL=index.js.map