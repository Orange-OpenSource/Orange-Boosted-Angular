import { Component } from '@angular/core';

@Component({
  selector: 'demo-progress-bar',
  styles: [`
    >>> .progress {
      margin-top: 1rem;
    }
  `],
  template: require('./progress-bar.component.html')
})

export class DemoProgressBar { }
