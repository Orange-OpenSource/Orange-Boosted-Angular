webpackJsonp([1],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OCarouselContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper__ = __webpack_require__(508);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



var OCarouselContainerComponent =
/** @class */
function () {
  function OCarouselContainerComponent(elementRef) {
    this.elementRef = elementRef;
  }

  OCarouselContainerComponent.prototype.ngOnInit = function () {
    var _this = this;

    var nativeElement = this.elementRef.nativeElement;
    setTimeout(function () {
      _this.swiper = new __WEBPACK_IMPORTED_MODULE_1_swiper__["a" /* default */](nativeElement.children[0], _this.options);
    });
  };

  OCarouselContainerComponent.prototype.update = function () {
    var _this = this;

    setTimeout(function () {
      _this.swiper.update();
    });
  };

  OCarouselContainerComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]
  }, {
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'o-carousel-container',
      template: "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n    <div class=\"swiper-button-prev\"></div>\n    <div class=\"swiper-button-next\"></div>\n  </div>"
    }]
  }];
  /** @nocollapse */

  OCarouselContainerComponent.ctorParameters = function () {
    return [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
      decorators: [{
        type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"],
        args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]]
      }]
    }];
  };

  OCarouselContainerComponent.propDecorators = {
    pager: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    options: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }]
  };
  return OCarouselContainerComponent;
}();



/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


var ScrollTopComponent =
/** @class */
function () {
  function ScrollTopComponent() {
    this.showMe = false;
  }

  ScrollTopComponent.prototype.onWindowScroll = function () {
    if (document.documentElement.scrollTop > window.innerHeight) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  };

  ScrollTopComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'scroll-top',
      styles: ['a { display: inline;}'],
      template: "\n    <a href=\"javascript:void(0)\" class=\"o-scroll-up\" title=\"{{label}}\"\n    onclick=\"window.scrollTo(0, 0);\" *ngIf=\"showMe\">\n      <span class=\"o-scroll-up-text hidden-sm-down\">{{label}}</span>\n      <span class=\"o-scroll-up-icon\" aria-hidden=\"true\"></span>\n    </a>\n  "
    }]
  }];
  ScrollTopComponent.propDecorators = {
    label: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    onWindowScroll: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"],
      args: ['window:scroll', []]
    }]
  };
  return ScrollTopComponent;
}();



/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ONavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ONavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ONavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;

var ONavLink =
/** @class */
function () {
  function ONavLink() {
    this.isActive = false;
  }

  ONavLink.prototype.ngDoCheck = function () {
    this.isActive = this.link.nativeElement.classList.contains('active');
  };

  ONavLink.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'li[o-nav-link]',
      template: "\n    <a #link [routerLink]=\"route\" class=\"nav-link\" routerLinkActive=\"active\"\n     [attr.title]=\"title === 'undefined' ? null : title\"\n     [attr.aria-current]=\"isActive\"><ng-content></ng-content></a>\n  "
    }]
  }];
  ONavLink.propDecorators = {
    route: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"],
      args: ['class.nav-item']
    }, {
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    title: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    link: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"],
      args: ['link']
    }]
  };
  return ONavLink;
}();



var ONavMenu =
/** @class */
function () {
  function ONavMenu() {
    this.dropdownClass = 'nav-item dropdown';
  }

  ONavMenu.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'li[o-nav-menu]',
      styles: ["\n    button {\n      border: 0;\n      background-color: #000;\n    }\n\n    button:hover {\n      cursor: pointer;\n    }\n  "],
      template: "\n    <button class=\"nav-link\" ngbDropdownToggle [attr.title]=\"title === 'undefined' ? null : title\"\n    (click)=\"$event.stopPropagation();\">{{menuTitle}}</button>\n    <ng-content></ng-content>\n  "
    }]
  }];
  ONavMenu.propDecorators = {
    dropdownClass: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"],
      args: ['class']
    }],
    menuTitle: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    title: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }]
  };
  return ONavMenu;
}();



var ONavbarComponent =
/** @class */
function () {
  function ONavbarComponent() {
    this.pattern = TEST_PATTERN;
    this.isCollapsed = true;
  }

  ONavbarComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'o-navbar',
      styles: ["\n    .navbar-nav { width: 100%;}\n\n    >>> a:hover {\n      cursor: pointer;\n    }\n  "],
      template: "\n    <nav [class]=\"'navbar navbar-dark bg-dark ' +\n     (pattern.test(breakpoint) ? 'navbar-expand-'+breakpoint : 'navbar-toggleable-sm')\" role=\"navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"homeRoute\">\n                <img [attr.src]=\"brandPath\" [attr.alt]=\"brandLabel\" [attr.title]=\"brandLabel\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapsingNavbarHead\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse\" id=\"collapsingNavbarHead\" [ngbCollapse]=\"isCollapsed\">\n              <ul class=\"navbar-nav\">\n                <ng-content></ng-content>\n              </ul>\n            </div>\n        </div>\n    </nav>\n  "
    }]
  }];
  ONavbarComponent.propDecorators = {
    homeRoute: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    breakpoint: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    brandPath: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    brandLabel: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }]
  };
  return ONavbarComponent;
}();



/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OSwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-switch.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


var OSwitchComponent =
/** @class */
function () {
  function OSwitchComponent() {
    this.toggled = false;
    this.rounded = false;
    this.successColor = false;
    this.customWidth = 'auto';
    this.onLabel = 'on';
    this.offLabel = 'off';
  }

  OSwitchComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'o-switch',
      template: "\n      <input class=\"checkbox sr-only\" [class.success]=\"successColor\" [id]=\"inputId\" type=\"checkbox\" [name]=\"inputId\" [checked]=\"toggled\"/>\n      <label [for]=\"inputId\" class=\"toggle col-form-label\" [class.toggle-rounded]=\"rounded\" aria-hidden=\"true\"\n      [ngStyle]=\"{'width': customWidth}\">\n        <span class=\"on\" [class.svg-checkbox-tick]=\"onLabel === 'on'\" role=\"presentation\">\n          <span [class.sr-only]=\"onLabel === 'on'\">{{onLabel}}</span>\n        </span>\n        <span class=\"off\" [class.svg-delete]=\"offLabel === 'off'\" role=\"presentation\">\n          <span [class.sr-only]=\"offLabel === 'off'\">{{offLabel}}</span>\n        </span>\n      </label>\n  "
    }]
  }];
  OSwitchComponent.propDecorators = {
    inputId: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"],
      args: ['class.o-switch']
    }, {
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    toggled: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    rounded: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    successColor: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    customWidth: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    onLabel: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }],
    offLabel: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"]
    }]
  };
  return OSwitchComponent;
}();



/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: {
    hash: ''
  }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line



/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__o_carousel_container_component__ = __webpack_require__(130);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



var OCarouselComponent =
/** @class */
function () {
  function OCarouselComponent(elementRef, swiper) {
    this.elm = elementRef.nativeElement;
    this.swiper = swiper;
  }

  OCarouselComponent.prototype.ngAfterViewInit = function () {
    this.elm.classList.add('swiper-slide');
    this.swiper.update();
  };

  OCarouselComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"]
  }, {
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"],
    args: [{
      selector: 'o-carousel-slide',
      template: '<div><ng-content></ng-content></div>'
    }]
  }];
  /** @nocollapse */

  OCarouselComponent.ctorParameters = function () {
    return [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
      decorators: [{
        type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"],
        args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]]
      }]
    }, {
      type: __WEBPACK_IMPORTED_MODULE_1__o_carousel_container_component__["a" /* OCarouselContainerComponent */],
      decorators: [{
        type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"]
      }, {
        type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"],
        args: [__WEBPACK_IMPORTED_MODULE_1__o_carousel_container_component__["a" /* OCarouselContainerComponent */]]
      }]
    }];
  };

  return OCarouselComponent;
}();



/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


var ODropdownComponent =
/** @class */
function () {
  function ODropdownComponent(elRef) {
    this.elRef = elRef;
  }

  ODropdownComponent.prototype.ngAfterViewInit = function () {
    this.dropdownMenu = this.elRef.nativeElement.querySelectorAll('.dropdown-menu')[0];
  };

  ODropdownComponent.prototype.handleDropdownFocus = function (isOpenEvent) {
    var _this = this;

    if (isOpenEvent) {
      setTimeout(function () {
        _this.dropdownMenu.firstElementChild.focus();
      });
    }
  };

  ODropdownComponent.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"],
    args: [{
      selector: '[ngbDropdown]' // using same selector as ng-bootsrap NgbDropdown directive

    }]
  }];
  /** @nocollapse */

  ODropdownComponent.ctorParameters = function () {
    return [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]
    }];
  };

  ODropdownComponent.propDecorators = {
    handleDropdownFocus: [{
      type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"],
      args: ['openChange', ['$event']]
    }]
  };
  return ODropdownComponent;
}();



/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(504);
var core_1 = __webpack_require__(2);
var platform_browser_dynamic_1 = __webpack_require__(202);
var app_module_1 = __webpack_require__(506);
// depending on the env mode, enable prod mode or add debugging modules
if (true) {
    core_1.enableProdMode();
}
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (MODULE_REF) { if (false) {
        module["hot"]["accept"]();
        if (MODULE_REF.instance["hmrOnInit"]) {
            module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
        }
        if (MODULE_REF.instance["hmrOnStatus"]) {
            module["hot"]["apply"](function (status) { MODULE_REF.instance["hmrOnStatus"](status); });
        }
        if (MODULE_REF.instance["hmrOnCheck"]) {
            module["hot"]["check"](function (err, outdatedModules) { MODULE_REF.instance["hmrOnCheck"](err, outdatedModules); });
        }
        if (MODULE_REF.instance["hmrOnDecline"]) {
            module["hot"]["decline"](function (dependencies) { MODULE_REF.instance["hmrOnDecline"](dependencies); });
        }
        module["hot"]["dispose"](function (store) { MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store); MODULE_REF.destroy(); MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store); });
    } return MODULE_REF; });
}
exports.main = main;
if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(505);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(57)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-1!./styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--4-1!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ".navbar-nav-svg{width:1.4rem}.ng-banner{margin-bottom:3.75rem}.head h1{margin-top:3.75rem;font-size:3.755rem;letter-spacing:-1px}.head .lead{font-size:1rem;margin-top:1.25rem}.head .lead a{text-decoration:underline}.head svg{margin-top:2.5rem}.head img{height:14.75rem;margin-top:3.75rem}.version{margin-left:1.875rem}.only-in-ng{background-color:#eee}.only-in-ng .col-md-5{display:flex}.only-in-ng .inner{align-self:center}.only-in-ng h2{font-size:1.5rem}.only-in-ng img{width:100%;margin:3.755rem 0}.only-in-ng .o-square-list li:before{color:#000}h2{margin-top:1.25rem}.bd-sidebar{list-style:none}.bd-sidebar li{line-height:1.375}.bd-sidebar a{font-size:1rem;padding:.25rem .75rem}.doc-link{margin-left:.625rem;font-size:1.5rem}article{overflow:hidden;margin-bottom:1rem}#component_nav{border-right:1px solid #eee}.o-nav-local{border:0;flex-direction:column}.o-nav-local>.container{flex-direction:column;align-items:flex-start}.o-nav-local .nav-item,.o-nav-local .nav-item+.nav-item,.o-nav-local .nav-item:first-child{margin-left:0}.o-nav-local .nav .nav-link{font-weight:400;padding-top:.5rem;padding-left:0;padding-bottom:.5rem}.o-nav-local .nav .nav-link.active{color:#f16e00}.o-nav-local .nav-item:first-child{margin:24px 0}.doc-ext-link{margin-top:33px}.token.tag{font-size:.7875rem}.o-footer{margin-top:0}.o-footer .o-footer-top{padding:1.25rem 0}.o-footer .nav-link{display:inline-block}.o-footer .nav-link+.nav-link{margin-left:-.625rem}@media (max-width:767px){.head h1{font-size:2.5rem}.head .col-md-7{order:1}.head .col-md-5{text-align:center}.only-in-ng{padding-bottom:3.75rem}#component_nav{border:0}.o-nav-local{margin-top:12px;margin-bottom:0}.o-nav-local .nav{flex-direction:column;width:100%}.o-nav-local .nav-item+.nav-item,.o-nav-local .nav-item:first-child{margin-left:0}.o-nav-local .nav-link{font-weight:400;width:100%}}@media (min-width:768px){.o-nav-local{position:sticky;top:0;display:flex!important}.o-nav-local hr{display:none}.o-nav-local .nav-link{font-weight:400;padding:.5rem 0}.o-nav-local .nav{display:flex;flex-direction:column;flex-wrap:nowrap}}", ""]);

