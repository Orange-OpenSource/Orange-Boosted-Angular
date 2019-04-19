import { Component, OnInit, OnDestroy } from '@angular/core';
import { Globals } from './global';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { CookieManagerService } from './util/cookie-utils';
import { NgcInitializeEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals, CookieManagerService]
})

export class AppComponent implements OnInit, OnDestroy {
    private GA_COOKIE_NAMES = ['_ga', '_gat'];
    private GA_ID = 'test';
    // keep refs to subscriptions to be able to unsubscribe later
    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;
    constructor(public globals: Globals, private cookiemanager: CookieManagerService,
                private ccService: NgcCookieConsentService, private translateService: TranslateService) {}

    public ngOnInit() {

        const GA_COOKIE_NAMES = ['_ga', '_gat'];
        // Support for translated cookies messages
        this.translateService.addLangs(['en', 'fr']);
        this.translateService.setDefaultLang('en');

        this.ccService.getConfig().autoOpen = true;

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        this.translateService.get(['cookie.header', 'cookie.message', 'cookie.allow', 'cookie.deny']).subscribe( (data) => {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
        // Override default messages with the translated ones
        this.ccService.getConfig().content.header = data['cookie.header'];
        this.ccService.getConfig().content.message = data['cookie.message'];
        this.ccService.getConfig().content.allow = data['cookie.allow'];
        this.ccService.getConfig().content.deny = data['cookie.deny'];

        this.ccService.destroy();
        this.ccService.init(this.ccService.getConfig());
        });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
          (event: NgcStatusChangeEvent) => {
            const TrackNavigator = navigator.doNotTrack;
            // Check donotTrack and Cookie Consent and do nothing if those values are positive
            if ( TrackNavigator === '1' || TrackNavigator === 'yes' || !TrackNavigator) {
              this.rejectCookie(this.GA_ID);
              return;
            }
            if ( !this.ccService.hasConsented().valueOf() && (TrackNavigator === '1' || TrackNavigator === 'yes' || !TrackNavigator)) {
              this.rejectCookie(this.GA_ID);
              return;
            }
            if (this.ccService.hasConsented().valueOf() && (TrackNavigator === '0' || TrackNavigator === 'no' || TrackNavigator === 'unspecified')) {
              // start analytics
              return;
            }
            if (this.ccService.hasConsented().valueOf()) {
            this.rejectCookie(this.GA_ID);
            return;
            }
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

    private rejectCookie(gaId: string) {
      // disable GA
      this.cookiemanager.setCookie(`ga-disable-${gaId}`, 'true');
      window[`ga-disable-${gaId}`] = true;
      this.cookiemanager.setCookie('cookieconsent_status', 'deny');
      this.GA_COOKIE_NAMES.forEach((cookieName) => {
        this.cookiemanager.deleteCookie(cookieName);
      });
      console.log('has no consented');
    }

 }
