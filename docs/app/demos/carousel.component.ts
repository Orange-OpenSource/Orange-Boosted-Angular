import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-carousel',
    template: require('./carousel.component.html')
})
export class DemoCarousel {
    @ViewChild('carousel') public carousel: NgbCarousel;
    public pause: boolean = false;
    public setPause() {
        this.carousel.pause();
        this.pause = !this.pause;
    }

    public setPlay() {
        this.carousel.cycle();
        this.pause = !this.pause;
    }
 }
