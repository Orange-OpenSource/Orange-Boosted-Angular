import { Component } from '@angular/core';
// import { ToastService } from 'ng-boosted';

@Component({
    selector: 'demo-o-toast',
    templateUrl: './o-toast.component.html',
    styles: [`
    .margin {
        margin:0.5rem;
    }`]
})
export class DemoOToastComponent {

    // constructor(public toastService: ToastService) {}

    // showSuccess() {
    //     this.toastService.show('I am a success toast', { classname: 'bg-success', delay: 5000});
    // }

    // showStandard() {
    //     this.toastService.show('I am a standard toast');
    // }

    // showDanger() {
    //     this.toastService.show('I am a danger toast', { classname: 'bg-danger', delay: 5000});
    // }
}
