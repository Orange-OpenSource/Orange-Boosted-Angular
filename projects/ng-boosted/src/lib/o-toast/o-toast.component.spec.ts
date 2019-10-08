import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastService } from '../services/toast.service';
import { OToastComponent } from './o-toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('OToastComponent', () => {
  let component: OToastComponent;
  let fixture: ComponentFixture<OToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      providers: [ToastService],
      declarations: [ OToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OToastComponent', () => {
    expect(component).toBeTruthy();
  });
});
