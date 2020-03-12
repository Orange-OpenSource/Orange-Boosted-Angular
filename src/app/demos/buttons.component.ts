import { Component } from '@angular/core';

@Component({
  selector: 'demo-buttons',
  templateUrl: './buttons.component.html'
})
export class DemoButtons {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
