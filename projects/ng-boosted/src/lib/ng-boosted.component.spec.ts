import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBoostedComponent } from './ng-boosted.component';

describe('NgBoostedComponent', () => {
  let component: NgBoostedComponent;
  let fixture: ComponentFixture<NgBoostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBoostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBoostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