// exports


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(51);
var router_1 = __webpack_require__(129);
var forms_1 = __webpack_require__(128);
var common_1 = __webpack_require__(43);
var ng_bootstrap_1 = __webpack_require__(91);
var dist_1 = __webpack_require__(507);
var app_component_1 = __webpack_require__(510);
var home_component_1 = __webpack_require__(512);
var start_component_1 = __webpack_require__(514);
var docs_component_1 = __webpack_require__(516);
var boostwatch_component_1 = __webpack_require__(518);
var accordion_component_1 = __webpack_require__(520);
var modal_component_1 = __webpack_require__(522);
var tabs_component_1 = __webpack_require__(524);
var pagination_component_1 = __webpack_require__(526);
var tooltip_component_1 = __webpack_require__(528);
var popover_component_1 = __webpack_require__(530);
var alert_component_1 = __webpack_require__(532);
var carousel_component_1 = __webpack_require__(534);
var collapse_component_1 = __webpack_require__(536);
var progress_bar_component_1 = __webpack_require__(538);
var dropdown_component_1 = __webpack_require__(540);
var o_switch_component_1 = __webpack_require__(542);
var o_toggle_component_1 = __webpack_require__(544);
var swiper_component_1 = __webpack_require__(546);
var o_navbar_component_1 = __webpack_require__(548);
var accordion_component_2 = __webpack_require__(550);
var modal_component_2 = __webpack_require__(553);
var dropdown_component_2 = __webpack_require__(556);
var tabs_component_2 = __webpack_require__(559);
var pagination_component_2 = __webpack_require__(562);
var tooltip_component_2 = __webpack_require__(565);
var popover_component_2 = __webpack_require__(568);
var alert_component_2 = __webpack_require__(572);
var carousel_component_2 = __webpack_require__(575);
var swiper_component_2 = __webpack_require__(578);
var collapse_component_2 = __webpack_require__(582);
var progress_bar_component_2 = __webpack_require__(585);
var o_navbar_component_2 = __webpack_require__(588);
var o_scroll_top_component_1 = __webpack_require__(592);
var o_switch_component_2 = __webpack_require__(595);
var o_toggle_component_2 = __webpack_require__(599);
var code_box_component_1 = __webpack_require__(603);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'home',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: 'start',
                        component: start_component_1.StartComponent
                    },
                    {
                        path: 'documentation',
                        redirectTo: 'documentation/collapse',
                        pathMatch: 'full'
                    },
                    {
                        path: 'documentation/collapse',
                        component: collapse_component_2.DocCollapse
                    },
                    {
                        path: 'documentation/accordion',
                        component: accordion_component_2.DocAccordion
                    },
                    {
                        path: 'documentation/modal',
                        component: modal_component_2.DocModal
                    },
                    {
                        path: 'documentation/dropdown',
                        component: dropdown_component_2.DocDropdown
                    },
                    {
                        path: 'documentation/tabs',
                        component: tabs_component_2.DocTabs
                    },
                    {
                        path: 'documentation/pagination',
                        component: pagination_component_2.DocPagination
                    },
                    {
                        path: 'documentation/tooltip',
                        component: tooltip_component_2.DocTooltip
                    },
                    {
                        path: 'documentation/popover',
                        component: popover_component_2.DocPopover
                    },
                    {
                        path: 'documentation/alert',
                        component: alert_component_2.DocAlert
                    },
                    {
                        path: 'documentation/carousel',
                        component: carousel_component_2.DocCarousel
                    },
                    {
                        path: 'documentation/swiper',
                        component: swiper_component_2.DocSwiper
                    },
                    {
                        path: 'documentation/progress',
                        component: progress_bar_component_2.DocProgressBar
                    },
                    {
                        path: 'documentation/o-navbar',
                        component: o_navbar_component_2.DocONavbar
                    },
                    {
                        path: 'documentation/o-scroll-top',
                        component: o_scroll_top_component_1.DocOScrollTop
                    },
                    {
                        path: 'documentation/o-switch',
                        component: o_switch_component_2.DocOSwitch
                    },
                    {
                        path: 'documentation/o-toggle',
                        component: o_toggle_component_2.DocOToggle
                    },
                    {
                        path: 'boostwatch',
                        component: boostwatch_component_1.BoostwatchComponent
                    },
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    }
                ]),
                ng_bootstrap_1.NgbModule.forRoot(),
                dist_1.NgBoostedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                start_component_1.StartComponent,
                docs_component_1.DocsComponent,
                boostwatch_component_1.BoostwatchComponent,
                accordion_component_1.DemoAccordion,
                modal_component_1.DemoModal,
                tabs_component_1.DemoTabs,
                pagination_component_1.DemoPagination,
                tooltip_component_1.DemoTooltip,
                popover_component_1.DemoPopover,
                alert_component_1.DemoAlert,
                carousel_component_1.DemoCarousel,
                swiper_component_1.DemoSwiper,
                collapse_component_1.DemoCollapse,
                progress_bar_component_1.DemoProgressBar,
                dropdown_component_1.DemoDropdown,
                o_switch_component_1.DemoOSwitch,
                o_toggle_component_1.DemoOToggle,
                o_navbar_component_1.DemoONavbar,
                accordion_component_2.DocAccordion,
                modal_component_2.DocModal,
                dropdown_component_2.DocDropdown,
                tabs_component_2.DocTabs,
                pagination_component_2.DocPagination,
                alert_component_2.DocAlert,
                tooltip_component_2.DocTooltip,
                popover_component_2.DocPopover,
                carousel_component_2.DocCarousel,
                swiper_component_2.DocSwiper,
                collapse_component_2.DocCollapse,
                progress_bar_component_2.DocProgressBar,
                o_navbar_component_2.DocONavbar,
                o_scroll_top_component_1.DocOScrollTop,
                o_switch_component_2.DocOSwitch,
                o_toggle_component_2.DocOToggle,
                code_box_component_1.CodeBox
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBoostedModule", function() { return NgBoostedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scroll_top_scroll_top_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__o_switch_o_switch_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__o_carousel_o_carousel_container_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__o_carousel_o_carousel_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__o_dropdown_o_dropdown_component__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__scroll_top_scroll_top_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ONavbarComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ONavLink", function() { return __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OSwitchComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__o_switch_o_switch_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OCarouselContainerComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__o_carousel_o_carousel_container_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OCarouselComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__o_carousel_o_carousel_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ODropdownComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__o_dropdown_o_dropdown_component__["a"]; });
/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - index.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
















var NG_BOOSTED_DECLARATIONS = [__WEBPACK_IMPORTED_MODULE_4__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */], __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__["c" /* ONavbarComponent */], __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__["a" /* ONavLink */], __WEBPACK_IMPORTED_MODULE_5__o_navbar_o_navbar_component__["b" /* ONavMenu */], __WEBPACK_IMPORTED_MODULE_6__o_switch_o_switch_component__["a" /* OSwitchComponent */], __WEBPACK_IMPORTED_MODULE_7__o_carousel_o_carousel_container_component__["a" /* OCarouselContainerComponent */], __WEBPACK_IMPORTED_MODULE_8__o_carousel_o_carousel_component__["a" /* OCarouselComponent */], __WEBPACK_IMPORTED_MODULE_9__o_dropdown_o_dropdown_component__["a" /* ODropdownComponent */]];

var NgBoostedModule =
/** @class */
function () {
  function NgBoostedModule() {}

  NgBoostedModule.decorators = [{
    type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"],
    args: [{
      imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["NgbModule"]],
      declarations: NG_BOOSTED_DECLARATIONS,
      exports: NG_BOOSTED_DECLARATIONS
    }]
  }];
  return NgBoostedModule;
}();



/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ssr_window__ = __webpack_require__(206);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 4.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2018
 */


var Methods = {
  addClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["c" /* addClass */],
  removeClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["E" /* removeClass */],
  hasClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["m" /* hasClass */],
  toggleClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["H" /* toggleClass */],
  attr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["e" /* attr */],
  removeAttr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["D" /* removeAttr */],
  data: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["i" /* data */],
  transform: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["I" /* transform */],
  transition: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["J" /* transition */],
  on: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["u" /* on */],
  off: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["s" /* off */],
  trigger: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["L" /* trigger */],
  transitionEnd: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["K" /* transitionEnd */],
  outerWidth: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["w" /* outerWidth */],
  outerHeight: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["v" /* outerHeight */],
  offset: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["t" /* offset */],
  css: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["h" /* css */],
  each: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["j" /* each */],
  html: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["n" /* html */],
  text: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["G" /* text */],
  is: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["p" /* is */],
  index: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["o" /* index */],
  eq: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["k" /* eq */],
  append: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["d" /* append */],
  prepend: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["z" /* prepend */],
  next: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["q" /* next */],
  nextAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["r" /* nextAll */],
  prev: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["A" /* prev */],
  prevAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["B" /* prevAll */],
  parent: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["x" /* parent */],
  parents: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["y" /* parents */],
  closest: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["g" /* closest */],
  find: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["l" /* find */],
  children: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["f" /* children */],
  remove: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["C" /* remove */],
  add: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["b" /* add */],
  styles: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["F" /* styles */]
};
Object.keys(Methods).forEach(function (methodName) {
  __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */].fn[methodName] = Methods[methodName];
});
var Utils = {
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(callback, delay);
  },
  now: function now() {
    return Date.now();
  },
  getTranslate: function getTranslate(el) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(el, null);

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.href;
    var i;
    var params;
    var param;
    var length;

    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        return paramsPart !== '';
      });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }

    return query;
  },
  isObject: function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }
};

var Support = function Support() {
  var testDiv = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
  return {
    touch: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.touch === true || function checkTouch() {
      return !!('ontouchstart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */] || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */] instanceof __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch);
    }(),
    pointerEvents: !!(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.pointerEnabled || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].PointerEvent),
    prefixedPointerEvents: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.msPointerEnabled,
    transition: function checkTransition() {
      var style = testDiv.style;
      return 'transition' in style || 'webkitTransition' in style || 'MozTransition' in style;
    }(),
    transforms3d: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.csstransforms3d === true || function checkTransforms3d() {
      var style = testDiv.style;
      return 'webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style;
    }(),
    flexbox: function checkFlexbox() {
      var style = testDiv.style;
      var styles$$1 = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

      for (var i = 0; i < styles$$1.length; i += 1) {
        if (styles$$1[i] in style) return true;
      }

      return false;
    }(),
    observer: function checkObserver() {
      return 'MutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */] || 'WebkitMutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */];
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */];
    }()
  };
}();

var SwiperClass =
/*#__PURE__*/
function () {
  function SwiperClass() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SwiperClass);

    var self = this;
    self.params = params; // Events

    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  _createClass(SwiperClass, [{
    key: "on",
    value: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    }
  }, {
    key: "once",
    value: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
        self.off(events, onceHandler);
      }

      return self.on(events, onceHandler, priority);
    }
  }, {
    key: "off",
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index$$1) {
            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index$$1, 1);
            }
          });
        }
      });
      return self;
    }
  }, {
    key: "emit",
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data$$1;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data$$1 = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data$$1 = args[0].data;
        context = args[0].context || self;
      }

      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data$$1);
          });
        }
      });
      return self;
    }
  }, {
    key: "useModulesParams",
    value: function useModulesParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    }
  }, {
    key: "useModules",
    value: function useModules() {
      var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];

            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        } // Add event listeners


        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  }], [{
    key: "installModule",
    value: function installModule(module) {
      var Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      var name = module.name || "".concat(Object.keys(Class.prototype.modules).length, "_").concat(Utils.now());
      Class.prototype.modules[name] = module; // Prototype

      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      } // Class


      if (module.static) {
        Object.keys(module.static).forEach(function (key) {
          Class[key] = module.static[key];
        });
      } // Callback


      if (module.install) {
        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        module.install.apply(Class, params);
      }

      return Class;
    }
  }, {
    key: "use",
    value: function use(module) {
      var Class = this;

      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Class.installModule(m);
        });
        return Class;
      }

      for (var _len4 = arguments.length, params = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }

      return Class.installModule.apply(Class, [module].concat(params));
    }
  }, {
    key: "components",
    set: function set(components) {
      var Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  }]);

  return SwiperClass;
}();

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
  Utils.extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index$$1 = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = slidesPerRow - (params.slidesPerColumn * slidesPerRow - slidesLength);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;

    var _slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }

        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;

        _slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      _slide.css("margin-".concat(swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && "".concat(params.spaceBetween, "px")).attr('data-swiper-column', column).attr('data-swiper-row', row);
    }

    if (_slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(_slide[0], null);
      var currentTransform = _slide[0].style.transform;
      var currentWebKitTransform = _slide[0].style.webkitTransform;

      if (currentTransform) {
        _slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          slideSize = _slide[0].getBoundingClientRect().width + parseFloat(slideStyles.getPropertyValue('margin-left')) + parseFloat(slideStyles.getPropertyValue('margin-right'));
        } else {
          slideSize = _slide[0].getBoundingClientRect().height + parseFloat(slideStyles.getPropertyValue('margin-top')) + parseFloat(slideStyles.getPropertyValue('margin-bottom'));
        }
      }

      if (currentTransform) {
        _slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = "".concat(slideSize, "px");
        } else {
          slides[i].style.height = "".concat(slideSize, "px");
        }
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index$$1 += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({
        marginLeft: "".concat(spaceBetween, "px")
      });else slides.css({
        marginRight: "".concat(spaceBetween, "px")
      });
    } else slides.css({
      marginBottom: "".concat(spaceBetween, "px")
    });
  }

  if (params.centerInsufficientSlides) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      var index$$1 = swiper.activeIndex + i;
      if (index$$1 > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index$$1)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
}

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var _slide2 = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility) {
      var slideBefore = -(offsetCenter - _slide2.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size || slideAfter > 0 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(_slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    _slide2.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.visibleSlides);
}

function updateProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Utils.extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Utils.extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  swiper.emit('slideChange');
}

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).closest(".".concat(params.slideClass))[0];
  var slideFound = false;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getTranslate() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));else $wrapperEl.transform("translate(".concat(x, "px, ").concat(y, "px)"));
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

