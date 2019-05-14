import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'demo-modal',
  template: require('./modal.component.html')
})
export class DemoModal implements OnInit {

    public closeResult: string;

    constructor(private modalService: NgbModal, private _analytics: Analytics ) {}

    public open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    public ngOnInit(): void {
      this._analytics.trackPageViews();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
    }

}
