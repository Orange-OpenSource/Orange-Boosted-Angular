/**
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ONavbarComponent } from './o-navbar.component';

describe('Orange Navbar Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ONavbarComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ONavbarComponent);
    fixture.detectChanges();
  });

});
