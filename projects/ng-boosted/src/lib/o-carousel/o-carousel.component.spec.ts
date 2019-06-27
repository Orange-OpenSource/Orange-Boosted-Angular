import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OCarouselContainerComponent } from './o-carousel-container/o-carousel-container.component';
import Swiper from 'swiper/dist/js/swiper';


import { OCarouselComponent } from './o-carousel.component';

describe('OCarouselComponent', () => {
  let component: OCarouselComponent;
  let fixture: ComponentFixture<OCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Swiper, OCarouselContainerComponent],
      declarations: [ OCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OCarouselComponent', () => {
    expect(component).toBeTruthy();
  });

});
