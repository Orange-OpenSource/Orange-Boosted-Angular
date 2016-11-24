import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'demo-modal',
  template: require('./modal.component.html')
})
export class DemoModal {

    constructor(private modalService: NgbModal) {}

    public open(content) {
        this.modalService.open(content);
    }

}
