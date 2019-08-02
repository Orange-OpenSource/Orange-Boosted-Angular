import { Component, TemplateRef, HostBinding } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
    selector: 'lib-o-toast',
    styleUrls: ['./o-toast.component.scss'],
    templateUrl: './o-toast.component.html'
})
export class OToastComponent {

    @HostBinding('class.ngb-toasts') ngb_toast: boolean;
    public autohide: boolean;

    constructor(public toastService: ToastService) {
        this.autohide = true;
        this.ngb_toast = true;
     }

    public Template(toast) {
        return toast.textOrTpl instanceof TemplateRef;
    }
 }
