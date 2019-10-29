import { NgModule } from '@angular/core';
import { OCalendarComponent } from './o-calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  declarations: [OCalendarComponent],
  exports: [OCalendarComponent]
})
export class OCalendarModule {}