var translate = {
  getTranslate: getTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate
};

function setTransition(duration, byController) {
  var swiper = this;
  swiper.$wrapperEl.transition(duration);
  swiper.emit('setTransition', duration, byController);
}

function transitionStart() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd$1() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
  swiper.animating = false;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition$1 = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd$1
};

function slideTo() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var slideIndex = index$$1;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd$$1(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var newIndex = index$$1;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideNext() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slidePrev() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var normalizedSlidesGrid = slidesGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideReset() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideToClosest() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var index$$1 = swiper.activeIndex;
  var snapIndex = Math.floor(index$$1 / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    var _translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (_translate - currentSnap > (nextSnap - currentSnap) / 2) {
      index$$1 = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index$$1, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
      Utils.nextTick(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  var slides = $wrapperEl.children(".".concat(params.slideClass));

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children(".".concat(params.slideClass));
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (index$$1, el) {
    var slide = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](el);
    if (index$$1 < swiper.loopedSlides) appendSlides.push(el);
    if (index$$1 < slides.length && index$$1 >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index$$1);
  });

  for (var _i3 = 0; _i3 < appendSlides.length; _i3 += 1) {
    $wrapperEl.append(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](appendSlides[_i3].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i4 = prependSlides.length - 1; _i4 >= 0; _i4 -= 1) {
    $wrapperEl.prepend(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](prependSlides[_i4].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  var swiper = this;
  var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2 || activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(moving) {
  var swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  var swiper = this;
  if (Support.touch || swiper.params.watchOverflow && swiper.isLocked) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index$$1, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var baseLength = swiper.slides.length;

  if (index$$1 <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index$$1 >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index$$1; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var _i5 = 0; _i5 < slides.length; _i5 += 1) {
      if (slides[_i5]) $wrapperEl.append(slides[_i5]);
    }

    newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i6 = 0; _i6 < slidesBuffer.length; _i6 += 1) {
    $wrapperEl.append(slidesBuffer[_i6]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

var Device = function Device() {
  var ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent;
  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap,
    phonegap: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap
  };
  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/); // Windows

  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // iOS


  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }

  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }

  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  } // iOS 8+ changed UA


  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  } // Desktop


  device.desktop = !(device.os || device.android || device.webView); // Webview

  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i); // Minimal UI

  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  } // Pixel Ratio


  device.pixelRatio = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].devicePixelRatio || 1; // Export object

  return device;
}();

function onTouchStart(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  data$$1.isTouchEvent = e.type === 'touchstart';
  if (!data$$1.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data$$1.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data$$1.isTouched && data$$1.isMoved) return;

  if (params.noSwiping && __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass))[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].screen.width - edgeSwipeThreshold)) {
    return;
  }

  Utils.extend(data$$1, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data$$1.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data$$1.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if (__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).is(data$$1.formElements)) preventDefault = false;

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement).is(data$$1.formElements) && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement !== e.target) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.blur();
    }

    if (preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data$$1.isTouched) {
    if (data$$1.startMoving && data$$1.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data$$1.isTouchEvent && e.type === 'mousemove') return;
  var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data$$1.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data$$1.touchStartTime = Utils.now();
    }

    return;
  }

  if (data$$1.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data$$1.isTouched = false;
        data$$1.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data$$1.isTouchEvent && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement) {
    if (e.target === __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).is(data$$1.formElements)) {
      data$$1.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data$$1.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data$$1.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data$$1.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data$$1.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data$$1.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data$$1.startMoving = true;
    }
  }

  if (data$$1.isScrolling) {
    data$$1.isTouched = false;
    return;
  }

  if (!data$$1.startMoving) {
    return;
  }

  swiper.allowClick = false;
  e.preventDefault();

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data$$1.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data$$1.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data$$1.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data$$1.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data$$1.currentTranslate = diff + data$$1.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data$$1.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data$$1.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data$$1.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data$$1.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data$$1.currentTranslate < data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data$$1.currentTranslate > data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data$$1.allowThresholdMove) {
      if (!data$$1.allowThresholdMove) {
        data$$1.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data$$1.currentTranslate = data$$1.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data$$1.currentTranslate = data$$1.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data$$1.velocities.length === 0) {
      data$$1.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data$$1.touchStartTime
      });
    }

    data$$1.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now()
    });
  } // Update progress


  swiper.updateProgress(data$$1.currentTranslate); // Update translate

  swiper.setTranslate(data$$1.currentTranslate);
}

function onTouchEnd(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data$$1.allowTouchCallbacks = false;

  if (!data$$1.isTouched) {
    if (data$$1.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data$$1.isMoved && data$$1.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Utils.now();
  var timeDiff = touchEndTime - data$$1.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime > 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      data$$1.clickTimeout = Utils.nextTick(function () {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime < 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data$$1.lastClickTime = Utils.now();
  Utils.nextTick(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data$$1.isTouched || !data$$1.isMoved || !swiper.swipeDirection || touches.diff === 0 || data$$1.currentTranslate === data$$1.startTranslate) {
    data$$1.isTouched = false;
    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  }

  data$$1.isTouched = false;
  data$$1.isMoved = false;
  data$$1.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data$$1.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data$$1.velocities.length > 1) {
        var lastMoveEvent = data$$1.velocities.pop();
        var velocityEvent = data$$1.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data$$1.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data$$1.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }

    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
          passive: false,
          capture: capture
        } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
}

function detachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Set breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
    var needsReLoop = params.loop && breakPointsParams.slidesPerView !== params.slidesPerView;
    Utils.extend(swiper.params, breakPointsParams);
    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakPointsParams);
  }
}

function getBreakpoint(breakpoints) {
  var swiper = this; // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = [];
  Object.keys(breakpoints).forEach(function (point) {
    points.push(point);
  });
  points.sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var point = points[i];

    if (swiper.params.breakpointsInverse) {
      if (point <= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
};

var Browser = function Browser() {
  function isSafari() {
    var ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isIE: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Trident/g) || !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/MSIE/g),
    isEdge: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent)
  };
}();

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el;
  var suffixes = [];
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }

  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }

  if (params.autoHeight) {
    suffixes.push('autoheight');
  }

  if (rtl) {
    suffixes.push('rtl');
  }

  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }

  if (Device.android) {
    suffixes.push('android');
  }

  if (Device.ios) {
    suffixes.push('ios');
  } // WP8 Touch Events Fix


  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push("wp8-".concat(params.direction));
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
}

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var image;

  function onReady() {
    if (callback) callback();
  }

  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var swiper = this;
  var wasLocked = swiper.isLocked;
  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
};
var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,
  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true
};
var prototypes = {
  update: update,
  translate: translate,
  transition: transition$1,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
};
var extendedDefaults = {};

var Swiper =
/*#__PURE__*/
function (_SwiperClass) {
  _inherits(Swiper, _SwiperClass);

  function Swiper() {
    var _this;

    _classCallCheck(this, Swiper);

    var el;
    var params;

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swiper).call(this, params));
    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    }); // Swiper Instance

    var swiper = _assertThisInitialized(_assertThisInitialized(_this));

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (_typeof(moduleParams) !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams); // Extend defaults with passed params

    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params); // Save Dom lib

    swiper.$ = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]; // Find el

    var $el = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.params.el);
    el = $el[0];

    if (!el) {
      return _possibleConstructorReturn(_this, undefined);
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (index$$1, containerEl) {
        var newParams = Utils.extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return _possibleConstructorReturn(_this, swipers);
    }

    el.swiper = swiper;
    $el.data('swiper', swiper); // Find Wrapper

    var $wrapperEl = $el.children(".".concat(swiper.params.wrapperClass)); // Extend Swiper

    Utils.extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules(); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return _possibleConstructorReturn(_this, swiper);
  }

  _createClass(Swiper, [{
    key: "slidesPerViewDynamic",
    value: function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i7 = activeIndex - 1; _i7 >= 0; _i7 -= 1) {
          if (slides[_i7] && !breakLoop) {
            slideSize += slides[_i7].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i8 = activeIndex + 1; _i8 < slides.length; _i8 += 1) {
          if (slidesGrid[_i8] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    }
  }, {
    key: "update",
    value: function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = this;
      if (swiper.initialized) return;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    }
  }], [{
    key: "extendDefaults",
    value: function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    }
  }, {
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }, {
    key: "Class",
    get: function get() {
      return SwiperClass;
    }
  }, {
    key: "$",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */];
    }
  }]);

  return Swiper;
}(SwiperClass);

var Device$1 = {
  name: 'device',
  proto: {
    device: Device
  },
  static: {
    device: Device
  }
};
var Support$1 = {
  name: 'support',
  proto: {
    support: Support
  },
  static: {
    support: Support
  }
};
var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser
  },
  static: {
    browser: Browser
  }
};
var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this; // Emit resize

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy() {
      var swiper = this;
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('resize', swiper.resize.resizeHandler);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
var Observer = {
  func: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].MutationObserver || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebkitMutationObserver,
  attach: function attach(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var swiper = this;
    var ObserverFunc = Observer.func;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame) {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame(observerUpdate);
      } else {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!Support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: false
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: []
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.observer.init();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.destroy();
    }
  }
};
var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset$$1 = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Utils.extend(swiper.virtual, {
      from: from,
      to: to,
      offset: offset$$1,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset$$1 !== previousOffset) {
        swiper.slides.css(offsetProp, "".concat(offset$$1, "px"));
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset$$1,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });
      onRendered();
      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
        }
      }
    }

    for (var _i9 = 0; _i9 < slides.length; _i9 += 1) {
      if (_i9 >= from && _i9 <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i9);
        } else {
          if (_i9 > previousTo) appendIndexes.push(_i9);
          if (_i9 < previousFrom) prependIndexes.push(_i9);
        }
      }
    }

    appendIndexes.forEach(function (index$$1) {
      swiper.$wrapperEl.append(renderSlide(slides[index$$1], index$$1));
    });
    prependIndexes.sort(function (a, b) {
      return a < b;
    }).forEach(function (index$$1) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index$$1], index$$1));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset$$1, "px"));
    onRendered();
  },
  renderSlide: function renderSlide(slide, index$$1) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index$$1]) {
      return swiper.virtual.cache[index$$1];
    }

    var $slideEl = params.renderSlide ? __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](params.renderSlide.call(swiper, slide, index$$1)) : __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index$$1, "\">").concat(slide, "</div>"));
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index$$1);
    if (params.cache) swiper.virtual.cache[index$$1] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.push(slide);
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.unshift(slide);

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        newCache[cachedIndex + 1] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideNext(0);
  }
};
var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {}
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
      swiper.virtual.update();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName && (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'input' || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
        return undefined;
      }

      var windowWidth = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth;
      var windowHeight = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 39 && !rtl || kc === 37 && rtl) swiper.slideNext();
      if (kc === 37 && !rtl || kc === 39 && rtl) swiper.slidePrev();
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 40) swiper.slideNext();
      if (kc === 38) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    if (swiper.keyboard.enabled) return;
    __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    if (!swiper.keyboard.enabled) return;
    __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};

