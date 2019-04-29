import { Component } from '@angular/core';
import { Globals } from './global';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals]
})

export class AppComponent {

    constructor(public globals: Globals) {}
 }
