import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
  }
const COUNTRIES: Country[] = [
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'demo-table',
  templateUrl: './table.component.html'
})
export class DemoTableComponent {
    countries = COUNTRIES;
}

