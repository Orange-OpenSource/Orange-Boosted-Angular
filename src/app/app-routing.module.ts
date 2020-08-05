import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { BoostwatchComponent } from './boostwatch/boostwatch.component';
import { DocAccordionComponent } from './docs/accordion.component';
import { DocBadgeComponent } from './docs/badge.component';
import { DocCardComponent } from './docs/card.component';
import { DocFormComponent } from './docs/form.component';
import { DocJumbotronComponent } from './docs/jumbotron.component';
import { DocListGroupComponent } from './docs/list-group.component';
import { DocLocalNavigationComponent } from './docs/local-navigation.component';
import { DocMediaComponent } from './docs/media.component';
import { DocOrangePopinComponent } from './docs/orange-popin.component';
import { DocBreadcrumbComponent } from './docs/breadcrumb.component';
import { DocButtonsComponent } from './docs/buttons.component';
import { DocOCalendarComponent } from './docs/o-calendar.component';
import { DocModalComponent } from './docs/modal.component';
import { DocDropdownComponent } from './docs/dropdown.component';
import { DocTabsComponent } from './docs/tabs.component';
import { DocPaginationComponent } from './docs/pagination.component';
import { DocTooltipComponent } from './docs/tooltip.component';
import { DocOToastComponent } from './docs/o-toast.component';
import { DocToastComponent } from './docs/toast.component';
import { DocPopoverComponent } from './docs/popover.component';
import { DocAlertComponent } from './docs/alert.component';
import { DocCarouselComponent } from './docs/carousel.component';
import { DocSwiperComponent } from './docs/swiper.component';
import { DocSpinnerComponent } from './docs/spinner.component';
import { DocCollapseComponent } from './docs/collapse.component';
import { DocDatepickerComponent } from './docs/datepicker.component';
import { DocProgressBarComponent } from './docs/progress-bar.component';
import { DocNavbarComponent } from './docs/navbar.component';
import { DocONavbarComponent } from './docs/o-navbar.component';
import { DocOScrollTopComponent } from './docs/o-scroll-top.component';
import { DocScrollUpComponent } from './docs/scroll-up.component';
import { DocOSwitchComponent } from './docs/o-switch.component';
import { DocOToggleComponent } from './docs/o-toggle.component';
import { DocRatingComponent } from './docs/rating.component';
import { DocTableComponent } from './docs/table.component';
import { DocTimepickerComponent } from './docs/timepicker.component';
import { DocTypeaheadComponent} from './docs/typeahead.component';

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
    path: 'documentation/buttons',
    component: DocButtonsComponent
  },
  {
    path: 'documentation/collapse',
    component: DocCollapseComponent
  },
  {
    path: 'documentation/calendar',
    component: DocOCalendarComponent
  },
  {
    path: 'documentation/accordion',
    component: DocAccordionComponent
  },
  {
    path: 'documentation/badge',
    component: DocBadgeComponent
  },
  {
    path: 'documentation/card',
    component: DocCardComponent
  },
  {
    path: 'documentation/breadcrumb',
    component: DocBreadcrumbComponent
  },
  {
    path: 'documentation/modal',
    component: DocModalComponent
  },
  {
    path: 'documentation/dropdown',
    component: DocDropdownComponent
  },
  {
    path: 'documentation/forms',
    component: DocFormComponent
  },
  {
    path: 'documentation/jumbotron',
    component: DocJumbotronComponent
  },
  {
    path: 'documentation/list-group',
    component: DocListGroupComponent
  },
  {
    path: 'documentation/local-navigation',
    component: DocLocalNavigationComponent
  },
  {
    path: 'documentation/media-object',
    component: DocMediaComponent
  },
  {
    path: 'documentation/orange-popin',
    component: DocOrangePopinComponent
  },
  {
    path: 'documentation/tabs',
    component: DocTabsComponent
  },
  {
    path: 'documentation/pagination',
    component: DocPaginationComponent
  },
  {
    path: 'documentation/tooltip',
    component: DocTooltipComponent
  },
  {
    path: 'documentation/Otoast',
    component: DocOToastComponent
  },
  {
    path: 'documentation/toast',
    component: DocToastComponent
  },
  {
    path: 'documentation/popover',
    component: DocPopoverComponent
  },
  {
    path: 'documentation/alert',
    component: DocAlertComponent
  },
  {
    path: 'documentation/carousel',
    component: DocCarouselComponent
  },
  {
    path: 'documentation/swiper',
    component: DocSwiperComponent
  },
  {
    path: 'documentation/spinners',
    component: DocSpinnerComponent
  },
  {
    path: 'documentation/progress',
    component: DocProgressBarComponent
  },
  {
    path: 'documentation/navbar',
    component: DocNavbarComponent
  },
  {
    path: 'documentation/o-navbar',
    component: DocONavbarComponent
  },
  {
    path: 'documentation/scroll-up',
    component: DocScrollUpComponent
  },
  {
    path: 'documentation/o-scroll-top',
    component: DocOScrollTopComponent
  },
  {
    path: 'documentation/o-switch',
    component: DocOSwitchComponent
  },
  {
    path: 'documentation/o-toggle',
    component: DocOToggleComponent
  },
  {
    path: 'documentation/datepicker',
    component: DocDatepickerComponent
  },
  {
    path: 'documentation/rating',
    component: DocRatingComponent
  },
  {
    path: 'documentation/table',
    component: DocTableComponent
  },
  {
    path: 'documentation/timepicker',
    component: DocTimepickerComponent
  },
  {
    path: 'documentation/typeahead',
    component: DocTypeaheadComponent
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
