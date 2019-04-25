import { Component } from '@angular/core';
import { Globals } from './global';
import { CookieManagerService } from './util/cookie-utils';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals, CookieManagerService]
})

export class AppComponent {

    // keep refs to subscriptions to be able to unsubscribe later

    constructor(public globals: Globals) {}
 }
