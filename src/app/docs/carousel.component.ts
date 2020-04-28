import { Component } from '@angular/core';

@Component({
  selector: 'doc-carousel',
  template: `
    <docs-wrapper component="Carousel">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/carousel/examples">ng-bootstrap's original component documentation</a>.</p>
        <div class="row">
            <div class="col-md-9">
                <h3>Demo</h3>
                <demo-carousel></demo-carousel>
                <code-box [snippets]="demoSnippets"></code-box>
            </div>
        </div>
    </docs-wrapper>
  `
})
export class DocCarouselComponent {
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/carousel.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/carousel.component.ts')
    };
}