function isEventSupported() {
  var eventName = 'onwheel';
  var isSupported = eventName in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */];

  if (!isSupported) {
    var element = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Utils.now(),
  event: function getEvent() {
    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }(),
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data$$1 = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY)) delta = data$$1.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data$$1.pixelY) > Math.abs(data$$1.pixelX)) delta = data$$1.pixelY;else return true;
    } else {
      delta = Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY) ? -data$$1.pixelX * rtlFactor : -data$$1.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }

      swiper.mousewheel.lastScrollTime = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Date().getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }

      var position = swiper.getTranslate() + delta * params.sensitivity;
      var wasBeginning = swiper.isBeginning;
      var wasEnd = swiper.isEnd;
      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(function () {
          swiper.slideToClosest();
        }, 300);
      } // Emit event


      swiper.emit('scroll', e); // Stop autoplay

      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  enable: function enable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.params.mousewheel.eventsTarged);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.params.mousewheel.eventsTarged);
    }

    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now()
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', function (e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      });
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', function (e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      });
    }

    Utils.extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click');
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click');
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.navigation.destroy();
    },
    click: function click(e) {
      var swiper = this;
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).is($prevEl) && !__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).is($nextEl)) {
        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  }
};
var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(swiper.pagination.bulletSize * (params.dynamicMainBullets + 4), "px"));

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass("".concat(params.bulletActiveClass, " ").concat(params.bulletActiveClass, "-next ").concat(params.bulletActiveClass, "-next-next ").concat(params.bulletActiveClass, "-prev ").concat(params.bulletActiveClass, "-prev-prev ").concat(params.bulletActiveClass, "-main"));

      if ($el.length > 1) {
        bullets.each(function (index$$1, bullet) {
          var $bullet = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
          }

          $firstDisplayedBullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
          $lastDisplayedBullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
      }
    }

    if (params.type === 'fraction') {
      $el.find(".".concat(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(".".concat(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(".".concat(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(".".concat(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', ".".concat(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index$$1 = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index$$1 += swiper.loopedSlides;
        swiper.slideTo(index$$1);
      });
    }

    Utils.extend(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', ".".concat(params.bulletClass));
    }
  }
};
var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.pagination.destroy();
    },
    click: function click(e) {
      var swiper = this;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).hasClass(swiper.params.pagination.bulletClass)) {
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
      } else {
        $dragEl.transform("translateX(".concat(newPos, "px)"));
      }

      $dragEl[0].style.width = "".concat(newSize, "px");
    } else {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
      } else {
        $dragEl.transform("translateY(".concat(newPos, "px)"));
      }

      $dragEl[0].style.height = "".concat(newSize, "px");
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = "".concat(dragSize, "px");
    } else {
      $dragEl[0].style.height = "".concat(dragSize, "px");
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbarHide) {
      $el[0].style.opacity = 0;
    }

    Utils.extend(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize;
    var pointerPosition;

    if (swiper.isHorizontal()) {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX;
    } else {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
    }

    var positionRatio;
    positionRatio = (pointerPosition - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - dragSize / 2) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEvents = swiper.touchEvents,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      if (Support.touch) {
        target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
      }
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEvents = swiper.touchEvents,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      if (Support.touch) {
        target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
      }
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));

    if ($dragEl.length === 0) {
      $dragEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize: function resize() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.destroy();
    }
  }
};
var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
    } else {
      x = "".concat(x * progress * rtlFactor, "px");
    }

    if (y.indexOf('%') >= 0) {
      y = "".concat(parseInt(y, 10) * progress, "%");
    } else {
      y = "".concat(y * progress, "px");
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideIndex, slideEl) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, parallaxEl) {
      var $parallaxEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!Support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (Support.gestures) {
      swiper.zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    e.preventDefault();
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
      zoom.scale = 1;
      zoom.currentScale = 1;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  }
};
var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    var zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      }
    };
    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom: zoom
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.zoom.disable();
    },
    touchStart: function touchStart(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(e) {
      var swiper = this;

      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
var Lazy = {
  loadInSlide: function loadInSlide(index$$1) {
    var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index$$1 === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")) : swiper.slides.eq(index$$1);
    var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageIndex, imageEl) {
      var $imageEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"".concat(background, "\")"));
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(".".concat(params.preloaderClass)).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index$$1) {
      if (isVirtual) {
        if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")).length) {
          return true;
        }
      } else if (slides[index$$1]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slideEl).attr('data-swiper-slide-index');
      }

      return __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (elIndex, slideEl) {
        var index$$1 = isVirtual ? __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slideEl).attr('data-swiper-slide-index') : __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](slideEl).index();
        swiper.lazy.loadInSlide(index$$1);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i10 = activeIndex + slidesPerView; _i10 < maxIndex; _i10 += 1) {
          if (slideExist(_i10)) swiper.lazy.loadInSlide(_i10);
        } // Prev Slides


        for (var _i11 = minIndex; _i11 < activeIndex; _i11 += 1) {
          if (slideExist(_i11)) swiper.lazy.loadInSlide(_i11);
        }
      } else {
        var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;

      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll() {
      var swiper = this;

      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    }
  }
};
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Utils.nextTick(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper)
      }
    });
  },
  on: {
    update: function update() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(translate, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
var a11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(".".concat(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop) return;
    var _swiper$navigation4 = swiper.navigation,
        $nextEl = _swiper$navigation4.$nextEl,
        $prevEl = _swiper$navigation4.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
        var $bulletEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init: function init() {
    var swiper = this;
    swiper.$el.append(swiper.a11y.liveRegion); // Navigation

    var params = swiper.params.a11y;
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  }
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
      }
    });
    Object.keys(a11y).forEach(function (methodName) {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
var History = {
  init: function init() {
    var swiper = this;
    if (!swiper.params.history) return;

    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history || !__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues() {
    var pathArray = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index$$1) {
    var swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var slide = swiper.slides.eq(index$$1);
    var value = History.slugify(slide.attr('data-history'));

    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.includes(key)) {
      value = "".concat(key, "/").concat(value);
    }

    var currentState = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState({
        value: value
      }, null, value);
    } else {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text$$1) {
    return text$$1.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide3 = swiper.slides.eq(i);

        var slideHistory = History.slugify(_slide3.attr('data-history'));

        if (slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide3.index();

          swiper.slideTo(index$$1, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var newHash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || '');
    } else {
      var _slide4 = swiper.slides.eq(swiper.activeIndex);

      var hash = _slide4.attr('data-hash') || _slide4.attr('data-history');

      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash = hash || '';
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide5 = swiper.slides.eq(i);

        var slideHash = _slide5.attr('data-hash') || _slide5.attr('data-history');

        if (slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide5.index();

          swiper.slideTo(index$$1, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (swiper.params.hashNavigation.watchState) {
      __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};
/* eslint no-underscore-dangle: "off" */

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    swiper.autoplay.timeout = Utils.nextTick(function () {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  }
};
var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd: function onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;

          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(speed, internal) {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove() {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    }
  }
};
var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var tx = -offset$$1;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: "".concat(swiperWidth, "px")
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform$$1);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset$$1 = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
      }
    }

    var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset$$1;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform$$1 = swiper.translate;
    var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
      var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */]("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    } // Set correct perspective for IE10


    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      var ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = "".concat(center, "px 50%");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */](thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }

      if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
      }
    } else {
      for (var _i12 = 0; _i12 < thumbsToActivate; _i12 += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i12).addClass(thumbActiveClass);
      }
    }
  }
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
}; // Swiper Class

var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);
/* harmony default export */ __webpack_exports__["a"] = (Swiper);

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return removeAttr; });
/* unused harmony export prop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return data; });
/* unused harmony export removeData */
/* unused harmony export dataset */
/* unused harmony export val */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return off; });
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return transitionEnd; });
/* unused harmony export animationEnd */
/* unused harmony export width */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return outerWidth; });
/* unused harmony export height */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return offset; });
/* unused harmony export hide */
/* unused harmony export show */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return css; });
/* unused harmony export toArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return each; });
/* unused harmony export forEach */
/* unused harmony export filter */
/* unused harmony export map */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return is; });
/* unused harmony export indexOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return append; });
/* unused harmony export appendTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return prepend; });
/* unused harmony export prependTo */
/* unused harmony export insertBefore */
/* unused harmony export insertAfter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return prevAll; });
/* unused harmony export siblings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return remove; });
/* unused harmony export detach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return add; });
/* unused harmony export empty */
/* unused harmony export scrollTo */
/* unused harmony export scrollTop */
/* unused harmony export scrollLeft */
/* unused harmony export animate */
/* unused harmony export stop */
/* unused harmony export click */
/* unused harmony export blur */
/* unused harmony export focus */
/* unused harmony export focusin */
/* unused harmony export focusout */
/* unused harmony export keyup */
/* unused harmony export keydown */
/* unused harmony export keypress */
/* unused harmony export submit */
/* unused harmony export change */
/* unused harmony export mousedown */
/* unused harmony export mousemove */
/* unused harmony export mouseup */
/* unused harmony export mouseenter */
/* unused harmony export mouseleave */
/* unused harmony export mouseout */
/* unused harmony export mouseover */
/* unused harmony export touchstart */
/* unused harmony export touchend */
/* unused harmony export touchmove */
/* unused harmony export resize */
/* unused harmony export scroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ssr_window__ = __webpack_require__(206);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dom7 2.1.2
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2018, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: September 13, 2018
 */


var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this; // Create array-like object

  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }

  self.length = arr.length; // Return collection with methods

  return this;
};

function $(selector, context) {
  var arr = [];
  var i = 0;

  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }

  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els;
      var tempParent;

      var _html = selector.trim();

      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement(toCreate);
        tempParent.innerHTML = _html;

        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [__WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]).querySelectorAll(selector.trim());
        }

        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }

  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame(callback);else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame(callback);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].setTimeout(callback, 1000 / 60);
}

function cancelAnimationFrame(id) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame(id);else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame(id);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].clearTimeout(id);
} // Classes and attributes


function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }

  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }

  return this;
}

function removeClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }

  return this;
}

function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}

function toggleClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }

  return this;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
} // eslint-disable-next-line


function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0]; // Get value

    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute("data-".concat(key));

      if (dataKey) {
        return dataKey;
      }

      return undefined;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  } // eslint-disable-next-line


  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  var dom = this;

  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];

        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }

        return values;
      }

      return dom[0].value;
    }

    return undefined;
  }

  for (var _i = 0; _i < dom.length; _i += 1) {
    var el = dom[_i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return dom;
} // Transforms
// eslint-disable-next-line


function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }

  return this;
}

function transition(duration) {
  if (typeof duration !== 'string') {
    duration = "".concat(duration, "ms"); // eslint-disable-line
  }

  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }

  return this;
} // Events


function on() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function proxy() {
    for (var _len4 = arguments.length, eventArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, proxy, capture);
  }

  return dom.on(eventName, targetSelector, proxy, capture);
}

function trigger() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = void 0;

      try {
        evt = new __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      } // eslint-disable-next-line


      el.dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }

  return this;
}

function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
}

function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
} // Sizing/Styles


function width() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;

    var _scrollTop = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollY : el.scrollTop;

    var _scrollLeft = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollX : el.scrollLeft;

    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
} // Dom manipulation


function toArray() {
  var arr = [];

  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }

  return arr;
} // Iterate over the collection passing elements to `callback`


function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function filter(callback) {
  var matchedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }

  return new Dom7(matchedItems);
}

function map(callback) {
  var modifiedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }

  return new Dom7(modifiedItems);
} // eslint-disable-next-line


function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
} // eslint-disable-next-line


function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }

    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  } else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */];else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }

  return -1;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
} // eslint-disable-next-line


function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex;

  if (index > length - 1) {
    return new Dom7([]);
  }

  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }

  return new Dom7([this[index]]);
}

function append() {
  var newChild;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
} // eslint-disable-next-line


function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }

      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return new Dom7(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }

      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return new Dom7(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(unique(parents));
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(unique(parents));
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return new Dom7(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return new Dom7(unique(children));
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (index, el) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = requestAnimationFrame(render);
      }

      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function eventShortcut(name) {
  for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }

    return this;
  }

  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(void 0, ['click'].concat(args));
}

function blur() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(void 0, ['blur'].concat(args));
}

function focus() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(void 0, ['focus'].concat(args));
}

function focusin() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusin'].concat(args));
}

