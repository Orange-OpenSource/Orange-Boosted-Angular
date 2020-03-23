import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Analytics } from './docs/shared/analytics';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from './directives/global';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DocsMenuComponent } from './docs-menu/docs-menu.component';
import { BoostwatchComponent } from './boostwatch/boostwatch.component';
import { HomeComponent } from './home/home.component';
import { DemoAccordion } from './demos/accordion.component';
import { DemoButtons } from './demos/buttons.component';
import { DemoModal } from './demos/modal.component';
import { DemoTabs } from './demos/tabs.component';
import { DemoPagination } from './demos/pagination.component';
import { DemoTooltip } from './demos/tooltip.component';
import { DemoToast } from './demos/toast.component';
import { DemoOToast } from './demos/o-toast.component';
import { DemoPopover } from './demos/popover.component';
import { DemoAlert } from './demos/alert.component';
import { DemoCarousel } from './demos/carousel.component';
import { DemoOCalendar } from './demos/o-calendar.component';
import { DemoCollapse } from './demos/collapse.component';
import { DemoDatepicker } from './demos/datepicker.component';
import { DemoProgressBar } from './demos/progress-bar.component';
import { DemoDropdown } from './demos/dropdown.component';
import { DemoOSwitch } from './demos/o-switch.component';
import { DemoOToggle } from './demos/o-toggle.component';
import { DemoSwiper } from './demos/swiper.component';
import { DemoTable } from './demos/table.component';
import { DemoTimepicker } from './demos/timepicker.component';
import { DemoONavbar } from './demos/o-navbar.component';
import { DemoRating } from './demos/rating.component';
import { DemoTypeahead } from './demos/typeahead.component';
import { DocAccordion } from './docs/accordion.component';
import { DocButtons } from './docs/buttons.component';
import { DocOCalendar } from './docs/o-calendar.component';
import { DocModal } from './docs/modal.component';
import { DocDropdown } from './docs/dropdown.component';
import { DocTabs } from './docs/tabs.component';
import { DocPagination } from './docs/pagination.component';
import { DocTooltip } from './docs/tooltip.component';
import { DocToast } from './docs/toast.component';
import { DocOToast } from './docs/o-toast.component';
import { DocPopover } from './docs/popover.component';
import { DocAlert } from './docs/alert.component';
import { DocCarousel } from './docs/carousel.component';
import { DocSwiper } from './docs/swiper.component';
import { DocCollapse } from './docs/collapse.component';
import { DocDatepicker } from './docs/datepicker.component';
import { DocProgressBar } from './docs/progress-bar.component';
import { DocONavbar } from './docs/o-navbar.component';
import { DocOScrollTop } from './docs/o-scroll-top.component';
import { DocOSwitch } from './docs/o-switch.component';
import { DocOToggle } from './docs/o-toggle.component';
import { DocRating } from './docs/rating.component';
import { DocTable } from './docs/table.component';
import { DocTimepicker } from './docs/timepicker.component';
import { DocTypeahead } from './docs/typeahead.component';
import { ToastsContainer } from './demos/toasts-container.component';
import { CodeBox } from './docs/code-box.component';
import { OCalendarModule, OCarouselModule, ODropdownModule, ONavMenuModule, OSwitchModule, OToastModule } from '../../node_modules/ng-boosted';
import { ONavLinkModule, ONavbarModule, ScrollTopModule } from 'ng-boosted';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DocsMenuComponent,
    BoostwatchComponent,
    DemoAccordion,
    DemoButtons,
    DemoModal,
    DemoTabs,
    DemoPagination,
    DemoTooltip,
    DemoToast,
    ToastsContainer,
    DemoOToast,
    DemoPopover,
    DemoAlert,
    DemoCarousel,
    DemoOCalendar,
    DemoSwiper,
    DemoCollapse,
    DemoDatepicker,
    DemoProgressBar,
    DemoDropdown,
    DemoOSwitch,
    DemoOToggle,
    DemoONavbar,
    DemoRating,
    DemoTable,
    DemoTimepicker,
    DemoTypeahead,
    DocAccordion,
    DocButtons,
    DocOCalendar,
    DocModal,
    DocDropdown,
    DocTabs,
    DocPagination,
    DocAlert,
    DocTooltip,
    DocToast,
    DocOToast,
    DocPopover,
    DocCarousel,
    DocSwiper,
    DocCollapse,
    DocDatepicker,
    DocProgressBar,
    DocONavbar,
    DocOScrollTop,
    DocOSwitch,
    DocOToggle,
    DocRating,
    DocTable,
    DocTimepicker,
    DocTypeahead,
    CodeBox,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    OCalendarModule,
    OCarouselModule,
    ODropdownModule,
    ONavLinkModule,
    ONavMenuModule,
    ONavbarModule,
    ScrollTopModule,
    OSwitchModule,
    OToastModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, Analytics, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
