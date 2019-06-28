import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Swiper from 'swiper/dist/js/swiper';


import { OCarouselContainerComponent } from './o-carousel-container.component';

describe('OCarouselContainerComponent', () => {
  let component: OCarouselContainerComponent;
  let fixture: ComponentFixture<OCarouselContainerComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Swiper],
      declarations: [ OCarouselContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCarouselContainerComponent);
    component = fixture.componentInstance;
    component.pauseButton = true;
    fixture.detectChanges();
  });

  it('should create OCarouselContainerComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Firstly, pause is false', () => {
    expect(component.pause).toBeFalsy();
  });

  it('The value of pause button set to true and the pause button should be visible by checking the id in the html button tag', () => {
    component.pauseButton = true;
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('id')).toEqual('changeState');
  });

  it('The value of pause button sets to true and the pause button should be visible by checking the component.pausebutton', () => {
    component.pauseButton = true;
    fixture.detectChanges();
    expect(component.pauseButton).toBeTruthy();
  });

  it('Initialy, aria-label of the button should be Set Pause by checking the aria-label', () => {
    component.pauseButton = true;
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('aria-label')).toEqual('set Pause');
  });

  /*it('After cliking on pause button, aria-label of the button should be Set Play by checking the aria-label', () => {
    component.pauseButton = true;
    component.pause = true;
    component.changeState();
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('aria-label')).toEqual('set Play');
  });

  it('Initialy, aria-label of the button should be Set Pause by checking the css class', () => {
    component.pauseButton = true;
    component.changeState();
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('class')).toEqual('btn btn-outline-dark btn-sm icon-Pause');
  });

  it('After cliking on pause button, aria-label of the button should be Set Play by the css class', () => {
    component.pauseButton = true;
    component.pause = true;
    component.changeState();
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('class')).toEqual('btn btn-outline-dark btn-sm icon-Play');
  });*/
});
