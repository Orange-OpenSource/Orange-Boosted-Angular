import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieManagerService } from '../util/cookie-utils';
import { Alert } from './alert';

@Component({
    selector: 'alert-cookie',
    templateUrl: './alert-cookie.html',
    styles: [`
        .alert-cookie {
            color: #fff;
            background-color: #000;
        }

        .bottom {
            bottom: 0;
            left: 0;
            position: fixed;
            right: 0;
        }

        .alert {
            margin-bottom: 0 !important
        }
    `],
    providers: [CookieManagerService, TranslateService]
})
export class AlertCookieComponent implements OnInit {

    // keep refs to subscriptions to be able to unsubscribe later
    private cookieAlert: Alert = {
        header: 'warning',
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        deny: 'Refuse Cookies',
        allow: 'Accept Cookies',
    };
    private GA_ID = 'test';
    private showAlertCookie: boolean = true;

    constructor(private translateService: TranslateService, private cookiemanager: CookieManagerService) {}

    public ngOnInit() {
        this.translateService.addLangs(['en', 'fr']);
        this.translateService.setDefaultLang('en');
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        if (this.cookiemanager.getCookie('consent') === 'false' && this.showAlertCookie) {
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
        this.cookiemanager.setCookie('consent', true);
        this.showAlertCookie = false;
        return;
    }
}
