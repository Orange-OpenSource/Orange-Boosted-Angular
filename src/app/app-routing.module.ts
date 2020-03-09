import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { BoostwatchComponent } from './boostwatch/boostwatch.component';
import { DocAccordion } from './docs/accordion.component';
import { DocOCalendar } from './docs/o-calendar.component';
import { DocModal } from './docs/modal.component';
import { DocDropdown } from './docs/dropdown.component';
import { DocTabs } from './docs/tabs.component';
import { DocPagination } from './docs/pagination.component';
import { DocTooltip } from './docs/tooltip.component';
import { DocToast } from './docs/toast.component';
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

const routes: Routes = [{
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
    path: 'documentation/toast',
    component: DocToast
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
    path: 'documentation/datepicker',
    component: DocDatepicker
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
