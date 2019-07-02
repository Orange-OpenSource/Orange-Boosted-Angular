import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h3> with "Dependencies"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('h3');
    expect(p.textContent).toEqual('Dependencies');
  });
});
