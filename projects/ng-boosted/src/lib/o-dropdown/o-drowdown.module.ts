import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ODropdownDirective } from './o-dropdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ODropdownDirective],
  exports: [ODropdownDirective]
})
export class ODropdownModule {}
