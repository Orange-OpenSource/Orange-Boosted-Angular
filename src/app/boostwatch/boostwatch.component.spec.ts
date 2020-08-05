import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { BoostwatchComponent } from './boostwatch.component';
import { AppRoutingModule } from '../app-routing.module';
import { StartComponent } from '../start/start.component';
import { CodeBoxComponent } from '../docs/code-box.component';
import { DemoAccordionComponent } from '../demos/accordion.component';
import { DemoBadgeComponent } from '../demos/badge.component';
import { DemoCardComponent } from '../demos/card.component';
import { DemoFormComponent } from '../demos/form.component';
import { DemoJumbotronComponent } from '../demos/jumbotron.component';
import { DemoMediaComponent } from '../demos/media.component';
import { DemoOrangePopinComponent } from '../demos/orange-popin.component';
import { DemoListGroupComponent } from '../demos/list-group.component';
import { DemoLocalNavigationComponent } from '../demos/local-navigation.Component';
import { DemoBreadcrumbComponent } from '../demos/breadcrumb.component';
import { DemoModalComponent } from '../demos/modal.component';
import { DemoTabsComponent } from '../demos/tabs.component';
import { DemoPaginationComponent } from '../demos/pagination.component';
import { DemoTooltipComponent } from '../demos/tooltip.component';
import { DemoPopoverComponent } from '../demos/popover.component';
import { DemoSpinnerComponent } from '../demos/spinner.component';
import { DemoStepbarComponent } from '../demos/stepbar.component';
import { DemoAlertComponent } from '../demos/alert.component';
import { DemoCarouselComponent } from '../demos/carousel.component';
import { DemoOCalendarComponent } from '../demos/o-calendar.component';
import { DemoCollapseComponent } from '../demos/collapse.component';
import { DemoDatepickerComponent } from '../demos/datepicker.component';
import { DemoProgressBarComponent } from '../demos/progress-bar.component';
import { DemoDropdownComponent } from '../demos/dropdown.component';
import { DemoOSwitchComponent } from '../demos/o-switch.component';
import { DemoOToggleComponent } from '../demos/o-toggle.component';
import { DemoRatingComponent } from '../demos/rating.component';
import { DemoScrollspyComponent } from '../demos/scrollspy.component';
import { DemoSwiperComponent } from '../demos/swiper.component';
import { DemoButtonsComponent } from '../demos/buttons.component';
import { DemoNavbarComponent } from '../demos/navbar.component';
import { DemoONavbarComponent } from '../demos/o-navbar.component';
import { DemoTableComponent } from '../demos/table.component';
import { DemoTimepickerComponent } from '../demos/timepicker.component';
import { DemoTypeaheadComponent } from '../demos/typeahead.component';
import { DemoToastComponent } from '../demos/toast.component';
import { DemoOToastComponent } from '../demos/o-toast.component';
import { DocCollapseComponent } from '../docs/collapse.component';
import { DocOCalendarComponent } from '../docs/o-calendar.component';
import { DocsMenuComponent } from '../docs-menu/docs-menu.component';
import { DocAccordionComponent } from '../docs/accordion.component';
import { DocBadgeComponent } from '../docs/badge.component';
import { DocCardComponent } from '../docs/card.component';
import { DocBreadcrumbComponent } from '../docs/breadcrumb.component';
import { DocModalComponent } from '../docs/modal.component';
import { DocDropdownComponent } from '../docs/dropdown.component';
import { DocFormComponent } from '../docs/form.component';
import { DocJumbotronComponent } from '../docs/jumbotron.component';
import { DocListGroupComponent } from '../docs/list-group.component';
import { DocLocalNavigationComponent } from '../docs/local-navigation.component';
import { DocMediaComponent } from '../docs/media.component';
import { DocOrangePopinComponent } from '../docs/orange-popin.component';
import { DocTabsComponent } from '../docs/tabs.component';
import { DocPaginationComponent } from '../docs/pagination.component';
import { DocAlertComponent } from '../docs/alert.component';
import { DocDatepickerComponent } from '../docs/datepicker.component';
import { DocTypeaheadComponent } from '../docs/typeahead.component';
import { DocTimepickerComponent } from '../docs/timepicker.component';
import { DocRatingComponent } from '../docs/rating.component';
import { DocTableComponent } from '../docs/table.component';
import { DocButtonsComponent } from '../docs/buttons.component';
import { DocTooltipComponent } from '../docs/tooltip.component';
import { DocToastComponent } from '../docs/toast.component';
import { DocNavbarComponent } from '../docs/navbar.component';
import { DocOToastComponent } from '../docs/o-toast.component';
import { DocPopoverComponent } from '../docs/popover.component';
import { DocCarouselComponent } from '../docs/carousel.component';
import { DocSwiperComponent } from '../docs/swiper.component';
import { DocSpinnerComponent } from '../docs/spinner.component';
import { DocScrollspyComponent } from '../docs/scrollspy.component';
import { DocStepbarComponent } from '../docs/stepbar.component';
import { DocProgressBarComponent } from '../docs/progress-bar.component';
import { DocONavbarComponent } from '../docs/o-navbar.component';
import { DocScrollUpComponent } from '../docs/scroll-up.component';
import { DocOScrollTopComponent } from '../docs/o-scroll-top.component';
import { DocOSwitchComponent } from '../docs/o-switch.component';
import { DocOToggleComponent } from '../docs/o-toggle.component';
import { ScrollTopModule } from 'ng-boosted';

