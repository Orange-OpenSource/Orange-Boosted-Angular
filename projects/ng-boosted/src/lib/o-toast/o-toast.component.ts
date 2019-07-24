import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
    selector: 'lib-o-toast',
    styleUrls: ['./o-toast.component.scss'],
    templateUrl: './o-toast.component.html',
    host: {'[class.ngb-toasts]': 'true'}
})
export class OToastComponent {

    constructor(public toastService: ToastService) {}

    public Template(toast) {
        return toast.textOrTpl instanceof TemplateRef;
    }
 }
