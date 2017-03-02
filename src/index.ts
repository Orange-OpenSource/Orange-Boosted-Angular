/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - index.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ONavbarComponent, ONavLink } from './o-navbar/o-navbar.component';
import { OSwitchComponent } from './o-switch/o-switch.component';

export { ScrollTopComponent } from './scroll-top/scroll-top.component';
export { ONavbarComponent, ONavLink } from './o-navbar/o-navbar.component';
export { OSwitchComponent } from './o-switch/o-switch.component';

const NG_BOOSTED_DECLARATIONS = [ScrollTopComponent, ONavbarComponent, ONavLink, OSwitchComponent];

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    declarations: NG_BOOSTED_DECLARATIONS,
    exports: NG_BOOSTED_DECLARATIONS})
export class NgBoostedModule { }
