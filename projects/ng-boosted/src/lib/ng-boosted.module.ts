import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgBoostedComponent } from './ng-boosted.component';
import { ScrollTopComponent } from './o-scroll/scroll-top.component';

const NG_BOOSTED_DECLARATIONS = [
  ScrollTopComponent,
  NgBoostedComponent
];

@NgModule({
  declarations: [NG_BOOSTED_DECLARATIONS],
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  exports: [NG_BOOSTED_DECLARATIONS]
})
export class NgBoostedModule { }
