import { Input, HostListener, Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
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
