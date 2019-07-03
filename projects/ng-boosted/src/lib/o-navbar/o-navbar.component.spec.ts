import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { RouterLinkDirective } from '../../testing/router-link-directive';
import { TestComponent } from '../../testing/test.component';

import { ONavbarComponent } from './o-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ONavbarComponent', () => {
  let component: ONavbarComponent;
  let fixture: ComponentFixture<ONavbarComponent>;
  let testlink;
  let testButton;
  let routerLinks;
  let linkDes;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbModule, RouterModule.forRoot([{path: 'home', component: TestComponent}]) ],
      declarations: [ ONavbarComponent, TestComponent, RouterLinkDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONavbarComponent);
    component = fixture.componentInstance;
    testlink  = fixture.debugElement.query(By.css('.navbar-brand'));
    testButton  = fixture.debugElement.query(By.css('.navbar-toggler'));
    fixture.detectChanges();
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirective));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirective));
  });

  it('should create ONavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('a link is true the first time', () => {
    expect(component.isCollapsed).toBeTruthy();
  });

  it('The value of title of the img tag html attribute should be brand label', () => {
    component.brandLabel = 'brand label';
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('img').getAttribute('title')).toEqual('brand label');
  });

  it('The value of source of the img tag html attribute should be src img', () => {
    component.brandPath = '/src/img/';
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(ataghtml.querySelector('img').getAttribute('src')).toEqual('/src/img/');
  });

  it('Get RouterLinks from tempalte and check if it is equal to home', () => {
    component.homeRoute = '/home';
    fixture.detectChanges();
    expect(routerLinks[0].linkParams).toBe('/home');
  });

  it('Simulated a click on nav link', () => {
    component.homeRoute = '/home';
    const onavLinkDe = linkDes[0];
    const onavLink = routerLinks[0];

    fixture.detectChanges();
    onavLinkDe.nativeElement.click();
    fixture.detectChanges();

    expect(onavLink.navigatedTo).toBe('/home');
  });

  it('Check the click event on button', () => {
    component.homeRoute = '/home';
    fixture.detectChanges();
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    testButton.triggerEventHandler('click', null);
    expect(component.isCollapsed).toBeFalsy();
  });
});
