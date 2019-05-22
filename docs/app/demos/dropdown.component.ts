import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown',
  template: require('./dropdown.component.html'),
  styles: [`
  .dropdown-item.focus, .dropdown-item:focus {
      color: #fff;
      text-decoration: none;
      background-color: #000;
      }`]
})
export class DemoDropdown {

}
