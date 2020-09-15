import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component ({
    selector: 'demo-orange-megamenu',
    templateUrl: './orange-megamenu.component.html'
})
export class DemoOrangeMegamenuComponent implements OnInit  {
    ngOnInit() {
        $('#megamenu').megamenu();
    }
}
