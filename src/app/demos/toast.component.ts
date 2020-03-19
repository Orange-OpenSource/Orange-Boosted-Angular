import { Component } from '@angular/core';
import { ToastService } from './toast-service';

@Component({
    selector: 'demo-toast',
    templateUrl: './toast.component.html'
})
export class DemoToast {
    show = true;

    constructor(public toastService: ToastService) {}

    close() {
      this.show = false;
      setTimeout(() => this.show = true, 5000);
    }

    showStandard() {
      this.toastService.show('I am a standard toast');
    }
  
    showSuccess() {
      this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    }
  
    showDanger(dangerTpl) {
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
    }
}
