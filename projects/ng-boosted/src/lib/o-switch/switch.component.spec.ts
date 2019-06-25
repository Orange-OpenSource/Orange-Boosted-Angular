import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { OSwitchComponent } from './switch.component';

describe('OSwitchComponent', () => {
  let component: OSwitchComponent;
  let fixture: ComponentFixture<OSwitchComponent>;
  let atag: HTMLElement;
  let inputTest;
  let input;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule],
      declarations: [ OSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSwitchComponent);
    component = fixture.componentInstance;
    atag = fixture.debugElement.nativeElement;
    input  = fixture.debugElement.query(By.css('.checkbox'));
    inputTest  = fixture.debugElement.query(By.css('.checkbox')).nativeElement;
    fixture.detectChanges();
  });

  it('should create Switch Component', () => {
    expect(component).toBeTruthy();
  });

  it('The value of toggled should be false', () => {
    expect(component.toggled).toBeFalsy();
  });

  it('The value of rounded should be false', () => {
    expect(component.rounded).toBeFalsy();
  });

  it('The value of rounded should be false', () => {
    component.rounded = true;
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(ataghtml.querySelector('label').getAttribute('class')).toEqual('toggle col-form-label toggle-rounded');
  });

  it('The value of successColor should be false', () => {
    expect(component.successColor).toBeFalsy();
  });

  it('The value of id and the name of the input tag html attribute should be Input#1', () => {
    component.inputId = 'Input#1';
    fixture.detectChanges();
    const inputTagHtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(inputTagHtml.querySelector('input').getAttribute('id')).toEqual('Input#1');
  });

  it('Simulated a click on the input with subscriotion to the output', () => {
    component.toggled = true;
    component.inputId = 'Input#2';
    input.triggerEventHandler('click', null);

    fixture.detectChanges();

    component.isChecked.subscribe(inputtoggled => expect(inputtoggled).toBeFalsy());
  });

});
