import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OToastComponent } from './o-toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbToastModule],
  declarations: [OToastComponent],
  exports: [OToastComponent]
})
export class OToastModule {}
