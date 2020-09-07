import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component ({
    selector: 'demo-priority-nav',
    templateUrl: './priority-nav.component.html'
})
export class DemoPriorityNavComponent implements OnInit  {
    ngOnInit(){
        $('.o-nav-local').prioritynav();
    }
}
