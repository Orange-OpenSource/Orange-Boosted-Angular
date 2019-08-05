import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterLinkDirective } from '../../testing/router-link-directive';


import { ONavLinkComponent } from './o-nav-link.component';

describe('ONavLinkComponent', () => {
  let component: ONavLinkComponent;
  let fixture: ComponentFixture<ONavLinkComponent>;
  let testlink;
  let routerLinks;
  let linkDes;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ONavLinkComponent, RouterLinkDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONavLinkComponent);
    component = fixture.componentInstance;
    testlink  = fixture.debugElement.query(By.css('.nav-link'));
    fixture.detectChanges();
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirective));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirective));
  });

  it('should create ONavLinkComponent', () => {
    expect(component).toBeTruthy();
  });

  it('a link is not active at first', () => {
    expect(component.isActive).toBeFalsy();
  });

  it('The value of title of the a tag html attribute should be Go Top', () => {
    component.title = 'Test Link';
    component.isActive = true;
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('a').getAttribute('title')).toEqual('Test Link');
  });

  it('Get RouterLinks from tempalte', () => {
    component.title = 'Test Link';
    component.route = 'test';
    fixture.detectChanges();
    expect(routerLinks[0].linkParams).toBe('test');
  });

  it('Simulated a click on nav link', () => {
    component.title = 'Test Link';
    component.route = '/test';
    component.isActive = true;
    const onavLinkDe = linkDes[0];
    const onavLink = routerLinks[0];

    onavLinkDe.nativeElement.click();
    fixture.detectChanges();

    expect(onavLink.linkParams).toBe('/test');
  });
});
