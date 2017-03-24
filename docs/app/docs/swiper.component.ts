import { Component } from '@angular/core';

@Component({
  selector: 'doc-swiper',
  template: `
    <docs-wrapper component="Swiper">
        <div class="row">
            <div class="col-md-9">
                <h3>Demo</h3>
                <demo-swiper></demo-swiper>
                <code-box [snippets]="demoSnippets"></code-box>
            </div>
        </div>
    </docs-wrapper>
  `
})
export class DocSwiper {
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/swiper.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/swiper.component.ts')
    };
}
