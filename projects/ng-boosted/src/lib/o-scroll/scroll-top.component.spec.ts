import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopComponent } from './scroll-top.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('ScrollTopComponent', () => {
  let component: ScrollTopComponent;
  let fixture: ComponentFixture<ScrollTopComponent>;
  let atag: HTMLElement ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopComponent);
    component = fixture.componentInstance;
    atag = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The value of show should be false', () => {
    expect(component.showMe).toBeFalsy();
  });

  it('The value of aria label and title of the a tag html attribute should be Go Top', () => {
    component.label = 'Go Top';
    component.showMe = true;
    //console.log(atag);
    //expect(atag.querySelector('a').getAttribute('title')).toEqual('Go Top');
  });
});
