import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-carousel',
    template: require('./carousel.component.html'),
    styles: [`
    .icon-Pause {
        content: "\eabc";
    }
    .icon-Play {
        content: "\eac9";
    }`]
})
export class DemoCarousel implements OnInit {
    @ViewChild('carousel') public carousel: NgbCarousel;

    public pause: boolean;
    public setPause() {
        this.carousel.pause();
        this.pause = !this.pause;
    }

    public setPlay() {
        this.carousel.cycle();
        this.pause = !this.pause;
    }

    public ngOnInit() {
        this.pause = false;
    }
 }
