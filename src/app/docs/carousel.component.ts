import { Component } from '@angular/core';

@Component({
  selector: 'doc-carousel',
  template: `
    <docs-wrapper component="Carousel">
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
export class DocCarousel {
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/carousel.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/carousel.component.ts')
    };
}