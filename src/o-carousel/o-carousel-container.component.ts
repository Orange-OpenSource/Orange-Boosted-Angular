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
  Host,
  OnInit
} from '@angular/core';

import Swiper from 'swiper/dist/js/swiper';

@Injectable()
@Component({
  selector: 'o-carousel-container',
  template:
  `<div class="swiper-container">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
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
}
