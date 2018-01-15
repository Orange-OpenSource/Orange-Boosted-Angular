/**
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OSwitchComponent } from './o-switch.component';

describe('Orange Switch Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [OSwitchComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(OSwitchComponent);
    fixture.detectChanges();
  });

});
