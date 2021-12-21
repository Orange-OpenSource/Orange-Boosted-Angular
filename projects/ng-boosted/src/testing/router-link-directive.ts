import { Input, HostListener, Directive } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[routerLink]'
  })
  export class RouterLinkDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;
    @HostListener('click')
    onClick() {
      this.navigatedTo = this.linkParams;
    }
  }
