import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgBoostedModule } from 'ng-boosted';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,NgBoostedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as footer with "Designed and built by the Boosted team"`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('.o-footer-top'));
    const p: HTMLElement = paragraphDe.nativeElement;
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(p.textContent).toEqual('Designed and built by the Boosted team.');
  });
});
