import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostwatchComponent } from './boostwatch.component';

describe('BoostwatchComponent', () => {
  let component: BoostwatchComponent;
  let fixture: ComponentFixture<BoostwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
