import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Analytics } from './shared/analytics';


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

    constructor(private _analytics: Analytics, config: NgbCarouselConfig) {
        config.interval = 1500;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true; 
    }

    public pause: boolean;
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
        this._analytics.trackPageViews();
    }
 }
