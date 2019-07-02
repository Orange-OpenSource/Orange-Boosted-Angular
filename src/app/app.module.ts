import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Analytics } from './docs/shared/analytics';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from 'ng-boosted';

import { Globals } from './directives/global';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DocsMenuComponent } from './docs-menu/docs-menu.component';
import { BoostwatchComponent } from './boostwatch/boostwatch.component';
import { HomeComponent } from './home/home.component';

import { DemoAccordion } from './demos/accordion.component';
import { DemoModal } from './demos/modal.component';
import { DemoTabs } from './demos/tabs.component';
import { DemoPagination } from './demos/pagination.component';
import { DemoTooltip } from './demos/tooltip.component';
import { DemoPopover } from './demos/popover.component';
import { DemoAlert } from './demos/alert.component';
import { DemoCarousel } from './demos/carousel.component';
import { DemoOCalendar } from './demos/o-calendar.component';
import { DemoCollapse } from './demos/collapse.component';
import { DemoProgressBar } from './demos/progress-bar.component';
import { DemoDropdown } from './demos/dropdown.component';
import { DemoOSwitch } from './demos/o-switch.component';
import { DemoOToggle } from './demos/o-toggle.component';
import { DemoSwiper } from './demos/swiper.component';
import { DemoONavbar } from './demos/o-navbar.component';

import { DocAccordion } from './docs/accordion.component';
import { DocOCalendar } from './docs/o-calendar.component';
import { DocModal } from './docs/modal.component';
import { DocDropdown } from './docs/dropdown.component';
import { DocTabs } from './docs/tabs.component';
import { DocPagination } from './docs/pagination.component';
import { DocTooltip } from './docs/tooltip.component';
import { DocPopover } from './docs/popover.component';
import { DocAlert } from './docs/alert.component';
import { DocCarousel } from './docs/carousel.component';
import { DocSwiper } from './docs/swiper.component';
import { DocCollapse } from './docs/collapse.component';
import { DocProgressBar } from './docs/progress-bar.component';
import { DocONavbar } from './docs/o-navbar.component';
import { DocOScrollTop } from './docs/o-scroll-top.component';
import { DocOSwitch } from './docs/o-switch.component';
import { DocOToggle } from './docs/o-toggle.component';
import { CodeBox } from './docs/code-box.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DocsMenuComponent,
    BoostwatchComponent,
    DemoAccordion,
    DemoModal,
    DemoTabs,
    DemoPagination,
    DemoTooltip,
    DemoPopover,
    DemoAlert,
    DemoCarousel,
    DemoOCalendar,
    DemoSwiper,
    DemoCollapse,
    DemoProgressBar,
    DemoDropdown,
    DemoOSwitch,
    DemoOToggle,
    DemoONavbar,
    DocAccordion,
    DocOCalendar,
    DocModal,
    DocDropdown,
    DocTabs,
    DocPagination,
    DocAlert,
    DocTooltip,
    DocPopover,
    DocCarousel,
    DocSwiper,
    DocCollapse,
    DocProgressBar,
    DocONavbar,
    DocOScrollTop,
    DocOSwitch,
    DocOToggle,
    CodeBox,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgBoostedModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Analytics, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
