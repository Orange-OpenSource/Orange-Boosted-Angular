// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/operators/map';
import 'rxjs/operators/mergeMap';

// Ng-bootstrap
import '@ng-bootstrap/ng-bootstrap';

import 'prismjs/themes/prism.css';

// Swiper
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper.js';
import 'swiper/dist/js/swiper';

// Boosted
import 'boosted/dist/css/orangeHelvetica.css';
import 'boosted/dist/css/orangeIcons.css';
import 'boosted/dist/css/boosted.css';

if ('production' === process.env.ENV) {
  // Production

} else {
  // Development

}
