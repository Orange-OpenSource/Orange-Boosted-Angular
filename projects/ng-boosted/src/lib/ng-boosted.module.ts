import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { NgBoostedComponent } from './ng-boosted.component';
import { ScrollTopComponent } from './o-scroll/scroll-top.component';

const NG_BOOSTED_DECLARATIONS = [
  ScrollTopComponent,
  NgBoostedComponent
];

@NgModule({
  declarations: [NG_BOOSTED_DECLARATIONS],
  imports: [CommonModule],
  exports: [NG_BOOSTED_DECLARATIONS]
})
export class NgBoostedModule { }
