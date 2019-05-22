import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'demo-carousel',
    template: require('./carousel.component.html'),
    styles: [`
    .icon-Pause {
        content: "\eabc";
    }
    .icon-Play {
        content: "\eac9";
    }`],
    providers: [NgbCarouselConfig]
})
export class DemoCarousel implements OnInit {

    @ViewChild('carousel') public carousel: NgbCarousel;

    public pause: boolean;

    constructor(config: NgbCarouselConfig) {
        config.interval = 1500;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
    }

    public changeState() {
        if (!this.pause) {
            this.carousel.interval = 0;
            this.carousel.pause();
            this.pause = !this.pause;
        } else {
            this.carousel.interval = 1500;
            this.carousel.cycle();
            this.pause = !this.pause;
        }
    }

    public ngOnInit() {
        this.pause = false;
    }
    public onFocus() {
        this.carousel.interval = 0;
        this.carousel.pause();
        this.pause = !this.pause;
    }
    public onBlur() {
        this.carousel.interval = 1500;
        this.carousel.cycle();
        this.pause = !this.pause;
    }

    @HostListener('mouseenter') public onMouseEnter() {
        this.carousel.pause();
        this.pause = !this.pause;
    }

    @HostListener('mouseleave') public onMouseLeave() {
        this.carousel.cycle();
        this.pause = !this.pause;
    }
 }
