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
import { CodeBoxComponent } from './docs/code-box.component';
import { DemoAccordionComponent } from './demos/accordion.component';
import { DemoBadgeComponent } from './demos/badge.component';
import { DemoBreadcrumbComponent } from './demos/breadcrumb.component';
import { DemoButtonsComponent } from './demos/buttons.component';
import { DemoModalComponent } from './demos/modal.component';
import { DemoTabsComponent } from './demos/tabs.component';
import { DemoPaginationComponent } from './demos/pagination.component';
import { DemoTooltipComponent } from './demos/tooltip.component';
import { DemoToastComponent } from './demos/toast.component';
import { DemoOToastComponent } from './demos/o-toast.component';
import { DemoPopoverComponent } from './demos/popover.component';
import { DemoAlertComponent } from './demos/alert.component';
import { DemoCarouselComponent } from './demos/carousel.component';
import { DemoOCalendarComponent } from './demos/o-calendar.component';
import { DemoCollapseComponent } from './demos/collapse.component';
import { DemoDatepickerComponent } from './demos/datepicker.component';
import { DemoProgressBarComponent } from './demos/progress-bar.component';
import { DemoDropdownComponent } from './demos/dropdown.component';
import { DemoOSwitchComponent } from './demos/o-switch.component';
import { DemoOToggleComponent } from './demos/o-toggle.component';
import { DemoSwiperComponent } from './demos/swiper.component';
import { DemoTableComponent } from './demos/table.component';
import { DemoTimepickerComponent } from './demos/timepicker.component';
import { DemoONavbarComponent } from './demos/o-navbar.component';
import { DemoNavbarComponent } from './demos/navbar.component';
import { DemoRatingComponent } from './demos/rating.component';
import { DemoTypeaheadComponent } from './demos/typeahead.component';
import { DocAccordionComponent } from './docs/accordion.component';
import { DocBadgeComponent } from './docs/badge.component';
import { DocBreadcrumbComponent } from './docs/breadcrumb.component';
import { DocButtonsComponent } from './docs/buttons.component';
import { DocOCalendarComponent } from './docs/o-calendar.component';
import { DocModalComponent } from './docs/modal.component';
import { DocDropdownComponent } from './docs/dropdown.component';
import { DocTabsComponent } from './docs/tabs.component';
import { DocPaginationComponent } from './docs/pagination.component';
import { DocTooltipComponent } from './docs/tooltip.component';
import { DocToastComponent } from './docs/toast.component';
import { DocOToastComponent } from './docs/o-toast.component';
import { DocPopoverComponent } from './docs/popover.component';
import { DocAlertComponent } from './docs/alert.component';
import { DocCarouselComponent } from './docs/carousel.component';
import { DocSwiperComponent } from './docs/swiper.component';
import { DocCollapseComponent } from './docs/collapse.component';
import { DocDatepickerComponent } from './docs/datepicker.component';
import { DocProgressBarComponent } from './docs/progress-bar.component';
import { DocNavbarComponent } from './docs/navbar.component';
import { DocONavbarComponent } from './docs/o-navbar.component';
import { DocScrollUpComponent } from './docs/scroll-up.component';
import { DocOScrollTopComponent } from './docs/o-scroll-top.component';
import { DocOSwitchComponent } from './docs/o-switch.component';
import { DocOToggleComponent } from './docs/o-toggle.component';
import { DocRatingComponent } from './docs/rating.component';
import { DocTableComponent } from './docs/table.component';
import { DocTimepickerComponent } from './docs/timepicker.component';
import { DocTypeaheadComponent } from './docs/typeahead.component';
import { ToastsContainerComponent } from './demos/toasts-container.component';
import { ScrollTopModule } from 'ng-boosted';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CodeBoxComponent,
    HomeComponent,
    BoostwatchComponent,
    DocsMenuComponent,
    DemoAccordionComponent,
    DemoBadgeComponent,
    DemoBreadcrumbComponent,
    DemoButtonsComponent,
    DemoCollapseComponent,
    DemoDatepickerComponent,
    DemoDropdownComponent,
    DemoModalComponent,
    DemoNavbarComponent,
    DemoCarouselComponent,
    DemoOCalendarComponent,
    DemoONavbarComponent,
    DemoOSwitchComponent,
    DemoOToastComponent,
    DemoOToggleComponent,
    DemoPaginationComponent,
    DemoPopoverComponent,
    DemoProgressBarComponent,
    DemoRatingComponent,
    DemoSwiperComponent,
    DemoTableComponent,
    DemoTabsComponent,
    DemoTimepickerComponent,
    DemoToastComponent,
    DemoTooltipComponent,
    ToastsContainerComponent,
    DemoAlertComponent,
    DemoTypeaheadComponent,
    DocAccordionComponent,
    DocBadgeComponent,
    DocBreadcrumbComponent,
    DocAlertComponent,
    DocButtonsComponent,
    DocCarouselComponent,
    DocCollapseComponent,
    DocDatepickerComponent,
    DocOCalendarComponent,
    DocModalComponent,
    DocDropdownComponent,
    DocTabsComponent,
    DocPaginationComponent,
    DocTooltipComponent,
    DocToastComponent,
    DocOToastComponent,
    DocPopoverComponent,
    DocSwiperComponent,
    DocProgressBarComponent,
    DocNavbarComponent,
    DocONavbarComponent,
    DocOScrollTopComponent,
    DocScrollUpComponent,
    DocOSwitchComponent,
    DocOToggleComponent,
    DocRatingComponent,
    DocTableComponent,
    DocTimepickerComponent,
    DocTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ScrollTopModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, Analytics, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
