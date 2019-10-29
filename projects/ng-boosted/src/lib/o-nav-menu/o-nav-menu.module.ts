import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavMenuComponent } from './o-nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [ONavMenuComponent],
  exports: [ONavMenuComponent]
})
export class ONavMenuModule {}
