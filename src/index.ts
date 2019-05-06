/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - index.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

const NG_BOOSTED_DECLARATIONS = [
    ScrollTopComponent,
    ONavbarComponent,
    ONavLink,
    ONavMenu,
    OSwitchComponent,
    OCarouselContainerComponent,
    OCarouselComponent,
    ODropdownComponent,
    OCalendarComponent];

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule, FormsModule],
    declarations: NG_BOOSTED_DECLARATIONS,
    exports: NG_BOOSTED_DECLARATIONS,
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class NgBoostedModule { }
