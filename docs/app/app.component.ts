import { Component, OnInit, OnDestroy } from '@angular/core';
import { Globals } from './global';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals]
})

export class AppComponent implements OnInit, OnDestroy {
    // keep refs to subscriptions to be able to unsubscribe later
    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;
    constructor(public globals: Globals, private ccService: NgcCookieConsentService) {}

    public ngOnInit() {
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
          () => {
            // this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
          });

        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
          () => {
            // you can use this.ccService.getConfig() to do stuff...
          });
    }

    public ngOnDestroy() {
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    }
 }
