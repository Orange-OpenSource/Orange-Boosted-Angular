import { Component } from '@angular/core';

@Component({
  selector: 'doc-swiper',
  styles: [`
    demo-swiper + h3 {
      margin-top: 1.25rem;
    }
  `],
  template: `
    <docs-wrapper component="Swiper">
      <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.1.9</p>
      <div class="row">
          <div class="col-md-9">
              <h3>Demo</h3>
              <img src="../../assets/gif/swiper.gif" alt="this is a swiper component gif" width=550/>
              <h3>Usage</h3>
              <div [innerHtml]=docContent></div>
              <code-box [snippets]="demoSnippets"></code-box>
          </div>
      </div>
    </docs-wrapper>
  `
})
export class DocSwiper {
    public docContent = require('html-loader!markdown-loader!./swiper.component.md');
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/swiper.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/swiper.component.ts')
    };
}