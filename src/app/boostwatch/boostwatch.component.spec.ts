import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAccordion } from '../demos/accordion.component';
import { DemoModal } from '../demos/modal.component';
import { DemoTabs } from '../demos/tabs.component';
import { DemoPagination } from '../demos/pagination.component';
import { DemoTooltip } from '../demos/tooltip.component';
import { DemoPopover } from '../demos/popover.component';
import { DemoAlert } from '../demos/alert.component';
import { DemoCarousel } from '../demos/carousel.component';
import { DemoOCalendar } from '../demos/o-calendar.component';
import { DemoCollapse } from '../demos/collapse.component';
import { DemoProgressBar } from '../demos/progress-bar.component';
import { DemoDropdown } from '../demos/dropdown.component';
import { DemoOSwitch } from '../demos/o-switch.component';
import { DemoOToggle } from '../demos/o-toggle.component';
import { DemoSwiper } from '../demos/swiper.component';
import { DemoNavbar } from '../demos/navbar.component';
import { DemoONavbar } from '../demos/o-navbar.component';
import { HomeComponent } from '../home/home.component';
import { BoostwatchComponent } from './boostwatch.component';
import { DemoToast } from '../demos/toast.component';
import { DemoOToast } from '../demos/o-toast.component';
import { ScrollTopModule } from 'ng-boosted';
import { AppRoutingModule } from "../app-routing.module";
import { StartComponent } from "../start/start.component";
import { DocCollapse } from "../docs/collapse.component";
import { DocOCalendar } from "../docs/o-calendar.component";
import { AppComponent } from "../app.component";
import { DocsMenuComponent } from "../docs-menu/docs-menu.component";
import { DocAccordion } from "../docs/accordion.component";
import { DocModal } from "../docs/modal.component";
import { DocDropdown } from "../docs/dropdown.component";
import { DocTabs } from "../docs/tabs.component";
import { DocPagination } from "../docs/pagination.component";
import { DocAlert } from "../docs/alert.component";
import { DocDatepicker } from "../docs/datepicker.component";
import { DocTypeahead } from "../docs/typeahead.component";
import { DocTimepicker } from "../docs/timepicker.component";
import { DocRating } from "../docs/rating.component";
import { DocTable } from "../docs/table.component";
import { DocButtons } from "../docs/buttons.component";
import { DocTooltip } from "../docs/tooltip.component";
import { DocToast } from "../docs/toast.component";
import { DocNavbar } from "../docs/navbar.component";
import { DocOToast } from "../docs/o-toast.component";
import { DocPopover } from "../docs/popover.component";
import { DocCarousel } from "../docs/carousel.component";
import { DocSwiper } from "../docs/swiper.component";
import { DocProgressBar } from "../docs/progress-bar.component";
import { DocONavbar } from "../docs/o-navbar.component";
import { DocScrollUp } from "../docs/scroll-up.component";
import { DocOScrollTop } from "../docs/o-scroll-top.component";
import { DocOSwitch } from "../docs/o-switch.component";
import { DocOToggle } from "../docs/o-toggle.component";
import { CodeBox } from "../docs/code-box.component";

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
        DemoAccordion,
        DemoModal,
        DemoTabs,
        DemoPagination,
        DemoTooltip,
        DemoToast,
        DemoOToast,
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
        DemoNavbar,
        DocTypeahead,
        DocTimepicker,
        DocDropdown,
        DocRating,
        DocTabs,
        DocButtons,
        DocTable,
        DocDatepicker,
        DocPagination,
        DocAlert,
        DocTooltip,
        DocToast,
        DocNavbar,
        DocOToast,
        DocPopover,
        DocCarousel,
        DocSwiper,
        DocCollapse,
        DocProgressBar,
        DocONavbar,
        DocOScrollTop,
        DocScrollUp,
        DocOSwitch,
        DocOToggle,
        CodeBox,
        HomeComponent
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
