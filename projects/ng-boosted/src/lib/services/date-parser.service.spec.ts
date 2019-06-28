import { TestBed } from '@angular/core/testing';

import { DateParserFormatter } from './date-parser.service';

describe('DateParserFormatter', () => {
  let service: DateParserFormatter;
  beforeEach(() => { service = new DateParserFormatter(); });

  it('DateParserFormatter should be created ', () => {
    expect(service).toBeTruthy();
  });

  it('Parse should return a ng date struct from a string', () => {
    expect(service.parse('14/07/1789')).toEqual({year: 1789, month: 7, day: 14});
  });

  it('format should return a string from a ng date struct', () => {
    expect(service.format({ year: 1789, month: 7, day: 14 })).toBe('14/07/1789');
  });

});
