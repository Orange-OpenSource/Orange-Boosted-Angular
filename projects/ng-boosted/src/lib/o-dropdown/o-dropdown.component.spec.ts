import { ODropdownDirective } from './o-dropdown.component';

describe('ODropdownDirective', () => {
    let elRefMock = {
        nativeElement: document.createElement('div')
    };
  it('should create an instance', () => {
    const directive = new ODropdownDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});