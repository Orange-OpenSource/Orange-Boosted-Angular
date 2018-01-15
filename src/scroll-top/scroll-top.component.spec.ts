/**
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScrollTopComponent } from './scroll-top.component';

describe('ScrollTop Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ScrollTopComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ScrollTopComponent);

    const comp = fixture.componentInstance; // Component test instance
    fixture.detectChanges();
  });

});
