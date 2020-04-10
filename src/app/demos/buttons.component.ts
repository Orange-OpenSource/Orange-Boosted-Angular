import { Component } from '@angular/core';

@Component({
  selector: 'demo-buttons',
  templateUrl: './buttons.component.html'
})
export class DemoButtonsComponent {
  model1 = 1;
  model2 = {
    one: true,
    two: false,
    three: false
  };
}

