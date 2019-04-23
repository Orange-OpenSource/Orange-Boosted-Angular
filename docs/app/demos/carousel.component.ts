import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-carousel',
    template: require('./carousel.component.html')
})
export class DemoCarousel {
    @ViewChild('carousel') public carousel: NgbCarousel;
    public setPause() {
        this.carousel.pause();
    }
    public setPlay() {
        this.carousel.cycle();
    }
 }
