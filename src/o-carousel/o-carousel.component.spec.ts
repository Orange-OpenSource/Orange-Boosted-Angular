/**
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OCarouselComponent } from './o-carousel.component';

describe('Orange Carousel Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [OCarouselComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(OCarouselComponent);
    fixture.detectChanges();
  });

});
