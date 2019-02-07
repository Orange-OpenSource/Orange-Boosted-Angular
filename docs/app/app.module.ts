import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from '../../dist';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StartComponent } from './start.component';
import { DocsComponent } from './docs.component';
import { BoostwatchComponent } from './boostwatch.component';

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

import { Globals } from './global';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'start',
        component: StartComponent
      },
      {
        path: 'documentation',
        redirectTo: 'documentation/accordion',
        pathMatch: 'full'
      },
      {
        path: 'documentation/collapse',
        component: DocCollapse
      },
      {
        path: 'documentation/calendar',
        component: DocOCalendar
      },
      {
        path: 'documentation/accordion',
        component: DocAccordion
      },
      {
        path: 'documentation/modal',
        component: DocModal
      },
      {
        path: 'documentation/dropdown',
        component: DocDropdown
      },
      {
        path: 'documentation/tabs',
        component: DocTabs
      },
      {
        path: 'documentation/pagination',
        component: DocPagination
      },
      {
        path: 'documentation/tooltip',
        component: DocTooltip
      },
      {
        path: 'documentation/popover',
        component: DocPopover
      },
      {
        path: 'documentation/alert',
        component: DocAlert
      },
      {
        path: 'documentation/carousel',
        component: DocCarousel
      },
      {
        path: 'documentation/swiper',
        component: DocSwiper
      },
      {
        path: 'documentation/progress',
        component: DocProgressBar
      },
      {
        path: 'documentation/o-navbar',
        component: DocONavbar
      },
      {
        path: 'documentation/o-scroll-top',
        component: DocOScrollTop
      },
      {
        path: 'documentation/o-switch',
        component: DocOSwitch
      },
      {
        path: 'documentation/o-toggle',
        component: DocOToggle
      },
      {
        path: 'boostwatch',
        component: BoostwatchComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]),
    NgbModule.forRoot(),
    NgBoostedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    DocsComponent,
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
    CodeBox
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, Globals],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
