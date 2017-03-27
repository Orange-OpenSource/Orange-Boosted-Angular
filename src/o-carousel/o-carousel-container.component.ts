/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2017 Orange SA
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
  Host,
  OnInit
} from '@angular/core';

const Swiper = require('swiper');

// function defaults(dest, ...args: any[]) {
//   for (let i = arguments.length - 1; i >= 1; i--) {
//     let source = arguments[i] || {};
//     for (let key in source) {
//       if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
//         dest[key] = source[key];
//       }
//     }
//   }
//   return dest;
// }

@Injectable()
@Component({
  selector: 'o-carousel-container',
  template:
  `<div class="swiper-container">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev" (click)="movePrev()"></div>
    <div class="swiper-button-next" (click)="moveNext()"></div>
  </div>`
})
export class OCarouselContainerComponent implements OnInit {
  @Input()
  public pager: any;

  @Input()
  public options: any;

  public swiper: any;

  public showPager: boolean;

  constructor( @Inject(ElementRef) private elementRef: ElementRef) {
  }

  public ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;

    setTimeout(() => {
      this.swiper = new Swiper(nativeElement.children[0], this.options);
    });
  }

  public update() {
    setTimeout(() => {
      this.swiper.update();
    });
  }

  public moveNext() {
      this.swiper.slideNext();
  }

  public movePrev() {
      this.swiper.slidePrev();
  }
}