describe('BoostwatchComponent', () => {
  let component: BoostwatchComponent;
  let fixture: ComponentFixture<BoostwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        AppRoutingModule,
        ScrollTopModule
      ],
      declarations: [
        AppComponent,
        StartComponent,
        DocsMenuComponent,
        BoostwatchComponent,
        CodeBoxComponent,
        HomeComponent,
        DemoAccordionComponent,
        DemoBadgeComponent,
        DemoCardComponent,
        DemoFormComponent,
        DemoJumbotronComponent,
        DemoMediaComponent,
        DemoOrangePopinComponent,
        DemoListGroupComponent,
        DemoLocalNavigationComponent,
        DemoBreadcrumbComponent,
        DemoButtonsComponent,
        DemoDatepickerComponent,
        DemoDropdownComponent,
        DemoModalComponent,
        DemoNavbarComponent,
        DemoOCalendarComponent,
        DemoONavbarComponent,
        DemoOSwitchComponent,
        DemoOToastComponent,
        DemoOToggleComponent,
        DemoPaginationComponent,
        DemoPopoverComponent,
        DemoProgressBarComponent,
        DemoRatingComponent,
        DemoScrollspyComponent,
        DemoSwiperComponent,
        DemoSpinnerComponent,
        DemoStepbarComponent,
        DemoTableComponent,
        DemoTabsComponent,
        DemoTimepickerComponent,
        DemoToastComponent,
        DemoTooltipComponent,
        DemoAlertComponent,
        DemoCarouselComponent,
        DemoCollapseComponent,
        DemoTypeaheadComponent,
        DocAccordionComponent,
        DocBadgeComponent,
        DocCardComponent,
        DocFormComponent,
        DocJumbotronComponent,
        DocListGroupComponent,
        DocLocalNavigationComponent,
        DocMediaComponent,
        DocOrangePopinComponent,
        DocBreadcrumbComponent,
        DocAlertComponent,
        DocButtonsComponent,
        DocCarouselComponent,
        DocCollapseComponent,
        DocDatepickerComponent,
        DocOCalendarComponent,
        DocModalComponent,
        DocTypeaheadComponent,
        DocTimepickerComponent,
        DocDropdownComponent,
        DocRatingComponent,
        DocTabsComponent,
        DocTableComponent,
        DocPaginationComponent,
        DocTooltipComponent,
        DocToastComponent,
        DocNavbarComponent,
        DocOToastComponent,
        DocPopoverComponent,
        DocSwiperComponent,
        DocSpinnerComponent,
        DocScrollspyComponent,
        DocStepbarComponent,
        DocProgressBarComponent,
        DocONavbarComponent,
        DocOScrollTopComponent,
        DocScrollUpComponent,
        DocOSwitchComponent,
        DocOToggleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
