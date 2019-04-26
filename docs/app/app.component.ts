import { Component, OnInit } from '@angular/core';
import { Globals } from './global';
import { CookieManagerService } from './util/cookie-utils';
import { TranslateService } from '@ngx-translate/core';
import { Alert } from './cookie-interface/alert';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [Globals, CookieManagerService, TranslateService]
})

export class AppComponent implements OnInit {

    // keep refs to subscriptions to be able to unsubscribe later
    private cookieAlert: Alert = {
      header: 'warning',
      message: 'This website uses cookies to ensure you get the best experience on our website.',
      deny: 'Refuse Cookies',
      allow: 'Accept Cookies',
    };

    private GA_ID = 'test';
    private showAlertCookie: boolean = true;

    constructor(public globals: Globals, private translateService: TranslateService, private cookiemanager: CookieManagerService) {}

    public ngOnInit() {
      if (this.cookiemanager.getCookie('consent') === 'false' || this.showAlertCookie) {
        this.translateService.addLangs(['en', 'fr']);
        this.translateService.setDefaultLang('en');

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        this.translateService.get(['cookie.header', 'cookie.message', 'cookie.allow', 'cookie.deny']).subscribe((data) => {
            this.cookieAlert.header = data['cookie.header'];
            this.cookieAlert.message = data['cookie.message'];
            this.cookieAlert.deny = data['cookie.deny'];
            this.cookieAlert.allow = data['cookie.allow'];
        });

        const TrackNavigator = navigator.doNotTrack;
            // Check donotTrack and Cookie Consent and do nothing if those values are positive
        if ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) ) {
            this.cookiemanager.rejectCookie(this.GA_ID);
            this.showAlertCookie = false;
            return;
        }
        // tslint:disable-next-line:max-line-length
        if ( this.cookiemanager.getCookie('consent') === 'false' && ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) )) {
            this.cookiemanager.rejectCookie(this.GA_ID);
            this.showAlertCookie = false;
            return;
        }
        if ( this.cookiemanager.getCookie('consent') === 'false' ) {
            this.cookiemanager.rejectCookie(this.GA_ID);
            this.showAlertCookie = false;
            return;
        }
      }
    }

    public deny() {
      this.cookiemanager.rejectCookie(this.GA_ID);
      this.showAlertCookie = false;
      return;
  }

  public allow() {
      this.cookiemanager.setCookie('consent', false);
      this.cookiemanager.deleteCookie(`ga-disable-${this.GA_ID}`);
      this.showAlertCookie = false;
      return;
  }
 }