function focusout() {
  for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusout'].concat(args));
}

function keyup() {
  for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(void 0, ['keyup'].concat(args));
}

function keydown() {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(void 0, ['keydown'].concat(args));
}

function keypress() {
  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(void 0, ['keypress'].concat(args));
}

function submit() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(void 0, ['submit'].concat(args));
}

function change() {
  for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(void 0, ['change'].concat(args));
}

function mousedown() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousedown'].concat(args));
}

function mousemove() {
  for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousemove'].concat(args));
}

function mouseup() {
  for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseup'].concat(args));
}

function mouseenter() {
  for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseenter'].concat(args));
}

function mouseleave() {
  for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseleave'].concat(args));
}

function mouseout() {
  for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseout'].concat(args));
}

function mouseover() {
  for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseover'].concat(args));
}

function touchstart() {
  for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchstart'].concat(args));
}

function touchend() {
  for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchend'].concat(args));
}

function touchmove() {
  for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchmove'].concat(args));
}

function resize() {
  for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(void 0, ['resize'].concat(args));
}

function scroll() {
  for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(void 0, ['scroll'].concat(args));
}



/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.version = "3.3.1";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__(511)
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <o-navbar homeRoute=\"/home\" breakpoint=\"sm\" brandPath=\"assets/img/orange-logo.jpg\" brandLabel=\"Back to home page\">\r\n        <li o-nav-link route=\"/home\">Ng-boosted</li>\r\n        <li o-nav-link route=\"/start\">Getting started</li>\r\n        <li o-nav-link route=\"/documentation\">Components</li>\r\n        <li o-nav-link route=\"/boostwatch\">Boostwatch</li>\r\n        <li class=\"nav-item ml-md-auto\">\r\n          <a class=\"nav-link\" href=\"https://github.com/Orange-OpenSource/Orange-Boosted-Angular\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\">\r\n            <svg class=\"navbar-nav-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 499.36\" focusable=\"false\"><title>GitHub</title><path d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\r\n          </a>\r\n        </li>\r\n    </o-navbar>\r\n</header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<scroll-top label=\"Back to top\"></scroll-top>\r\n\r\n<footer role=\"contentinfo\" class=\"o-footer\">\r\n    <h1 class=\"sr-only\">footer - site map & informations</h1>\r\n    <div class=\"o-footer-top\">\r\n        <div class=\"container\">\r\n            <span>Designed and built by the Boosted team.</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"o-footer-bottom\">\r\n        <div class=\"container\">\r\n            <ul class=\"nav\">\r\n                <li class=\"nav-item\"><span class=\"nav-link\">© Orange 2018</span></li>\r\n                <li class=\"nav-item\"><span class=\"nav-link\">v{{version}}</span></li>\r\n                <li class=\"nav-item\"><span class=\"nav-link\">Code licensed under</span><a class=\"nav-link\" href=\"https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/LICENSE\">MIT license</a></li>\r\n                <li class=\"nav-item\"><span class=\"nav-link\">Documentation licensed under</span><a class=\"nav-link\" href=\"https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/docs/LICENSE\">CC BY 3.0</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.ngBoostedVersion = "3.3.1";
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(513)
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<section class=\"ng-banner\">\r\n    <div class=\"container\">\r\n        <div class=\"row head\">\r\n            <div class=\"col-md-7\">\r\n                <h1>Orange B<span class=\"text-primary\">oo</span>sted with Angular</h1>\r\n                <p class=\"lead\">This is Ng-boosted, built with Boosted (css only), Angular and ng-bootstrap.</p>\r\n                <a class=\"btn btn-secondary btn-lg\" href=\"\" routerLink=\"/start\">Get started</a>\r\n                <span class=\"version\">Currently v{{ngBoostedVersion}}</span>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                    <!-- <svg width=\"220\" height=\"236\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><use xlink:href=\"#path0_fill\" fill=\"#FF7900\"/><use xlink:href=\"#path1_fill\" transform=\"translate(110)\" fill=\"#F16E00\"/><g><use xlink:href=\"#path2_fill\" transform=\"translate(62 51.69)\" fill=\"#FFF\"/></g><defs><path id=\"path0_fill\" fill-rule=\"evenodd\" d=\"M110 0L0 39.176l16.778 145.258L110 236V0z\"/><path id=\"path1_fill\" fill-rule=\"evenodd\" d=\"M0 0l110 39.176-16.778 145.258L0 236V0z\"/><path id=\"path2_fill\" d=\"M25.2 63.482H52.65c5.672 0 10.112 1.336 13.323 4.008 3.21 2.565 4.815 6.68 4.815 12.344 0 5.45-1.712 9.35-5.136 11.702-3.317 2.244-7.812 3.366-13.483 3.366H25.2v-31.42zM0 114.46h55.538c5.35 0 10.434-.641 15.25-1.924 4.815-1.389 9.095-3.42 12.84-6.091 3.853-2.779 6.85-6.252 8.99-10.42 2.247-4.275 3.37-9.191 3.37-14.749 0-7.267-1.819-13.412-5.457-18.435-3.532-5.13-8.722-8.657-15.57-10.58 10.38-5.024 15.57-12.986 15.57-23.887 0-10.152-3.21-17.42-9.631-21.801C74.586 2.19 65.597 0 53.933 0H0v114.46zm25.2-94.902h23.597c5.243 0 9.417.961 12.52 2.885 3.21 1.817 4.815 5.237 4.815 10.26 0 4.595-1.39 8.015-4.173 10.26-2.782 2.244-6.528 3.366-11.236 3.366H25.2V19.558z\"/></defs></svg> -->\r\n                    <img alt=\"ng-boosted logo\" src=\"assets/img/ng-boosted_logo.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"only-in-ng\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n                <img alt=\"components examles\" src=\"assets/img/only_in_boosted.png\">\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <div class=\"inner\">\r\n                    <h2>Only in ng-boosted !</h2>\r\n                    <ul class=\"o-square-list\">\r\n                        <li>Navbar component</li>\r\n                        <li>Custom checkboxes</li>\r\n                        <li>Advanced carousel with touch support</li>\r\n                        <li>Back to top link</li>\r\n                    </ul>\r\n                    <a class=\"btn btn-secondary btn-lg\" href=\"\" routerLink=\"/boostwatch\">Discover</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.ngBoostedVersion = "3.3.1";
        this.boostedVersion = "4.1.3";
        this.angularVersion = "6.1.0";
        this.ngBootstrapVersion = "3.3.1";
    }
    StartComponent = __decorate([
        core_1.Component({
            selector: 'getting-started',
            template: __webpack_require__(515)
        })
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;


/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"head\">\r\n    <div class=\"container\">\r\n        <h1>Orange B<span class=\"text-primary\">oo</span>sted with Angular</h1>\r\n        <p class=\"lead\">This is Ng-boosted, built with Boosted (css only), Angular and ng-bootstrap.</p>\r\n        <p class=\"version\">Currently v{{ngBoostedVersion}}</p>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"container\">\r\n    <h2>Getting started</h2>\r\n\r\n    <h3>Dependencies</h3>\r\n    <p>Ng-boosted is a set of custom components and directives that allows you to run your Angular based projet with Boosted CSS.</p>\r\n    <p>Before your start using Ng-boosted you need the following dependencies :</p>\r\n        <ul class=\"o-square-list\">\r\n            <li><a href=\"http://boosted.orange.com\">Boosted {{boostedVersion}}</a></li>\r\n            <li><a href=\"https://angular.io/\">Angular {{angularVersion}}</a></li>\r\n            <li><a href=\"https://ng-bootstrap.github.io/\">ng-bootstrap {{ngBootstrapVersion}}</a></li>\r\n        </ul>\r\n\r\n    <h3>Installation</h3>\r\n    <p>For <code>ng-bootstrap</code> installation please see the documentation <a href=\"https://ng-bootstrap.github.io/#/getting-started\">here</a></p>\r\n\r\n    <p>After installing the above dependencies, install <code>ng-boosted</code> via:</p>\r\n\r\n    <p><code>npm install --save ng-boosted</code></p>\r\n\r\n    <p>Once installed you need to import <code>ng-bootstrap</code> and <code>ng-boosted</code> modules.</p>\r\n\r\n    <p><code>\r\n        import {{ '{' }} NgbModule {{ '}' }} from '@ng-bootstrap/ng-bootstrap';<br>\r\n        import {{ '{' }} NgBoostedModule {{ '}' }} from 'ng-boosted';\r\n    </code></p>\r\n\r\n    <p><code>\r\n        @NgModule({{ '{' }}<br>\r\n        &emsp;declarations: [AppComponent, ...],<br>\r\n        &emsp;imports: [NgbModule.forRoot(), NgBoostedModule, ...],<br>\r\n        &emsp;bootstrap: [AppComponent]<br>\r\n        {{ '}' }})<br>\r\n        export class AppModule {{ '{' }}<br>\r\n        {{ '}' }}<br>\r\n    </code></p>\r\n\r\n    <h2>Building this documentation</h2>\r\n    <p>Simply <code>npm run build:docs</code> and the output goes to a <code>_gh_pages</code> folder.</p>\r\n\r\n    <p>You can also run this documentation with <code>npm start</code></p>\r\n\r\n    <p>The output is then served to <a href=\"http://localhost:3030\">http://localhost:3030</a>\r\n    </p>\r\n\r\n    <h2>Copyright and license</h2>\r\n\r\n    <p>Code and documentation copyright 2018 Orange SA. Code released under <a href=\"https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/LICENSE\">the MIT license</a>. Docs released under <a href=\"https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/docs/LICENSE\">Creative Commons Attribution</a>.\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
        this.isCollapsed = true;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DocsComponent.prototype, "component", void 0);
    DocsComponent = __decorate([
        core_1.Component({
            selector: 'docs-wrapper',
            template: __webpack_require__(517)
        })
    ], DocsComponent);
    return DocsComponent;
}());
exports.DocsComponent = DocsComponent;


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary mt-3 d-md-none\" (click)=\"isCollapsed = !isCollapsed\"\r\n    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">Menu</button>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\" id=\"component_nav\">\r\n            <div class=\"o-nav-local\" [ngbCollapse]=\"isCollapsed\" id=\"collapseExample\">\r\n                <nav>\r\n                    <ul class=\"nav\">\r\n                        <li class=\"nav-item d-none d-md-inline-block\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home\">Home</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/accordion\">Accordion</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/alert\">Alert</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/carousel\">Carousel</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/collapse\">Collapse</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/dropdown\">Dropdown</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/modal\">Modal</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/o-navbar\">Navbar</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/pagination\">Pagination</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/popover\">Popover</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/progress\">Progress</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/o-scroll-top\">Scroll Top</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/swiper\">Swiper</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/o-switch\">Switch</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/tabs\">Tabs</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/o-toggle\">Toggle</a></li>\r\n                        <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/documentation/tooltip\">Tooltip</a></li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 pl-md-5\">\r\n            <h2>{{ component }}</h2>\r\n            <p class=\"doc-ext-link\">Original component documentation can be found <a target=\"_blank\" href=\"https://ng-bootstrap.github.io/#/components/\">here.</a></p>\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var BoostwatchComponent = /** @class */ (function () {
    function BoostwatchComponent() {
    }
    BoostwatchComponent = __decorate([
        core_1.Component({
            selector: 'boostwatch',
            template: __webpack_require__(519)
        })
    ], BoostwatchComponent);
    return BoostwatchComponent;
}());
exports.BoostwatchComponent = BoostwatchComponent;


