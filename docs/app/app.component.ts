import { Component } from '@angular/core';
import { CookieManagerService } from './util/cookie-utils';
import { Globals } from './global';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals]
})

export class AppComponent {

    constructor(public globals: Globals, private cookiemanager: CookieManagerService) {}

    public reset() {
        this.cookiemanager.rejectCookie('test');
        return;
    }
 }
