import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [OSwitchComponent],
  exports: [OSwitchComponent]
})
export class OSwitchModule {}
