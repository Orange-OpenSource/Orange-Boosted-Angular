import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { ScrollTopComponent } from './o-scroll/scroll-top.component';
import { OCalendarComponent } from './o-calendar/o-calendar.component';
import { OToastComponent } from './o-toast/o-toast.component';
import { OCarouselContainerComponent } from './o-carousel/o-carousel-container/o-carousel-container.component';
import { OCarouselComponent } from './o-carousel/o-carousel.component';
import { ODropdownDirective } from './o-dropdown/o-dropdown.component';
import { ONavLinkComponent } from './o-nav-link/o-nav-link.component';
import { ONavMenuComponent } from './o-nav-menu/o-nav-menu.component';
import { ONavbarComponent } from './o-navbar/o-navbar.component';
import { OSwitchComponent } from './o-switch/switch.component';

const NG_BOOSTED_DECLARATIONS = [
  ScrollTopComponent,
  OCalendarComponent,
  OToastComponent,
  OCarouselContainerComponent,
  OCarouselComponent,
  ODropdownDirective,
  ONavLinkComponent,
  ONavMenuComponent,
  ONavbarComponent,
  OSwitchComponent
];

@NgModule({
  declarations: [NG_BOOSTED_DECLARATIONS],
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  exports: [NG_BOOSTED_DECLARATIONS]
})
export class NgBoostedModule { }
