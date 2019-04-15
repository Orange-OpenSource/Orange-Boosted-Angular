import { Component, OnInit, OnDestroy } from '@angular/core';
import { Globals } from './global';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { TranslateService } from '@ngx-translate/core';
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
    constructor(public globals: Globals, private ccService: NgcCookieConsentService, private translateService: TranslateService) {}

    public ngOnInit() {

        // Support for translated cookies messages
        this.translateService.addLangs(['en', 'fr']);
        this.translateService.setDefaultLang('en');

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        this.translateService.get(['cookie.header', 'cookie.message', 'cookie.allow', 'cookie.deny']).subscribe( (data) => {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
        // Override default messages with the translated ones
        this.ccService.getConfig().content.header = data['cookie.header'];
        this.ccService.getConfig().content.message = data['cookie.message'];
        this.ccService.getConfig().content.allow = data['cookie.allow'];
        this.ccService.getConfig().content.deny = data['cookie.deny'];
      });

        /*
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
          () => {
            // this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
          });

        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
          () => {
            // you can use this.ccService.getConfig() to do stuff...
          });*/
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
