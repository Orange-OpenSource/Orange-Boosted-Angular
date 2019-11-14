import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateParserFormatter } from '../services/date-parser.service';
import { OCalendarComponent } from './o-calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('OCalendarComponent', () => {
  let component: OCalendarComponent;
  let fixture: ComponentFixture<OCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule, FormsModule ],
      providers: [ {provide: NgbDateParserFormatter, useClass: DateParserFormatter} ],
      declarations: [ OCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OCalendarComponent', () => {
    expect(component).toBeTruthy();
  });
});
