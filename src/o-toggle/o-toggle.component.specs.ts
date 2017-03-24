/**
 * --------------------------------------------------------------------------
 * Ng-boosted - o-toggle.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { OToggleComponent } from './o-toggle.component';

describe('Orange Toggle Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [OToggleComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(OToggleComponent);
    fixture.detectChanges();
  });

});
