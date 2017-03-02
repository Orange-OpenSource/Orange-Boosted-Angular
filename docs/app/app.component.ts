import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})

export class AppComponent {
    public version = NGBOOSTED_VERSION;
 }
