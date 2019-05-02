import { Component } from '@angular/core';
import { Globals } from './global';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [`
    .img-height {
        height: 1.4rem;
    }
    `],
    providers: [Globals]
})

export class AppComponent {
    constructor(public globals: Globals) {}
 }
