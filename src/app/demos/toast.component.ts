import { Component } from '@angular/core';
import { ToastService } from './toast-service';

@Component({
    selector: 'demo-toast',
    templateUrl: './toast.component.html'
})
export class DemoToastComponent {
  show_toast_1 = true;
  show_toast_2 = true;
  
  constructor(public toastService: ToastService) {}

  close() {
    this.show_toast_2 = false;
    setTimeout(() => this.show_toast_2 = true, 3000);
  }

  showStandard() {
    this.toastService.show('I am a standard toast', { classname: 'fw-bold'});
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'border border-success fw-bold', delay: 10000 });
  }

  showDanger() {
    this.toastService.show('I am a danger toast',{ classname: 'border border-danger fw-bold', delay: 15000 });
  }
}
