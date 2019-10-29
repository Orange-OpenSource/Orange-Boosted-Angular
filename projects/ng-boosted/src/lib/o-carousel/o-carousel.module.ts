import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OCarouselComponent } from './o-carousel.component';
import { OCarouselContainerComponent } from './o-carousel-container/o-carousel-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OCarouselComponent, OCarouselContainerComponent],
  exports: [OCarouselComponent, OCarouselContainerComponent]
})
export class OCarouselModule {}
