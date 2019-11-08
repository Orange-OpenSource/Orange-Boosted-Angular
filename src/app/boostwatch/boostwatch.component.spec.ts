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
import { DemoONavbar } from '../demos/o-navbar.component';
import { BoostwatchComponent } from './boostwatch.component';
import { DemoToast } from '../demos/toast.component';
import { OCalendarModule, OSwitchModule, OCarouselModule } from 'ng-boosted';

describe('BoostwatchComponent', () => {
  let component: BoostwatchComponent;
  let fixture: ComponentFixture<BoostwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule, BrowserModule, FormsModule, OCalendarModule, OSwitchModule, OCarouselModule ],
      declarations: [ BoostwatchComponent, DemoAccordion, DemoModal, DemoTabs, DemoPagination, DemoTooltip,
        DemoPopover, DemoAlert, DemoCarousel, DemoOCalendar, DemoCollapse, DemoProgressBar, DemoDropdown,
        DemoOSwitch, DemoOToggle, DemoSwiper, DemoONavbar, DemoToast ]
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
