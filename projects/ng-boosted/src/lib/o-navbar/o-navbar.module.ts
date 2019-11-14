import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarComponent } from './o-navbar.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  declarations: [ONavbarComponent],
  exports: [ONavbarComponent]
})
export class ONavbarModule {}
