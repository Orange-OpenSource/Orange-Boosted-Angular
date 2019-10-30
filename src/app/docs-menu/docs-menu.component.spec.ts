import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DocsMenuComponent } from './docs-menu.component';

describe('DocsMenuComponent', () => {
  let component: DocsMenuComponent;
  let fixture: ComponentFixture<DocsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [ DocsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have iscollapsed set to true`, () => {
    expect(component.isCollapsed).toBeTruthy();
  });
});
