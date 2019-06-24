import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterLinkDirective } from '../../testing/router-link-directive';


import { ONavMenuComponent } from './o-nav-menu.component';

describe('ONavMenuComponent', () => {
  let component: ONavMenuComponent;
  let fixture: ComponentFixture<ONavMenuComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ONavMenuComponent, RouterLinkDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ONavMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('The value of title of the button tag html attribute should be Test Button', () => {
    component.title = 'Test Button';
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').getAttribute('title')).toEqual('Test Button');
  });

  it('The value of title of the a tag html attribute should be Go Top', () => {
    component.title = 'Test Button';
    component.menuTitle = 'Testing Button';
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('button').textContent).toEqual('Testing Button');
  });
});
