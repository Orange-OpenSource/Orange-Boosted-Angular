import { Component } from '@angular/core';
import { ToastService } from './toast-service';

@Component({
    selector: 'demo-toast',
    templateUrl: './toast.component.html'
})
export class DemoToastComponent {
  show = true;

  constructor(public toastService: ToastService) {}

  close() {
    this.show = false;
    setTimeout(() => this.show = true, 5000);
  }

  showStandard() {
    this.toastService.show('I am a standard toast', { classname: 'font-weight-bold', delay: 10000 });
  }
  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success font-weight-bold', delay: 10000 });
  }
  showDanger() {
    this.toastService.show('I am a danger toast', { classname: 'bg-danger font-weight-bold', delay: 15000 });
  }
}
