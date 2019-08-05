import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopComponent } from './scroll-top.component';

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

  it('should create Scroll Component', () => {
    expect(component).toBeTruthy();
  });

  it('The value of show should be false', () => {
    expect(component.showMe).toBeFalsy();
  });

  it('The value of aria label and title of the a tag html attribute should be Go Top', () => {
    component.label = 'Go Top';
    component.showMe = true;
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('a').getAttribute('title')).toEqual('Go Top');
  });
});