/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Collapse<a class=\"doc-link\" routerLink=\"/documentation/collapse\" title=\"go to collpase documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-collapse></demo-collapse>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Accordions<a class=\"doc-link\" routerLink=\"/documentation/accordion\" title=\"go to accordion documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-accordion></demo-accordion>\r\n        </div>\r\n    </div>\r\n\r\n    <h2>Modal<a class=\"doc-link\" routerLink=\"/documentation/modal\" title=\"go to modal documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-modal></demo-modal>\r\n    <ng-template ngbModalContainer></ng-template>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Dropdown<a class=\"doc-link\" routerLink=\"/documentation/dropdown\" title=\"go to dropdown documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-dropdown></demo-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Tabs<a class=\"doc-link\" routerLink=\"/documentation/tabs\" title=\"go to tabs documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-tabs></demo-tabs>\r\n\r\n            <h3>Without borders</h3>\r\n            <style>\r\n                :host /deep/ #no_borders .tab-content {\r\n                    border: none;\r\n                }\r\n            </style>\r\n            <demo-tabs id=\"no_borders\"></demo-tabs>\r\n        </div>\r\n    </div>\r\n\r\n    <h2>Pagination<a class=\"doc-link\" routerLink=\"/documentation/pagination\" title=\"go to pagination documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-pagination></demo-pagination>\r\n\r\n    <h2>Tooltip<a class=\"doc-link\" routerLink=\"/documentation/tooltip\" title=\"go to tooltip documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-tooltip></demo-tooltip>\r\n\r\n    <h2>Popover<a class=\"doc-link\" routerLink=\"/documentation/popover\" title=\"go to popover documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-popover></demo-popover>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n        <h2>Alert<a class=\"doc-link\" routerLink=\"/documentation/alert\" title=\"go to alert documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n        <demo-alert></demo-alert>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Carousel<a class=\"doc-link\" routerLink=\"/documentation/carousel\" title=\"go to carousel documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-carousel></demo-carousel>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Swiper<a class=\"doc-link\" routerLink=\"/documentation/swiper\" title=\"go to swiper documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-swiper></demo-swiper>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h2>Progress Bar<a class=\"doc-link\" routerLink=\"/documentation/progress\" title=\"go to progress documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n            <demo-progress-bar></demo-progress-bar>\r\n        </div>\r\n    </div>\r\n\r\n    <h2>Orange Switch<a class=\"doc-link\" routerLink=\"/documentation/o-switch\" title=\"go to orange switch documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-o-switch></demo-o-switch>\r\n\r\n    <h2>Orange Toggle<a class=\"doc-link\" routerLink=\"/documentation/o-toggle\" title=\"go to orange toggle documentation page\"><span class=\"icon-Forward-curved-arrow\"></span></a></h2>\r\n    <demo-o-toggle></demo-o-toggle>\r\n</div>"

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoAccordion = /** @class */ (function () {
    function DemoAccordion() {
    }
    DemoAccordion = __decorate([
        core_1.Component({
            selector: 'demo-accordion',
            template: __webpack_require__(521)
        })
    ], DemoAccordion);
    return DemoAccordion;
}());
exports.DemoAccordion = DemoAccordion;


/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<ngb-accordion activeIds=\"ngb-panel-0\" [closeOthers]=\"true\">\r\n    <ngb-panel title=\"Panel 1\">\r\n        <ng-template ngbPanelContent>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        </ng-template>\r\n    </ngb-panel>\r\n    <ngb-panel title=\"Panel 2\">\r\n        <ng-template ngbPanelContent>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        </ng-template>\r\n    </ngb-panel>\r\n    <ngb-panel title=\"Panel 3\">\r\n        <ng-template ngbPanelContent>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        </ng-template>\r\n    </ngb-panel>\r\n</ngb-accordion>"

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ng_bootstrap_1 = __webpack_require__(91);
var DemoModal = /** @class */ (function () {
    function DemoModal(modalService) {
        this.modalService = modalService;
    }
    DemoModal.prototype.open = function (content) {
        this.modalService.open(content);
    };
    DemoModal = __decorate([
        core_1.Component({
            selector: 'demo-modal',
            template: __webpack_require__(523)
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], DemoModal);
    return DemoModal;
}());
exports.DemoModal = DemoModal;


/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn btn-primary\" (click)=\"open(content)\">Open modal</button>"

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoTabs = /** @class */ (function () {
    function DemoTabs() {
    }
    DemoTabs = __decorate([
        core_1.Component({
            selector: 'demo-tabs',
            template: __webpack_require__(525)
        })
    ], DemoTabs);
    return DemoTabs;
}());
exports.DemoTabs = DemoTabs;


/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\r\n    <ngb-tab title=\"Home\">\r\n        <ng-template ngbTabContent>\r\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Profile\">\r\n        <ng-template ngbTabContent>\r\n        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,\r\n           blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,\r\n           commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\r\n           assumenda labore aesthetic magna delectus mollit.</p>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Messages\">\r\n        <ng-template ngbTabContent>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis volutpat quam, non suscipit arcu accumsan at. Aliquam pellentesque. </p>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoPagination = /** @class */ (function () {
    function DemoPagination() {
    }
    DemoPagination = __decorate([
        core_1.Component({
            selector: 'demo-pagination',
            template: __webpack_require__(527)
        })
    ], DemoPagination);
    return DemoPagination;
}());
exports.DemoPagination = DemoPagination;


/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<ngb-pagination [collectionSize]=\"5\" [pageSize]=\"1\" [page]=\"1\" [(page)]=\"page\"></ngb-pagination>"

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoTooltip = /** @class */ (function () {
    function DemoTooltip() {
    }
    DemoTooltip = __decorate([
        core_1.Component({
            selector: 'demo-tooltip',
            styles: ["\n    button {\n        margin-right: 0.5rem;\n    }\n    "],
            template: __webpack_require__(529)
        })
    ], DemoTooltip);
    return DemoTooltip;
}());
exports.DemoTooltip = DemoTooltip;


/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\nTooltip on left\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\nTooltip on top\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\nTooltip on bottom\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\nTooltip on right\r\n</button>"

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoPopover = /** @class */ (function () {
    function DemoPopover() {
    }
    DemoPopover = __decorate([
        core_1.Component({
            selector: 'demo-popover',
            styles: ["\n    button {\n        margin-right: 0.5rem;\n    }\n    "],
            template: __webpack_require__(531)
        })
    ], DemoPopover);
    return DemoPopover;
}());
exports.DemoPopover = DemoPopover;


/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" #p=\"ngbPopover\" (document:click)=\"p.close()\" (click)=\"$event.stopPropagation()\" ngbPopover=\"Now click outside to close me !\" popoverTitle=\"Popover on top\">\r\nPopover on top\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbPopover=\"You can't close me by clicking outside, sorry.\" popoverTitle=\"Popover on bottom\">\r\nPopover on bottom\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\r\nPopover on left\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\r\nPopover on right\r\n</button>"

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoAlert = /** @class */ (function () {
    function DemoAlert() {
        this.alerts = [];
        this.backup = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    DemoAlert.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DemoAlert.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DemoAlert.prototype, "alerts", void 0);
    DemoAlert = __decorate([
        core_1.Component({
            selector: 'demo-alert',
            template: __webpack_require__(533)
        }),
        __metadata("design:paramtypes", [])
    ], DemoAlert);
    return DemoAlert;
}());
exports.DemoAlert = DemoAlert;


/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n</p>\r\n<p>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n</p>"

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoCarousel = /** @class */ (function () {
    function DemoCarousel() {
    }
    DemoCarousel = __decorate([
        core_1.Component({
            selector: 'demo-carousel',
            template: __webpack_require__(535)
        })
    ], DemoCarousel);
    return DemoCarousel;
}());
exports.DemoCarousel = DemoCarousel;


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<ngb-carousel [interval]=\"false\" [wrap]=\"false\">\r\n    <ng-template ngbSlide>\r\n        <img src=\"https://dummyimage.com/600x400/cccccc/000000\" alt=\"Random first slide\">\r\n        <div class=\"carousel-caption\">\r\n        <h3>First slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <img src=\"https://dummyimage.com/600x400/cccccc/000000\" alt=\"Random second slide\">\r\n        <div class=\"carousel-caption\">\r\n        <h3>Second slide label</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <img src=\"https://dummyimage.com/600x400/cccccc/000000\" alt=\"Random third slide\">\r\n        <div class=\"carousel-caption\">\r\n        <h3>Third slide label</h3>\r\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n        </div>\r\n    </ng-template>\r\n</ngb-carousel>"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoCollapse = /** @class */ (function () {
    function DemoCollapse() {
    }
    DemoCollapse = __decorate([
        core_1.Component({
            selector: 'demo-collapse',
            template: __webpack_require__(537)
        })
    ], DemoCollapse);
    return DemoCollapse;
}());
exports.DemoCollapse = DemoCollapse;


/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"'collapse1'\">Toggle</button>\r\n</p>\r\n<div [ngbCollapse]=\"isCollapsed\" id=\"collapse1\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      You can collapse this card by clicking Toggle\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoProgressBar = /** @class */ (function () {
    function DemoProgressBar() {
    }
    DemoProgressBar = __decorate([
        core_1.Component({
            selector: 'demo-progress-bar',
            styles: ["\n    >>> .progress {\n      margin-top: 1rem;\n    }\n  "],
            template: __webpack_require__(539)
        })
    ], DemoProgressBar);
    return DemoProgressBar;
}());
exports.DemoProgressBar = DemoProgressBar;


/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<ngb-progressbar type=\"default\" [value]=\"90\"></ngb-progressbar>\r\n<ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n<ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n<ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\r\n<ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\r\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoDropdown = /** @class */ (function () {
    function DemoDropdown() {
    }
    DemoDropdown = __decorate([
        core_1.Component({
            selector: 'demo-dropdown',
            template: __webpack_require__(541)
        })
    ], DemoDropdown);
    return DemoDropdown;
}());
exports.DemoDropdown = DemoDropdown;


/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"d-inline-block\">\r\n    <button class=\"btn btn-info\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownMenu1\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action 1</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else is here</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoOSwitch = /** @class */ (function () {
    function DemoOSwitch() {
    }
    DemoOSwitch = __decorate([
        core_1.Component({
            selector: 'demo-o-switch',
            styles: ["\n        label {\n            font-weight: bold;\n        }\n    "],
            template: __webpack_require__(543)
        })
    ], DemoOSwitch);
    return DemoOSwitch;
}());
exports.DemoOSwitch = DemoOSwitch;


/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"form-group row\">\r\n        <label for=\"checkbox1\" class=\"col-form-label col-md-3 col-8\">Default</label>\r\n        <o-switch inputId=\"checkbox1\"></o-switch>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"checkbox2\" class=\"col-form-label col-md-3 col-8\">Toggled on init</label>\r\n        <o-switch inputId=\"checkbox2\" toggled=\"true\"></o-switch>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"checkbox3\" class=\"col-form-label col-md-3 col-8\">Rounded success variant</label>\r\n        <o-switch inputId=\"checkbox3\" toggled=\"true\" rounded=\"true\" successColor=\"true\" onLabel=\"On\" offLabel=\"Off\" customWidth=\"76px\"></o-switch>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoOToggle = /** @class */ (function () {
    function DemoOToggle() {
        // define which radio is toggled on init
        this.model = 2;
        this.model2 = 1;
    }
    DemoOToggle = __decorate([
        core_1.Component({
            selector: 'demo-o-toggle',
            styles: ["\n        h4 {\n            margin-top: 2.5rem;\n        }\n    "],
            template: __webpack_require__(545)
        })
    ], DemoOToggle);
    return DemoOToggle;
}());
exports.DemoOToggle = DemoOToggle;


/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-toggle o-switch\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"1\"> 1\r\n  </label>\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"2\"> 2\r\n  </label>\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"3\"> 3\r\n  </label>\r\n</div>\r\n\r\n<h4>Without Outline</h4>\r\n<div class=\"btn-group btn-group-toggle o-switch no-outline\" ngbRadioGroup name=\"radioBasic2\" [(ngModel)]=\"model2\">\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"1\"> 1\r\n  </label>\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"2\"> 2\r\n  </label>\r\n  <label ngbButtonLabel class=\"btn-secondary\">\r\n    <input ngbButton type=\"radio\" [value]=\"3\"> 3\r\n  </label>\r\n</div>"

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoSwiper = /** @class */ (function () {
    function DemoSwiper() {
        this.example1SwipeOptions = {
            slidesPerView: 1,
            loop: false,
            a11y: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };
    }
    DemoSwiper = __decorate([
        core_1.Component({
            selector: 'demo-swiper',
            styles: ["\n        >>> .swiper-container {\n            width: 37.5rem;\n            margin-left: 0;\n        }\n    "],
            template: __webpack_require__(547)
        }),
        __metadata("design:paramtypes", [])
    ], DemoSwiper);
    return DemoSwiper;
}());
exports.DemoSwiper = DemoSwiper;


