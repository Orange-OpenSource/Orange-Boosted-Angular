import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-boosted'

@Component({
    selector: 'demo-toast',
    templateUrl: './toast.component.html'
})
export class DemoToast implements OnInit {
    constructor(public toastService: ToastService) {}
    public show: boolean;
    public autohide: boolean;
    ngOnInit() {
    this.show = false;
    this.autohide = true;
    }

    showSuccess() {
        this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 5000, autohide:false });
    }
}
