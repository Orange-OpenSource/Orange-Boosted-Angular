import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavLinkComponent } from './o-nav-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ONavLinkComponent],
  exports: [ONavLinkComponent]
})
export class ONavLinkModule {}