/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<o-carousel-container [options]=\"example1SwipeOptions\">\r\n  <o-carousel-slide>\r\n    <img alt=\"Random first slide\" src=\"https://dummyimage.com/600x400/cccccc/000000&text=slide+1\">\r\n  </o-carousel-slide>\r\n  <o-carousel-slide>\r\n    <img alt=\"Random first slide\" src=\"https://dummyimage.com/600x400/cccccc/000000&text=slide+2\">\r\n    </o-carousel-slide>\r\n  <o-carousel-slide>\r\n    <img alt=\"Random first slide\" src=\"https://dummyimage.com/600x400/cccccc/000000&text=slide+3\">\r\n  </o-carousel-slide>\r\n  <o-carousel-slide>\r\n    <img alt=\"Random first slide\" src=\"https://dummyimage.com/600x400/cccccc/000000&text=slide+4\">\r\n  </o-carousel-slide>\r\n  <o-carousel-slide>\r\n    <img alt=\"Random first slide\" src=\"https://dummyimage.com/600x400/cccccc/000000&text=slide+5\">\r\n  </o-carousel-slide>\r\n</o-carousel-container>\r\n\r\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DemoONavbar = /** @class */ (function () {
    function DemoONavbar() {
    }
    DemoONavbar = __decorate([
        core_1.Component({
            selector: 'demo-o-navbar',
            template: __webpack_require__(549)
        })
    ], DemoONavbar);
    return DemoONavbar;
}());
exports.DemoONavbar = DemoONavbar;


