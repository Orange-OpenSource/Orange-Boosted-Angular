/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
    Component,
    Input,
    Injectable,
    Inject,
    ElementRef,
    OnInit,
    HostListener
  } from '@angular/core';

  import Swiper from 'swiper/dist/js/swiper';

  @Injectable()
  @Component({
    selector: 'lib-o-carousel-container',
    styles: [`
    .icon-Pause {
        content: "\eabc";
    }
    .icon-Play {
        content: "\eac9";
    }
    .swiper-button-prev:focus, .swiper-button-next:focus {
      outline: 2px solid #000 !important;
      outline: -1px !important;
    }`
    ],
    templateUrl: './o-carousel-container.component.html'
  })
  export class OCarouselContainerComponent implements OnInit {
    @Input() public pager: any;

    @Input() public options: any;

    @Input() public pauseButton: boolean;

    public swiper: any;
    public showPager: boolean;
    public pause: boolean;

    constructor( @Inject(ElementRef) private elementRef: ElementRef) {}

    public ngOnInit() {
      const nativeElement = this.elementRef.nativeElement;

      setTimeout(() => {
        this.swiper = new Swiper(nativeElement.children[0], this.options);
      });
      this.pause = false;
    }

    public changeState() {
      if (!this.pause) {
          this.swiper.autoplay.stop();
          this.pause = !this.pause;
      } else {
          this.swiper.autoplay.start();
          this.pause = !this.pause;
      }
    }

    public update() {
      setTimeout(() => {
        this.swiper.update();
      });
    }
    
    @HostListener('mouseenter') public onMouseEnter() {
      if (this.swiper) {
        this.swiper.autoplay.stop();
      }
    }

    @HostListener('mouseleave') public onMouseLeave() {
      if (this.swiper && !this.pause) {
        this.swiper.autoplay.start();
      }
    }

    @HostListener('focus') public onFocusIn() {
      if (this.swiper) {
        this.swiper.autoplay.start();
      }
    }

    @HostListener('blur') public onFocusOut() {
      if (this.swiper && !this.pause) {
        this.swiper.autoplay.start();
      }
    }
  }
