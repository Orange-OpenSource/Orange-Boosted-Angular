import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-carousel',
    templateUrl: './carousel.component.html'
})
export class DemoCarousel {
    images = [1, 2, 3, 4, 5].map((n) => `https://dummyimage.com/800x600/cccccc/000000&text=slide`+ n);
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  
    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }
  
    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }
}