/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<o-navbar homeRoute=\"/start\" breakpoint=\"sm\" brandPath=\"assets/img/orange-logo.jpg\" brandLabel=\"Back to home page\">\r\n     <li o-nav-link route=\"/documentation\">Getting started</li>\r\n\r\n     <li o-nav-link route=\"/start\" title=\"Shop\">\r\n        <span class=\"sr-only\">basket</span>\r\n        <span class=\"icon-buy\" aria-hidden=\"true\"></span>\r\n    </li>\r\n    <li ngbDropdown class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Contribute</a>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <a class=\"dropdown-item\" href=\"#\">Github</a>\r\n            <a class=\"dropdown-item\" href=\"#\">About Markdown</a>\r\n        </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\"><a href=\"http://orange.com\" class=\"nav-link\">External link</a></li>\r\n</o-navbar>"

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocAccordion = /** @class */ (function () {
    function DocAccordion() {
        this.demoSnippets = {
            markup: __webpack_require__(551),
            typescript: __webpack_require__(552)
        };
    }
    DocAccordion = __decorate([
        core_1.Component({
            selector: 'doc-accordion',
            template: "\n    <docs-wrapper component=\"Accordion\">\n      <h3>Demo</h3>\n      <demo-accordion></demo-accordion>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocAccordion);
    return DocAccordion;
}());
exports.DocAccordion = DocAccordion;


/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-accordion</span> <span class=\"token attr-name\" >activeIds</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ngb-panel-0<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[closeOthers]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-accordion</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-accordion'</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./accordion.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoAccordion</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocModal = /** @class */ (function () {
    function DocModal() {
        this.demoSnippets = {
            markup: __webpack_require__(554),
            typescript: __webpack_require__(555)
        };
    }
    DocModal = __decorate([
        core_1.Component({
            selector: 'doc-modal',
            template: "\n    <docs-wrapper component=\"Modal\">\n      <h3>Demo</h3>\n      <demo-modal></demo-modal>\n      <ng-template ngbModalContainer></ng-template>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocModal);
    return DocModal;
}());
exports.DocModal = DocModal;


/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >#content</span> <span class=\"token attr-name\" >let-c</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>close<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >let-d</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dismiss<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-header<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Modal title<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>close<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Close<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>d(<span class=\"token punctuation\" >'</span>Cross click<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >aria-hidden</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token entity\" title=\"&times;\">&amp;times;</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>One fine body<span class=\"token entity\" title=\"&hellip;\">&amp;hellip;</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-footer<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>c(<span class=\"token punctuation\" >'</span>Close click<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Close<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>open(content)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Open modal<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> NgbModal <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@ng-bootstrap/ng-bootstrap'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-modal'</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./modal.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoModal</span> <span class=\"token punctuation\" >{</span>\r\n\r\n    <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >private</span> modalService<span class=\"token punctuation\" >:</span> NgbModal<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span>\r\n\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span>content<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>modalService<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span>content<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocDropdown = /** @class */ (function () {
    function DocDropdown() {
        this.demoSnippets = {
            markup: __webpack_require__(557),
            typescript: __webpack_require__(558)
        };
    }
    DocDropdown = __decorate([
        core_1.Component({
            selector: 'doc-dropdown',
            template: "\n    <docs-wrapper component=\"Dropdown\">\n      <h3>Demo</h3>\n      <demo-dropdown></demo-dropdown>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocDropdown);
    return DocDropdown;
}());
exports.DocDropdown = DocDropdown;


/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdown</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>d-inline-block<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-info<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownMenu1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbDropdownToggle</span><span class=\"token punctuation\" >></span></span>Toggle dropdown<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdownMenu</span> <span class=\"token attr-name\" >aria-labelledby</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownMenu1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Action 1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Something else is here<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-dropdown'</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./dropdown.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoDropdown</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocTabs = /** @class */ (function () {
    function DocTabs() {
        this.demoSnippets = {
            markup: __webpack_require__(560),
            typescript: __webpack_require__(561)
        };
    }
    DocTabs = __decorate([
        core_1.Component({
            selector: 'doc-tabs',
            template: "\n    <docs-wrapper component=\"Tabs\">\n        <h3>Demo</h3>\n        <demo-tabs></demo-tabs>\n        <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocTabs);
    return DocTabs;
}());
exports.DocTabs = DocTabs;


/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tabset</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Home<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Profile<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,\r\n           blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,\r\n           commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\r\n           assumenda labore aesthetic magna delectus mollit.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Messages<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis volutpat quam, non suscipit arcu accumsan at. Aliquam pellentesque. <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tabset</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-tabs'</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./tabs.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoTabs</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocPagination = /** @class */ (function () {
    function DocPagination() {
        this.demoSnippets = {
            markup: __webpack_require__(563),
            typescript: __webpack_require__(564)
        };
    }
    DocPagination = __decorate([
        core_1.Component({
            selector: 'doc-pagination',
            template: "\n    <docs-wrapper component=\"Pagination\">\n        <h3>Demo</h3>\n        <demo-pagination></demo-pagination>\n        <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocPagination);
    return DocPagination;
}());
exports.DocPagination = DocPagination;


/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-pagination</span> <span class=\"token attr-name\" >[collectionSize]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[pageSize]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[page]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(page)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-pagination</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-pagination'</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./pagination.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoPagination</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocTooltip = /** @class */ (function () {
    function DocTooltip() {
        this.demoSnippets = {
            markup: __webpack_require__(566),
            typescript: __webpack_require__(567)
        };
    }
    DocTooltip = __decorate([
        core_1.Component({
            selector: 'doc-tooltip',
            template: "\n    <docs-wrapper component=\"Tooltip\">\n        <h3>Demo</h3>\n        <demo-tooltip></demo-tooltip>\n        <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocTooltip);
    return DocTooltip;
}());
exports.DocTooltip = DocTooltip;


/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on left\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on top\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on bottom\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on right\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-tooltip'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    button {\r\n        margin-right: 0.5rem;\r\n    }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./tooltip.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoTooltip</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocPopover = /** @class */ (function () {
    function DocPopover() {
        this.docContent = __webpack_require__(569);
        this.demoSnippets = {
            markup: __webpack_require__(570),
            typescript: __webpack_require__(571)
        };
    }
    DocPopover = __decorate([
        core_1.Component({
            selector: 'doc-popover',
            styles: ["\n    p {\n      margin-top: 1rem;\n    }\n\n    demo-popover + h3 {\n      margin-top: 1.25rem;\n    }\n\n    code span {\n      font-weight: bold;\n    }\n  "],
            template: "\n    <docs-wrapper component=\"Popover\">\n        <h3>Demo</h3>\n        <demo-popover></demo-popover>\n        <h3>Usage</h3>\n        <div [innerHtml]=docContent></div>\n        <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocPopover);
    return DocPopover;
}());
exports.DocPopover = DocPopover;


/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<p>By default a popover is closed by clicking on its trigger element.\nTo close by clicking outside you&#39;ll have to use custom directives on the trigger element :</p>\n<pre><code class=\"lang-html\">&lt;span #p=&quot;ngbPopover&quot; (document:click)=&quot;p.close()&quot; (click)=&quot;$event.stopPropagation()&quot;&gt;&lt;/span&gt;\n</code></pre>\n";

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >#p</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ngbPopover<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" ><span class=\"token namespace\" >(document:</span>click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>p.close()<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$event.stopPropagation()<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Now click outside to close me !<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on top\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>You can<span class=\"token punctuation\" >'</span>t close me by clicking outside, sorry.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on bottom\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on left\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on right\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@Component <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-popover'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    button {\r\n        margin-right: 0.5rem;\r\n    }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./popover.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoPopover</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocAlert = /** @class */ (function () {
    function DocAlert() {
        this.demoSnippets = {
            markup: __webpack_require__(573),
            typescript: __webpack_require__(574)
        };
    }
    DocAlert = __decorate([
        core_1.Component({
            selector: 'doc-alert',
            template: "\n    <docs-wrapper component=\"Alert\">\n        <h3>Demo</h3>\n        <demo-alert></demo-alert>\n        <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocAlert);
    return DocAlert;
}());
exports.DocAlert = DocAlert;


/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >*ngFor</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>let alert of alerts<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-alert</span> <span class=\"token attr-name\" >[type]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>alert.type<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(close)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>closeAlert(alert)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{ alert.message }}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-alert</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>reset()<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Reset<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> Input <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-alert'</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./alert.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoAlert</span> <span class=\"token punctuation\" >{</span>\r\n  @<span class=\"token function\" >Input</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\r\n  <span class=\"token keyword\" >public</span> alerts<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token keyword\" >private</span> backup<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n\r\n  <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'success'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is an success alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'info'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is an info alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'warning'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is a warning alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >4</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'danger'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is a danger alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>backup <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n\r\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >closeAlert</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >const</span> index<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >splice</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n\r\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >reset</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>backup<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >interface</span> <span class=\"token class-name\" >IAlert</span> <span class=\"token punctuation\" >{</span>\r\n  id<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span><span class=\"token punctuation\" >;</span>\r\n  type<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span><span class=\"token punctuation\" >;</span>\r\n  message<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocCarousel = /** @class */ (function () {
    function DocCarousel() {
        this.demoSnippets = {
            markup: __webpack_require__(576),
            typescript: __webpack_require__(577)
        };
    }
    DocCarousel = __decorate([
        core_1.Component({
            selector: 'doc-carousel',
            template: "\n    <docs-wrapper component=\"Carousel\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <h3>Demo</h3>\n                <demo-carousel></demo-carousel>\n                <code-box [snippets]=\"demoSnippets\"></code-box>\n            </div>\n        </div>\n    </docs-wrapper>\n  "
        })
    ], DocCarousel);
    return DocCarousel;
}());
exports.DocCarousel = DocCarousel;


/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-carousel</span> <span class=\"token attr-name\" >[interval]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[wrap]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>First slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Nulla vitae elit libero, a pharetra augue mollis interdum.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random second slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Second slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random third slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Third slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-carousel</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> Input <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-carousel'</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./carousel.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoCarousel</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocSwiper = /** @class */ (function () {
    function DocSwiper() {
        this.docContent = __webpack_require__(579);
        this.demoSnippets = {
            markup: __webpack_require__(580),
            typescript: __webpack_require__(581)
        };
    }
    DocSwiper = __decorate([
        core_1.Component({
            selector: 'doc-swiper',
            styles: ["\n    demo-swiper + h3 {\n      margin-top: 1.25rem;\n    }\n  "],
            template: "\n    <docs-wrapper component=\"Swiper\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <h3>Demo</h3>\n                <demo-swiper></demo-swiper>\n                <h3>Usage</h3>\n                <div [innerHtml]=docContent></div>\n                <code-box [snippets]=\"demoSnippets\"></code-box>\n            </div>\n        </div>\n    </docs-wrapper>\n  "
        })
    ], DocSwiper);
    return DocSwiper;
}());
exports.DocSwiper = DocSwiper;


/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<h4 id=\"third-party-dependency\">Third party dependency</h4>\n<p>Swiper component is an Angular based wrapper for the native javascript plugin <a href=\"http://idangero.us/swiper\">Swiper</a>.</p>\n<p>In order to use the wrapper correctly, please add the following dependencies into your projet.</p>\n<ul>\n<li><a href=\"https://github.com/nolimits4web/Swiper/blob/master/dist/css/swiper.css\">swiper.css</a> (make sure to add this before boosted css)</li>\n<li><a href=\"https://github.com/nolimits4web/Swiper/blob/master/dist/js/swiper.js\">swiper.js</a></li>\n</ul>\n";

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-container</span> <span class=\"token attr-name\" >[options]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example1SwipeOptions<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-carousel-container</span><span class=\"token punctuation\" >></span></span>\r\n\r\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> ViewChild <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-swiper'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        >>> .swiper-container {\r\n            width: 37.5rem;\r\n            margin-left: 0;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./swiper.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoSwiper</span> <span class=\"token punctuation\" >{</span>\r\n    example1SwipeOptions<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >any</span><span class=\"token punctuation\" >;</span>\r\n\r\n    <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>example1SwipeOptions <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\r\n        slidesPerView<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\r\n        loop<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >,</span>\r\n        a11y<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\r\n        keyboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            enabled<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\r\n            onlyInViewport<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\r\n        pagination<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            el<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-pagination'</span><span class=\"token punctuation\" >,</span>\r\n            type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'bullets'</span><span class=\"token punctuation\" >,</span>\r\n            clickable<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\r\n        navigation<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            nextEl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-button-next'</span><span class=\"token punctuation\" >,</span>\r\n            prevEl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-button-prev'</span><span class=\"token punctuation\" >,</span>\r\n        <span class=\"token punctuation\" >}</span>\r\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocCollapse = /** @class */ (function () {
    function DocCollapse() {
        this.demoSnippets = {
            markup: __webpack_require__(583),
            typescript: __webpack_require__(584)
        };
    }
    DocCollapse = __decorate([
        core_1.Component({
            selector: 'doc-collapse',
            template: "\n    <docs-wrapper component=\"Collapse\">\n      <h3>Demo</h3>\n      <demo-collapse></demo-collapse>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocCollapse);
    return DocCollapse;
}());
exports.DocCollapse = DocCollapse;


/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>isCollapsed <span class=\"token punctuation\" >=</span> !isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[attr.aria-expanded]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>!isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[attr.aria-controls]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>collapse1<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >[ngbCollapse]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>collapse1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n      You can collapse this card by clicking Toggle\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-collapse'</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./collapse.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoCollapse</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocProgressBar = /** @class */ (function () {
    function DocProgressBar() {
        this.demoSnippets = {
            markup: __webpack_require__(586),
            typescript: __webpack_require__(587)
        };
    }
    DocProgressBar = __decorate([
        core_1.Component({
            selector: 'doc-progress-bar',
            template: "\n    <docs-wrapper component=\"Progress Bar\">\n      <h3>Demo</h3>\n      <demo-progress-bar></demo-progress-bar>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocProgressBar);
    return DocProgressBar;
}());
exports.DocProgressBar = DocProgressBar;


/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>90<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>success<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>25<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>info<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>50<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>warning<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>75<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>danger<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-progress-bar'</span><span class=\"token punctuation\" >,</span>\r\n  styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    >>> .progress {\r\n      margin-top: 1rem;\r\n    }\r\n  `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n  template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./progress-bar.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoProgressBar</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocONavbar = /** @class */ (function () {
    function DocONavbar() {
        this.docContent = __webpack_require__(589);
        this.demoSnippets = {
            markup: __webpack_require__(590),
            typescript: __webpack_require__(591)
        };
    }
    DocONavbar = __decorate([
        core_1.Component({
            selector: 'doc-o-navbar',
            styles: ["\n    demo-o-navbar + h3 {\n      margin-top: 1.25rem;\n    }\n  "],
            template: "\n    <docs-wrapper component=\"Navbar\">\n      <h3>Demo</h3>\n      <demo-o-navbar></demo-o-navbar>\n      <h3>Usage</h3>\n      <div [innerHtml]=docContent></div>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocONavbar);
    return DocONavbar;
}());
exports.DocONavbar = DocONavbar;


/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<h4 id=\"onavbar\">ONavbar</h4>\n<p>Orange navbar component is designed to work with Angular <a href=\"https://angular.io/docs/ts/latest/guide/router.html\">router</a> module.</p>\n<p>Main element <code>&lt;o-navbar&gt;</code> accepts the following parameters :</p>\n<ul>\n<li><code>homeRoute</code> which is the default route of your application when user clicks the logo link.</li>\n<li><code>breakpoint</code> which is the bootstrap suffix for when the navbar must collapse to mobile view. Default value is <code>&quot;sm&quot;</code>.\nCheckout Boosted <a href=\"http://boosted.orange.com/v4-alpha/layout/responsive-utilities/#available-classes\">documentation</a> for supported values.</li>\n<li><code>brandPath</code> to specify path and file of the brand logo</li>\n<li><code>brandLabel</code> to specify alt text for image and link title at the same time</li>\n</ul>\n<p>There is three supported types of child elements to <code>&lt;o-navbar&gt;</code>. Each of them must use native <code>&lt;li&gt;</code> html element.</p>\n<ul>\n<li><code>o-nav-link</code> for application navigation using Angular router module.</li>\n<li><code>o-nav-menu</code> for dropdown menu in navbar.</li>\n<li>classic <code>&lt;a href class=&quot;nav-link&quot;&gt;&lt;/a&gt;</code> for external links.</li>\n</ul>\n<h5 id=\"onavlink\">ONavLink</h5>\n<p>This component has two parameters :</p>\n<ul>\n<li><code>route</code> which the targeted app route, same value as you would use in <code>[routerLink]</code>attribute.</li>\n<li><code>title</code> which acts as <code>&lt;a&gt;</code> tag attribute <code>title</code>. Can be handy when using icon nav links with no text in it. No provided value will not set the <code>title</code>attribute.</li>\n</ul>\n<h5 id=\"onavmenu\">ONavMenu</h5>\n<p>This component has one parameter :</p>\n<ul>\n<li><code>menuTitle</code> which is the dropdown title.</li>\n</ul>\n<p>The host tag <code>&lt;li&gt;</code> must include the <code>ngbDropdown</code> directive in order to allow dropdown behaviour. Dropdown menu content must be included inside <code>&lt;li&gt;</code> element. See Dropdown <a href=\"https://ng-bootstrap.github.io/#/components/dropdown\">documentation</a> for more information.</p>\n";

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-navbar</span> <span class=\"token attr-name\" >homeRoute</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/start<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breakpoint</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sm<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >brandPath</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>assets/img/orange-logo.jpg<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >brandLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Back to home page<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n     <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >o-nav-link</span> <span class=\"token attr-name\" >route</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/documentation<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Getting started<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n\r\n     <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >o-nav-link</span> <span class=\"token attr-name\" >route</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/start<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Shop<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sr-only<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>basket<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>icon-buy<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-hidden</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >ngbDropdown</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-item dropdown<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-link<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownBasic1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbDropdownToggle</span><span class=\"token punctuation\" >></span></span>Contribute<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdownMenu</span> <span class=\"token attr-name\" >aria-labelledby</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownBasic1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Github<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>About Markdown<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-item<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>http://orange.com<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-link<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>External link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-navbar</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-navbar'</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./o-navbar.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoONavbar</span> <span class=\"token punctuation\" >{</span>\r\n<span class=\"token punctuation\" >}</span>"

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocOScrollTop = /** @class */ (function () {
    function DocOScrollTop() {
        this.docContent = __webpack_require__(593);
        this.demoSnippets = {
            markup: __webpack_require__(594)
        };
    }
    DocOScrollTop = __decorate([
        core_1.Component({
            selector: 'doc-o-scroll-top',
            styles: ["\n    .fake-block { height: 400rem; }\n  "],
            template: "\n    <docs-wrapper component=\"Scroll Top\">\n      <h3>Demo</h3>\n      <p>Scroll down this page to see a nice example.</p>\n      <h3>Usage</h3>\n      <div [innerHtml]=docContent></div>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n      <div class=\"fake-block\"></div>\n    </docs-wrapper>\n  "
        })
    ], DocOScrollTop);
    return DocOScrollTop;
}());
exports.DocOScrollTop = DocOScrollTop;


/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<p>The Orange Scroll Top component accepts one parameter :</p>\n<ul>\n<li><code>label</code> which is the text being displayed next to the top button and by screen reader as well.</li>\n</ul>\n";

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>scroll-top</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Back to top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>scroll-top</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocOSwitch = /** @class */ (function () {
    function DocOSwitch() {
        this.docContent = __webpack_require__(596);
        this.demoSnippets = {
            markup: __webpack_require__(597),
            typescript: __webpack_require__(598)
        };
    }
    DocOSwitch = __decorate([
        core_1.Component({
            selector: 'doc-o-switch',
            template: "\n    <docs-wrapper component=\"Switch\">\n      <h3>Demo</h3>\n      <demo-o-switch></demo-o-switch>\n      <h3>Usage</h3>\n      <div [innerHtml]=docContent></div>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocOSwitch);
    return DocOSwitch;
}());
exports.DocOSwitch = DocOSwitch;


/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<p>Element <code>&lt;o-switch&gt;</code> accepts the following parameters :</p>\n<ul>\n<li><code>inputId</code> represents the element&#39;s <code>id</code> to be used with a <code>&lt;label&gt;</code> tag <code>for</code> attribute.</li>\n<li><code>toggled</code> represents the state of the switch. Can be set to <code>true</code> at initialisation.</li>\n<li><code>rounded</code> set to <code>true</code> to get the rounded variant of the switch.</li>\n<li><code>successColor</code>set to <code>true</code> to get the success color variant of the switch.</li>\n<li><code>onLabel</code> and <code>offLabel</code> can be set to custom labels.</li>\n<li><code>customWidth</code> be sure to set a correct width according to the lenghiest custom labels used. String format is same as you would use in CSS, i.e <code>4.75rem</code>, <code>auto</code>.</li>\n</ul>\n";

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>container<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggled on init<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >toggled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Rounded success variant<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >toggled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >rounded</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >successColor</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>On<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >offLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Off<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >customWidth</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>76px<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-switch'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        label {\r\n            font-weight: bold;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./o-switch.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoOSwitch</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >}</span>"

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var DocOToggle = /** @class */ (function () {
    function DocOToggle() {
        this.docContent = __webpack_require__(600);
        this.demoSnippets = {
            markup: __webpack_require__(601),
            typescript: __webpack_require__(602)
        };
    }
    DocOToggle = __decorate([
        core_1.Component({
            selector: 'doc-o-toggle',
            styles: ["\n    demo-o-toggle + h3 {\n      margin-top: 1.25rem;\n    }\n  "],
            template: "\n    <docs-wrapper component=\"Toggle\">\n      <h3>Demo</h3>\n      <demo-o-toggle></demo-o-toggle>\n      <h3>Usage</h3>\n      <div [innerHtml]=docContent></div>\n      <code-box [snippets]=\"demoSnippets\"></code-box>\n    </docs-wrapper>\n  "
        })
    ], DocOToggle);
    return DocOToggle;
}());
exports.DocOToggle = DocOToggle;


/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<p>This 3-way toggle example uses <code>ngbRadioGroup</code> directive. Check out ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/buttons\">documentation</a> for more information.</p>\n";

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-group btn-group-toggle o-switch<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbRadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radioBasic<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>model<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 1\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 2\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 3\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Without Outline<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-group btn-group-toggle o-switch no-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbRadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radioBasic2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>model2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 1\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 2\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 3\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> FormsModule <span class=\"token punctuation\" >}</span>   from <span class=\"token string\" >'@angular/forms'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-toggle'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        h4 {\r\n            margin-top: 2.5rem;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    template<span class=\"token punctuation\" >:</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./o-toggle.component.html'</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoOToggle</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token comment\" spellcheck=\"true\">// define which radio is toggled on init</span>\r\n    model <span class=\"token operator\" >=</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >;</span>\r\n    model2 <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>"

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var CodeBox = /** @class */ (function () {
    function CodeBox() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CodeBox.prototype, "snippets", void 0);
    CodeBox = __decorate([
        core_1.Component({
            selector: 'code-box',
            styles: ["\n        h3 {\n            margin-top: 1.25rem;\n        }\n        .tab-content {\n            border: 0;\n            padding: 0;\n        }\n        :host {\n            display: block;\n            margin-bottom: 30px;\n        }\n    "],
            template: "\n        <h3 >Source</h3>\n        <ngb-tabset class=\"code-box\">\n        <ngb-tab title=\"HTML\" *ngIf=\"snippets.markup\">\n            <ng-template ngbTabContent>\n                <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"snippets.markup\"></code></pre>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"TypeScript\" *ngIf=\"snippets.typescript\">\n            <ng-template ngbTabContent>\n                <pre class=\"language-typescript\"><code class=\"language-typescript\" [innerHTML]=\"snippets.typescript\"></code></pre>\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset>\n    "
        })
    ], CodeBox);
    return CodeBox;
}());
exports.CodeBox = CodeBox;


/***/ })

},[503]);
//# sourceMappingURL=app.7c6a2a6e38310c699287.js.map