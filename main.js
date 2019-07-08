(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-calendar.component.md":
/*!********************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/o-calendar.component.md ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"ocalendar\">OCalendar</h4>\n<p>Orange calendar component is designed to displayed date in Europian format DD\\MM\\YYYY</p>\n<p>Main element <code>&lt;lib-o-calendar&gt;</code> accepts the following parameters :</p>\n<ul>\n<li><code>color</code> is the color ( black or white) of the calendar icon based on the background color.</li>\n<li><code>labelButton</code> corresponds to the button label.</li>\n<li><code>labelInput</code> corresponds to the input label.</li>\n<li><code>placeHolder</code> corresponds to the input place holder.</li>\n<li><code>labelFooterToday</code> corresponds to the &quot;Today&quot; button label of the calendar footer.</li>\n<li><code>labelFooterClose</code> corresponds to the &quot;Close&quot; button label of the calendar footer.</li>\n<li><code>model</code> corresponds to the calendar value.</li>\n</ul>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-navbar.component.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/o-navbar.component.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"onavbar\">ONavbar</h4>\n<p>Orange navbar component is designed to work with Angular <a href=\"https://angular.io/docs/ts/latest/guide/router.html\">router</a> module.</p>\n<p>Main element <code>&lt;o-navbar&gt;</code> accepts the following parameters :</p>\n<ul>\n<li><code>homeRoute</code> which is the default route of your application when user clicks the logo link.</li>\n<li><code>breakpoint</code> which is the bootstrap suffix for when the navbar must collapse to mobile view. Default value is <code>&quot;sm&quot;</code>.\nCheckout Boosted <a href=\"http://boosted.orange.com/v4-alpha/layout/responsive-utilities/#available-classes\">documentation</a> for supported values.</li>\n<li><code>brandPath</code> to specify path and file of the brand logo</li>\n<li><code>brandLabel</code> to specify alt text for image and link title at the same time</li>\n</ul>\n<p>There is three supported types of child elements to <code>&lt;o-navbar&gt;</code>. Each of them must use native <code>&lt;li&gt;</code> html element.</p>\n<ul>\n<li><code>o-nav-link</code> for application navigation using Angular router module.</li>\n<li><code>o-nav-menu</code> for dropdown menu in navbar.</li>\n<li>classic <code>&lt;a href class=&quot;nav-link&quot;&gt;&lt;/a&gt;</code> for external links.</li>\n</ul>\n<h5 id=\"onavlink\">ONavLink</h5>\n<p>This component has two parameters :</p>\n<ul>\n<li><code>route</code> is the targeted app route. It is the same value you would use in <code>[routerLink]</code>attribute.</li>\n<li><code>query</code>, optional, is the params to pass. It is the same value you would use in <code>[queryParams]</code>attribute.</li>\n<li><code>title</code> which acts as <code>&lt;a&gt;</code> tag attribute <code>title</code>. Can be handy when using icon nav links with no text in it. No provided value will not set the <code>title</code>attribute.</li>\n</ul>\n<h5 id=\"onavmenu\">ONavMenu</h5>\n<p>This component has one parameter :</p>\n<ul>\n<li><code>menuTitle</code> which is the dropdown title.</li>\n</ul>\n<p>The host tag <code>&lt;li&gt;</code> must include the <code>ngbDropdown</code> directive in order to allow dropdown behaviour. Dropdown menu content must be included inside <code>&lt;li&gt;</code> element. See Dropdown <a href=\"https://ng-bootstrap.github.io/#/components/dropdown\">documentation</a> for more information.</p>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-scroll-top.component.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/o-scroll-top.component.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>The Orange Scroll Top component, <code>&lt;lib-scroll-top&gt;</code>, accepts one parameter :</p>\n<ul>\n<li><code>label</code> which is the text being displayed next to the top button and by screen reader as well.</li>\n</ul>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-switch.component.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/o-switch.component.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Element <code>&lt;lib-o-switch&gt;</code> accepts the following parameters :</p>\n<ul>\n<li><code>inputId</code> represents the element&#39;s <code>id</code> to be used with a <code>&lt;label&gt;</code> tag <code>for</code> attribute.</li>\n<li><code>toggled</code> represents the state of the switch. Can be set to <code>true</code> at initialisation.</li>\n<li><code>rounded</code> set to <code>true</code> to get the rounded variant of the switch.</li>\n<li><code>successColor</code>set to <code>true</code> to get the success color variant of the switch.</li>\n<li><code>onLabel</code> and <code>offLabel</code> can be set to custom labels.</li>\n<li><code>customWidth</code> be sure to set a correct width according to the lenghiest custom labels used. String format is same as you would use in CSS, i.e <code>4.75rem</code>, <code>auto</code>.</li>\n<li><code>isChecked</code> an output, represents the state of the checkbox when changing is made on it.</li>\n</ul>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-toggle.component.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/o-toggle.component.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This 3-way toggle example uses <code>ngbRadioGroup</code> directive. Check out ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/buttons\">documentation</a> for more information.</p>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/popover.component.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/popover.component.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>By default a popover is closed by clicking on its trigger element.\nTo close by clicking outside you&#39;ll have to use custom directives on the trigger element :</p>\n<pre><code class=\"language-html\">&lt;span #p=&quot;ngbPopover&quot; (document:click)=&quot;p.close()&quot; (click)=&quot;$event.stopPropagation()&quot;&gt;&lt;/span&gt;</code></pre>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/swiper.component.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/html-loader!./node_modules/markdown-loader!./src/app/docs/swiper.component.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"third-party-dependency\">Third party dependency</h4>\n<p>Swiper component is an Angular based wrapper for the native javascript plugin <a href=\"http://idangero.us/swiper\">Swiper</a>.</p>\n<p>You can bind the display of a pause/play button by using:</p>\n<ul>\n<li><code>pauseButton</code> set it to <code>true</code> to display the button.</li>\n</ul>\n<p>Beware in your option, you have to enbale autoplay.</p>\n<p>In order to use the wrapper correctly, please add the following dependencies into your projet.</p>\n<ul>\n<li><a href=\"https://github.com/nolimits4web/Swiper/blob/master/dist/css/swiper.css\">swiper.css</a> (make sure to add this before boosted css)</li>\n<li><a href=\"https://github.com/nolimits4web/Swiper/blob/master/dist/js/swiper.js\">swiper.js</a></li>\n</ul>\n";

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/accordion.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/accordion.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-accordion</span> <span class=\"token attr-name\" >activeIds</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ngb-panel-0<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[closeOthers]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-panel</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Panel 3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPanelContent</span><span class=\"token punctuation\" >></span></span>\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-panel</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-accordion</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/alert.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/alert.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >*ngFor</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>let alert of alerts<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-alert</span> <span class=\"token attr-name\" >[type]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>alert.type<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(close)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>closeAlert(alert)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>{{ alert.message }}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-alert</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>reset()<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Reset<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-carousel</span> <span class=\"token attr-name\" >#carousel</span> <span class=\"token attr-name\" >(focus)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onFocus()<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(blur)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onBlur()<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>First slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Nulla vitae elit libero, a pharetra augue mollis interdum.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random second slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Second slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random third slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Third slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbSlide</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/600x400/cccccc/000000<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random fourth slide<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>carousel-caption<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h3</span><span class=\"token punctuation\" >></span></span>Fourth slide label<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h3</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-carousel</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-group<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >role</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>group<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Carousel toggle controls<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    &lt;button type=\"button\" (click)=\"this.changeState()\" id=\"changeState\" class=\"btn btn-outline-dark btn-sm\" [ngClass] = \"!this.pause ? 'icon-Pause':'icon-Play'\" [attr.aria-label]=\"!this.pause ? 'set Pause':'set Play'\"><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/collapse.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/collapse.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>isCollapsed <span class=\"token punctuation\" >=</span> !isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[attr.aria-expanded]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>!isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[attr.aria-controls]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>collapse1<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggle<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >[ngbCollapse]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>isCollapsed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>collapse1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n      You can collapse this card by clicking Toggle\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/dropdown.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/dropdown.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdown</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>d-inline-block<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-info<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownMenu1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbDropdownToggle</span><span class=\"token punctuation\" >></span></span>Toggle dropdown<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdownMenu</span> <span class=\"token attr-name\" >aria-labelledby</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownMenu1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >ngbDropdownItem</span><span class=\"token punctuation\" >></span></span>Action - 1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >ngbDropdownItem</span><span class=\"token punctuation\" >></span></span>Another Action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >ngbDropdownItem</span><span class=\"token punctuation\" >></span></span>Something else is here<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/modal.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >#content</span> <span class=\"token attr-name\" >let-modal</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-header<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-basic-title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Modal title<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>close<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Close<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal.dismiss(<span class=\"token punctuation\" >'</span>Cross click<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >aria-hidden</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token entity\" title=\"&times;\">&amp;times;</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>One fine body<span class=\"token entity\" title=\"&hellip;\">&amp;hellip;</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal-footer<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>modal.close(<span class=\"token punctuation\" >'</span>Close click<span class=\"token punctuation\" >'</span>)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Close<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn btn-primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>open(content)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Open modal<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-calendar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/o-calendar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-calendar</span> <span class=\"token attr-name\" >[color]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>black<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[labelButton]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>Open Calendar<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[labelInput]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>Calendar<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[placeHolder]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>Une date (jj/mm/aaa)<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span>\r\n<span class=\"token attr-name\" >[labelFooterToday]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>Today<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[labelFooterClose]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>Close<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(childEvent)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>model<span class=\"token punctuation\" >=</span>$event<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-calendar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>hr</span><span class=\"token punctuation\" >/></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pre</span><span class=\"token punctuation\" >></span></span>Model: {{ model | json }}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pre</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-navbar.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/o-navbar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-navbar</span> <span class=\"token attr-name\" >homeRoute</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/start<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breakpoint</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sm<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >brandPath</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>assets/img/orange-logo.jpg<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >brandLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Back to home page<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n     <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >o-nav-link</span> <span class=\"token attr-name\" >route</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/documentation<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[query]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>{id: <span class=\"token punctuation\" >'</span>my_id<span class=\"token punctuation\" >'</span>}<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Getting started<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n\r\n     <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >o-nav-link</span> <span class=\"token attr-name\" >route</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/start<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Shop<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sr-only<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>basket<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>icon-buy<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-hidden</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >ngbDropdown</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-item dropdown<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-link<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownBasic1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbDropdownToggle</span><span class=\"token punctuation\" >></span></span>Contribute<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >ngbDropdownMenu</span> <span class=\"token attr-name\" >aria-labelledby</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdownBasic1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Github<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dropdown-item<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>About Markdown<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-item<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>http://orange.com<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>nav-link<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>External link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-navbar</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-scroll-top.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/o-scroll-top.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-scroll-top</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Back to top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-scroll-top</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-switch.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/o-switch.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>container<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Toggled on init<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >toggled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(isChecked)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>getCheck($event)<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-group row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >for</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-form-label col-md-3 col-8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Rounded success variant<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-switch</span> <span class=\"token attr-name\" >inputId</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >toggled</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >rounded</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >successColor</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>On<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >offLabel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Off<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >customWidth</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>76px<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-switch</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>hr</span><span class=\"token punctuation\" >/></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pre</span><span class=\"token punctuation\" >></span></span>Toggled on Init: {{ checked }}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pre</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-toggle.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/o-toggle.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-group btn-group-toggle o-switch<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbRadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radioBasic<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>model<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 1\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 2\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 3\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Without Outline<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-group btn-group-toggle o-switch no-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbRadioGroup</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radioBasic2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>model2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 1\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 2\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span> <span class=\"token attr-name\" >ngbButtonLabel</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn-secondary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >ngbButton</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>radio<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> 3\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/pagination.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/pagination.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-pagination</span> <span class=\"token attr-name\" >[collectionSize]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[pageSize]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[page]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(page)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >aria-label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Pagination<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPaginationPrevious</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbPaginationNext</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-pagination</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/popover.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/popover.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >#p</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ngbPopover<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" ><span class=\"token namespace\" >(document:</span>click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>p.close()<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >(click)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>$event.stopPropagation()<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Now click outside to close me !<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on top\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>You can<span class=\"token punctuation\" >'</span>t close me by clicking outside, sorry.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on bottom\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on left\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbPopover</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >popoverTitle</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Popover on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nPopover on right\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/progress-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/progress-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>90<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>success<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>25<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>info<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>50<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>warning<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>75<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-progressbar</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>danger<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[value]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>100<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-progressbar</span><span class=\"token punctuation\" >></span></span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/swiper.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/swiper.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-container</span> <span class=\"token attr-name\" >[options]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example1SwipeOptions<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[pauseButton]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>true<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/800x600/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/800x600/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/800x600/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/800x600/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Random first slide<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://dummyimage.com/800x600/cccccc/000000&amp;text<span class=\"token punctuation\" >=</span>slide+5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-slide</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>lib-o-carousel-container</span><span class=\"token punctuation\" >></span></span>\r\n\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/tabs.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/tabs.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tabset</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Home<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Profile<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,\r\n           blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,\r\n           commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\r\n           assumenda labore aesthetic magna delectus mollit.<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ngb-tab</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Messages<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-template</span> <span class=\"token attr-name\" >ngbTabContent</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis volutpat quam, non suscipit arcu accumsan at. Aliquam pellentesque. <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\r\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-template</span><span class=\"token punctuation\" >></span></span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tab</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ngb-tabset</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/tooltip.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=html!./src/app/demos/tooltip.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on left<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on left\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on top\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on bottom\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Tooltip on right<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nTooltip on right\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>button<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>btn btn-secondary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placement</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ngbTooltip</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Closing after another click or Escape<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >triggers</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[autoClose]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >'</span>outside<span class=\"token punctuation\" >'</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\r\nClick right here !\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/accordion.component.ts":
/*!********************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/accordion.component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-accordion'</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./accordion.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoAccordion</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/alert.component.ts":
/*!****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/alert.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> Input <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-alert'</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./alert.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoAlert</span> <span class=\"token punctuation\" >{</span>\r\n  @<span class=\"token function\" >Input</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\r\n  <span class=\"token keyword\" >public</span> alerts<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token keyword\" >private</span> backup<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n\r\n  <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'success'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is an success alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'info'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is an info alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'warning'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is a warning alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\r\n      id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >4</span><span class=\"token punctuation\" >,</span>\r\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'danger'</span><span class=\"token punctuation\" >,</span>\r\n      message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is a danger alert'</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>backup <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n\r\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >closeAlert</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >const</span> index<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts<span class=\"token punctuation\" >.</span><span class=\"token function\" >splice</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n\r\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >reset</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>alerts <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>backup<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>alert<span class=\"token punctuation\" >:</span> IAlert<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> alert<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n  <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >interface</span> <span class=\"token class-name\" >IAlert</span> <span class=\"token punctuation\" >{</span>\r\n  id<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span><span class=\"token punctuation\" >;</span>\r\n  type<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span><span class=\"token punctuation\" >;</span>\r\n  message<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/carousel.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/carousel.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> ViewChild<span class=\"token punctuation\" >,</span> OnInit<span class=\"token punctuation\" >,</span> HostListener <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> NgbCarousel<span class=\"token punctuation\" >,</span> NgbCarouselConfig <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@ng-bootstrap/ng-bootstrap'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-carousel'</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./carousel.component.html'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>`\r\n    <span class=\"token punctuation\" >.</span>icon<span class=\"token operator\" >-</span>Pause <span class=\"token punctuation\" >{</span>\r\n        content<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"\\eabc\"</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token punctuation\" >.</span>icon<span class=\"token operator\" >-</span>Play <span class=\"token punctuation\" >{</span>\r\n        content<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"\\eac9\"</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>`<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    providers<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>NgbCarouselConfig<span class=\"token punctuation\" >]</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoCarousel</span> <span class=\"token keyword\" >implements</span> <span class=\"token class-name\" >OnInit</span> <span class=\"token punctuation\" >{</span>\r\n\r\n    @<span class=\"token function\" >ViewChild</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'carousel'</span><span class=\"token punctuation\" >)</span> <span class=\"token keyword\" >public</span> carousel<span class=\"token punctuation\" >:</span> NgbCarousel<span class=\"token punctuation\" >;</span>\r\n\r\n    <span class=\"token keyword\" >public</span> pause<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >boolean</span><span class=\"token punctuation\" >;</span>\r\n\r\n    <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >:</span> NgbCarouselConfig<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        config<span class=\"token punctuation\" >.</span>interval <span class=\"token operator\" >=</span> <span class=\"token number\" >1500</span><span class=\"token punctuation\" >;</span>\r\n        config<span class=\"token punctuation\" >.</span>wrap <span class=\"token operator\" >=</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >;</span>\r\n        config<span class=\"token punctuation\" >.</span>keyboard <span class=\"token operator\" >=</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >;</span>\r\n        config<span class=\"token punctuation\" >.</span>pauseOnHover <span class=\"token operator\" >=</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >changeState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span>interval <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >pause</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token punctuation\" >{</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span>interval <span class=\"token operator\" >=</span> <span class=\"token number\" >1500</span><span class=\"token punctuation\" >;</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >cycle</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n            <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >ngOnInit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >onFocus</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span>interval <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >pause</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >onBlur</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span>interval <span class=\"token operator\" >=</span> <span class=\"token number\" >1500</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >cycle</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n    @<span class=\"token function\" >HostListener</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'mouseenter'</span><span class=\"token punctuation\" >)</span> <span class=\"token keyword\" >public</span> <span class=\"token function\" >onMouseEnter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >pause</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n    @<span class=\"token function\" >HostListener</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'mouseleave'</span><span class=\"token punctuation\" >)</span> <span class=\"token keyword\" >public</span> <span class=\"token function\" >onMouseLeave</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>carousel<span class=\"token punctuation\" >.</span><span class=\"token function\" >cycle</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause <span class=\"token operator\" >=</span> <span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>pause<span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/collapse.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/collapse.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-collapse'</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./collapse.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoCollapse</span> <span class=\"token punctuation\" >{</span>\r\n  <span class=\"token keyword\" >public</span> isCollapsed <span class=\"token operator\" >=</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/dropdown.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/dropdown.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-dropdown'</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./dropdown.component.html'</span><span class=\"token punctuation\" >,</span>\r\n  styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n  .dropdown-item.focus, .dropdown-item:focus {\r\n      color: #fff;\r\n      text-decoration: none;\r\n      background-color: #000;\r\n      }`</span></span><span class=\"token punctuation\" >]</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoDropdown</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/modal.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> NgbModal<span class=\"token punctuation\" >,</span> ModalDismissReasons <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@ng-bootstrap/ng-bootstrap'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-modal'</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./modal.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoModal</span> <span class=\"token punctuation\" >{</span>\r\n\r\n    <span class=\"token keyword\" >public</span> closeResult<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span><span class=\"token punctuation\" >;</span>\r\n\r\n    <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >private</span> modalService<span class=\"token punctuation\" >:</span> NgbModal<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span>\r\n\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span>content<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>modalService<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span>content<span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>ariaLabelledBy<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'modal-basic-title'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span>result<span class=\"token punctuation\" >.</span><span class=\"token function\" >then</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>result<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\r\n          <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>closeResult <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`Closed with: </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>result<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >(</span>reason<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\r\n          <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>closeResult <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`Dismissed </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getDismissReason</span><span class=\"token punctuation\" >(</span>reason<span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n    <span class=\"token keyword\" >private</span> <span class=\"token function\" >getDismissReason</span><span class=\"token punctuation\" >(</span>reason<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>reason <span class=\"token operator\" >===</span> ModalDismissReasons<span class=\"token punctuation\" >.</span>ESC<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n          <span class=\"token keyword\" >return</span> <span class=\"token string\" >'by pressing ESC'</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>reason <span class=\"token operator\" >===</span> ModalDismissReasons<span class=\"token punctuation\" >.</span>BACKDROP_CLICK<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n          <span class=\"token keyword\" >return</span> <span class=\"token string\" >'by clicking on a backdrop'</span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token punctuation\" >{</span>\r\n          <span class=\"token keyword\" >return</span>  <span class=\"token template-string\" ><span class=\"token string\" >`with: </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>reason<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\r\n        <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-calendar.component.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/o-calendar.component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> Injectable <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> NgbDatepickerI18n<span class=\"token punctuation\" >,</span> NgbDateStruct <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@ng-bootstrap/ng-bootstrap'</span><span class=\"token punctuation\" >;</span>\r\n\r\n<span class=\"token keyword\" >const</span> I18N_VALUES <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token string\" >'fr'</span><span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n      weekdays<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'Lu'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Ma'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Me'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Je'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Ve'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Sa'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Di'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n      months<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'Jan'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Fév'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Mar'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Avr'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Mai'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Juin'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Juil'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Aou'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Sep'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Oct'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Nov'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Déc'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n    <span class=\"token comment\" spellcheck=\"true\">// other languages you would support</span>\r\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\r\n\r\n  <span class=\"token comment\" spellcheck=\"true\">// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also</span>\r\n  <span class=\"token comment\" spellcheck=\"true\">// use the Angular LOCALE_ID value</span>\r\n@<span class=\"token function\" >Injectable</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\r\n    <span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >I18n</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >public</span> language <span class=\"token operator\" >=</span> <span class=\"token string\" >'fr'</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n\r\n  <span class=\"token comment\" spellcheck=\"true\">// Define custom service providing the months and weekdays translations</span>\r\n@<span class=\"token function\" >Injectable</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >CustomDatepickerI18n</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >NgbDatepickerI18n</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >private</span> _i18n<span class=\"token punctuation\" >:</span> I18n<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token keyword\" >public</span> <span class=\"token function\" >getWeekdayShortName</span><span class=\"token punctuation\" >(</span>weekday<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >return</span> I18N_VALUES<span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>_i18n<span class=\"token punctuation\" >.</span>language<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>weekdays<span class=\"token punctuation\" >[</span>weekday <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n<span class=\"token keyword\" >public</span> <span class=\"token function\" >getMonthShortName</span><span class=\"token punctuation\" >(</span>month<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >return</span> I18N_VALUES<span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>_i18n<span class=\"token punctuation\" >.</span>language<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>months<span class=\"token punctuation\" >[</span>month <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n<span class=\"token keyword\" >public</span> <span class=\"token function\" >getMonthFullName</span><span class=\"token punctuation\" >(</span>month<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >number</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >return</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getMonthShortName</span><span class=\"token punctuation\" >(</span>month<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n\r\n<span class=\"token keyword\" >public</span> <span class=\"token function\" >getDayAriaLabel</span><span class=\"token punctuation\" >(</span>date<span class=\"token punctuation\" >:</span> NgbDateStruct<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >string</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >return</span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>date<span class=\"token punctuation\" >.</span>day<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >-</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>date<span class=\"token punctuation\" >.</span>month<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >-</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>date<span class=\"token punctuation\" >.</span>year<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-calendar'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./o-calendar.component.html'</span><span class=\"token punctuation\" >,</span>\r\n    providers<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>I18n<span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>provide<span class=\"token punctuation\" >:</span> NgbDatepickerI18n<span class=\"token punctuation\" >,</span> useClass<span class=\"token punctuation\" >:</span> CustomDatepickerI18n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoOCalendar</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >public</span> model<span class=\"token punctuation\" >:</span> NgbDateStruct<span class=\"token punctuation\" >;</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-navbar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/o-navbar.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-navbar'</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./o-navbar.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoONavbar</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-switch.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/o-switch.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-switch'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        label {\r\n            font-weight: bold;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./o-switch.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoOSwitch</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >public</span> checked<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >boolean</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >public</span> <span class=\"token function\" >getCheck</span><span class=\"token punctuation\" >(</span>check<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>checked <span class=\"token operator\" >=</span> check<span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-toggle.component.ts":
/*!*******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/o-toggle.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-o-toggle'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        h4 {\r\n            margin-top: 2.5rem;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./o-toggle.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoOToggle</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token comment\" spellcheck=\"true\">// define which radio is toggled on init</span>\r\n    <span class=\"token keyword\" >public</span> model <span class=\"token operator\" >=</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token keyword\" >public</span> model2 <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/pagination.component.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/pagination.component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-pagination'</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./pagination.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoPagination</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >public</span> page <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/popover.component.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/popover.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@Component <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-popover'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    button {\r\n        margin-right: 0.5rem;\r\n    }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./popover.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoPopover</span>  <span class=\"token punctuation\" >{</span>\r\n\r\n <span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/progress-bar.component.ts":
/*!***********************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/progress-bar.component.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-progress-bar'</span><span class=\"token punctuation\" >,</span>\r\n  styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    >>> .progress {\r\n      margin-top: 1rem;\r\n    }\r\n  `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./progress-bar.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoProgressBar</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/swiper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/swiper.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-swiper'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n        >>> .swiper-container {\r\n            width: 37.5rem;\r\n            margin-left: 0;\r\n        }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./swiper.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoSwiper</span> <span class=\"token punctuation\" >{</span>\r\n    <span class=\"token keyword\" >public</span> example1SwipeOptions<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >any</span><span class=\"token punctuation\" >;</span>\r\n\r\n    <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\r\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>example1SwipeOptions <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\r\n        autoplay<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            delay<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1500</span><span class=\"token punctuation\" >,</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\r\n        slidesPerView<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\r\n        loop<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\r\n        a11y<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\r\n        keyboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            enabled<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\r\n            onlyInViewport<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\r\n        pagination<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            el<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-pagination'</span><span class=\"token punctuation\" >,</span>\r\n            type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'bullets'</span><span class=\"token punctuation\" >,</span>\r\n            clickable<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span>\r\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\r\n        navigation<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\r\n            nextEl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-button-next'</span><span class=\"token punctuation\" >,</span>\r\n            prevEl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'.swiper-button-prev'</span><span class=\"token punctuation\" >,</span>\r\n        <span class=\"token punctuation\" >}</span>\r\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\r\n    <span class=\"token punctuation\" >}</span>\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/tabs.component.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/tabs.component.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-tabs'</span><span class=\"token punctuation\" >,</span>\r\n  templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./tabs.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoTabs</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/tooltip.component.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/prismjs-loader?lang=typescript!./src/app/demos/tooltip.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\r\n\r\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\r\n    selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'demo-tooltip'</span><span class=\"token punctuation\" >,</span>\r\n    styles<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token template-string\" ><span class=\"token string\" >`\r\n    button {\r\n        margin-right: 0.5rem;\r\n    }\r\n    `</span></span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\r\n    templateUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'./tooltip.component.html'</span>\r\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\r\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >DemoTooltip</span> <span class=\"token punctuation\" >{</span>\r\n\r\n<span class=\"token punctuation\" >}</span>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _boostwatch_boostwatch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boostwatch/boostwatch.component */ "./src/app/boostwatch/boostwatch.component.ts");
/* harmony import */ var _docs_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/accordion.component */ "./src/app/docs/accordion.component.ts");
/* harmony import */ var _docs_o_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs/o-calendar.component */ "./src/app/docs/o-calendar.component.ts");
/* harmony import */ var _docs_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs/modal.component */ "./src/app/docs/modal.component.ts");
/* harmony import */ var _docs_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/dropdown.component */ "./src/app/docs/dropdown.component.ts");
/* harmony import */ var _docs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/tabs.component */ "./src/app/docs/tabs.component.ts");
/* harmony import */ var _docs_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./docs/pagination.component */ "./src/app/docs/pagination.component.ts");
/* harmony import */ var _docs_tooltip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./docs/tooltip.component */ "./src/app/docs/tooltip.component.ts");
/* harmony import */ var _docs_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./docs/popover.component */ "./src/app/docs/popover.component.ts");
/* harmony import */ var _docs_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./docs/alert.component */ "./src/app/docs/alert.component.ts");
/* harmony import */ var _docs_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./docs/carousel.component */ "./src/app/docs/carousel.component.ts");
/* harmony import */ var _docs_swiper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./docs/swiper.component */ "./src/app/docs/swiper.component.ts");
/* harmony import */ var _docs_collapse_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./docs/collapse.component */ "./src/app/docs/collapse.component.ts");
/* harmony import */ var _docs_progress_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./docs/progress-bar.component */ "./src/app/docs/progress-bar.component.ts");
/* harmony import */ var _docs_o_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./docs/o-navbar.component */ "./src/app/docs/o-navbar.component.ts");
/* harmony import */ var _docs_o_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./docs/o-scroll-top.component */ "./src/app/docs/o-scroll-top.component.ts");
/* harmony import */ var _docs_o_switch_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./docs/o-switch.component */ "./src/app/docs/o-switch.component.ts");
/* harmony import */ var _docs_o_toggle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./docs/o-toggle.component */ "./src/app/docs/o-toggle.component.ts");





















var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'start',
        component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    },
    {
        path: 'documentation',
        redirectTo: 'documentation/accordion',
        pathMatch: 'full'
    },
    {
        path: 'documentation/collapse',
        component: _docs_collapse_component__WEBPACK_IMPORTED_MODULE_15__["DocCollapse"]
    },
    {
        path: 'documentation/calendar',
        component: _docs_o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["DocOCalendar"]
    },
    {
        path: 'documentation/accordion',
        component: _docs_accordion_component__WEBPACK_IMPORTED_MODULE_4__["DocAccordion"]
    },
    {
        path: 'documentation/modal',
        component: _docs_modal_component__WEBPACK_IMPORTED_MODULE_6__["DocModal"]
    },
    {
        path: 'documentation/dropdown',
        component: _docs_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DocDropdown"]
    },
    {
        path: 'documentation/tabs',
        component: _docs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["DocTabs"]
    },
    {
        path: 'documentation/pagination',
        component: _docs_pagination_component__WEBPACK_IMPORTED_MODULE_9__["DocPagination"]
    },
    {
        path: 'documentation/tooltip',
        component: _docs_tooltip_component__WEBPACK_IMPORTED_MODULE_10__["DocTooltip"]
    },
    {
        path: 'documentation/popover',
        component: _docs_popover_component__WEBPACK_IMPORTED_MODULE_11__["DocPopover"]
    },
    {
        path: 'documentation/alert',
        component: _docs_alert_component__WEBPACK_IMPORTED_MODULE_12__["DocAlert"]
    },
    {
        path: 'documentation/carousel',
        component: _docs_carousel_component__WEBPACK_IMPORTED_MODULE_13__["DocCarousel"]
    },
    {
        path: 'documentation/swiper',
        component: _docs_swiper_component__WEBPACK_IMPORTED_MODULE_14__["DocSwiper"]
    },
    {
        path: 'documentation/progress',
        component: _docs_progress_bar_component__WEBPACK_IMPORTED_MODULE_16__["DocProgressBar"]
    },
    {
        path: 'documentation/o-navbar',
        component: _docs_o_navbar_component__WEBPACK_IMPORTED_MODULE_17__["DocONavbar"]
    },
    {
        path: 'documentation/o-scroll-top',
        component: _docs_o_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__["DocOScrollTop"]
    },
    {
        path: 'documentation/o-switch',
        component: _docs_o_switch_component__WEBPACK_IMPORTED_MODULE_19__["DocOSwitch"]
    },
    {
        path: 'documentation/o-toggle',
        component: _docs_o_toggle_component__WEBPACK_IMPORTED_MODULE_20__["DocOToggle"]
    },
    {
        path: 'boostwatch',
        component: _boostwatch_boostwatch_component__WEBPACK_IMPORTED_MODULE_3__["BoostwatchComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/ng-boosted/ng-boosted.ngfactory */ "./node_modules/ng-boosted/ng-boosted.ngfactory.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/global */ "./src/app/directives/global.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "lib-o-navbar", [["brandLabel", "Back to home page"], ["brandPath", "assets/img/orange-logo.jpg"], ["breakpoint", "sm"], ["homeRoute", "/home"]], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ONavbarComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ONavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ONavbarComponent"], [], { homeRoute: [0, "homeRoute"], breakpoint: [1, "breakpoint"], brandPath: [2, "brandPath"], brandLabel: [3, "brandLabel"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 2, "li", [["o-nav-link", ""], ["route", "/home"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ONavLinkComponent"], [], { route: [0, "route"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ng-boosted"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "li", [["o-nav-link", ""], ["route", "/start"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ONavLinkComponent"], [], { route: [0, "route"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Getting started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "li", [["o-nav-link", ""], ["route", "/documentation"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ONavLinkComponent"], [], { route: [0, "route"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Components"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "li", [["o-nav-link", ""], ["route", "/boostwatch"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ONavLinkComponent"], [], { route: [0, "route"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Boostwatch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 5, "li", [["class", "nav-item ml-md-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "a", [["aria-label", "GitHub"], ["class", "nav-link"], ["href", "https://github.com/Orange-OpenSource/Orange-Boosted-Angular"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, ":svg:svg", [["class", "navbar-nav-svg"], ["focusable", "false"], ["viewBox", "0 0 512 499.36"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["GitHub"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, ":svg:path", [["d", "M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"], ["fill", "currentColor"], ["fill-rule", "evenodd"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "lib-scroll-top", [["label", "Back to top"]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onWindowScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ScrollTopComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ScrollTopComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"], [], { label: [0, "label"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 31, "footer", [["class", "o-footer"], ["role", "contentinfo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "h1", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["footer - site map & informations"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "div", [["class", "o-footer-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Designed and built by the Boosted team."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 24, "div", [["class", "o-footer-bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 23, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 22, "ul", [["class", "nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "span", [["class", "nav-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A9 Orange 2018"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["class", "nav-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["v", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "span", [["class", "nav-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Code licensed under"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/LICENSE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MIT license"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "span", [["class", "nav-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Documentation licensed under"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/docs/LICENSE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CC BY 3.0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "https://ng-boosted.netlify.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ng-boosted Netlify"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" thanks to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "https://www.netlify.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "img", [["alt", "Netlify"], ["class", "footer-svg"], ["src", "https://www.netlify.com/img/global/badges/netlify-color-bg.svg"], ["title", "Netlify"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "/home"; var currVal_1 = "sm"; var currVal_2 = "assets/img/orange-logo.jpg"; var currVal_3 = "Back to home page"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_5 = "/home"; _ck(_v, 4, 0, currVal_5); var currVal_7 = "/start"; _ck(_v, 7, 0, currVal_7); var currVal_9 = "/documentation"; _ck(_v, 10, 0, currVal_9); var currVal_11 = "/boostwatch"; _ck(_v, 13, 0, currVal_11); _ck(_v, 22, 0); var currVal_12 = "Back to top"; _ck(_v, 24, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).route; _ck(_v, 3, 0, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).route; _ck(_v, 6, 0, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).route; _ck(_v, 9, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).route; _ck(_v, 12, 0, currVal_10); var currVal_13 = _co.globals.ngBoostedVersion; _ck(_v, 40, 0, currVal_13); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _directives_global__WEBPACK_IMPORTED_MODULE_5__["Globals"], _directives_global__WEBPACK_IMPORTED_MODULE_5__["Globals"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [_directives_global__WEBPACK_IMPORTED_MODULE_5__["Globals"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/global */ "./src/app/directives/global.ts");

var AppComponent = /** @class */ (function () {
    function AppComponent(globals) {
        this.globals = globals;
        this.title = 'Orange-Boosted-Angular';
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
/* harmony import */ var _start_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component.ngfactory */ "./src/app/start/start.component.ngfactory.js");
/* harmony import */ var _docs_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/collapse.component.ngfactory */ "./src/app/docs/collapse.component.ngfactory.js");
/* harmony import */ var _docs_o_calendar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/o-calendar.component.ngfactory */ "./src/app/docs/o-calendar.component.ngfactory.js");
/* harmony import */ var _docs_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./docs/accordion.component.ngfactory */ "./src/app/docs/accordion.component.ngfactory.js");
/* harmony import */ var _docs_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./docs/modal.component.ngfactory */ "./src/app/docs/modal.component.ngfactory.js");
/* harmony import */ var _docs_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./docs/dropdown.component.ngfactory */ "./src/app/docs/dropdown.component.ngfactory.js");
/* harmony import */ var _docs_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./docs/tabs.component.ngfactory */ "./src/app/docs/tabs.component.ngfactory.js");
/* harmony import */ var _docs_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./docs/pagination.component.ngfactory */ "./src/app/docs/pagination.component.ngfactory.js");
/* harmony import */ var _docs_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./docs/tooltip.component.ngfactory */ "./src/app/docs/tooltip.component.ngfactory.js");
/* harmony import */ var _docs_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./docs/popover.component.ngfactory */ "./src/app/docs/popover.component.ngfactory.js");
/* harmony import */ var _docs_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./docs/alert.component.ngfactory */ "./src/app/docs/alert.component.ngfactory.js");
/* harmony import */ var _docs_carousel_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./docs/carousel.component.ngfactory */ "./src/app/docs/carousel.component.ngfactory.js");
/* harmony import */ var _docs_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./docs/swiper.component.ngfactory */ "./src/app/docs/swiper.component.ngfactory.js");
/* harmony import */ var _docs_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./docs/progress-bar.component.ngfactory */ "./src/app/docs/progress-bar.component.ngfactory.js");
/* harmony import */ var _docs_o_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./docs/o-navbar.component.ngfactory */ "./src/app/docs/o-navbar.component.ngfactory.js");
/* harmony import */ var _docs_o_scroll_top_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./docs/o-scroll-top.component.ngfactory */ "./src/app/docs/o-scroll-top.component.ngfactory.js");
/* harmony import */ var _docs_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./docs/o-switch.component.ngfactory */ "./src/app/docs/o-switch.component.ngfactory.js");
/* harmony import */ var _docs_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./docs/o-toggle.component.ngfactory */ "./src/app/docs/o-toggle.component.ngfactory.js");
/* harmony import */ var _boostwatch_boostwatch_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./boostwatch/boostwatch.component.ngfactory */ "./src/app/boostwatch/boostwatch.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docs_shared_analytics__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./docs/shared/analytics */ "./src/app/docs/shared/analytics.ts");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/global */ "./src/app/directives/global.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _docs_collapse_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./docs/collapse.component */ "./src/app/docs/collapse.component.ts");
/* harmony import */ var _docs_o_calendar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./docs/o-calendar.component */ "./src/app/docs/o-calendar.component.ts");
/* harmony import */ var _docs_accordion_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./docs/accordion.component */ "./src/app/docs/accordion.component.ts");
/* harmony import */ var _docs_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./docs/modal.component */ "./src/app/docs/modal.component.ts");
/* harmony import */ var _docs_dropdown_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./docs/dropdown.component */ "./src/app/docs/dropdown.component.ts");
/* harmony import */ var _docs_tabs_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./docs/tabs.component */ "./src/app/docs/tabs.component.ts");
/* harmony import */ var _docs_pagination_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./docs/pagination.component */ "./src/app/docs/pagination.component.ts");
/* harmony import */ var _docs_tooltip_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./docs/tooltip.component */ "./src/app/docs/tooltip.component.ts");
/* harmony import */ var _docs_popover_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./docs/popover.component */ "./src/app/docs/popover.component.ts");
/* harmony import */ var _docs_alert_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./docs/alert.component */ "./src/app/docs/alert.component.ts");
/* harmony import */ var _docs_carousel_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./docs/carousel.component */ "./src/app/docs/carousel.component.ts");
/* harmony import */ var _docs_swiper_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./docs/swiper.component */ "./src/app/docs/swiper.component.ts");
/* harmony import */ var _docs_progress_bar_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./docs/progress-bar.component */ "./src/app/docs/progress-bar.component.ts");
/* harmony import */ var _docs_o_navbar_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./docs/o-navbar.component */ "./src/app/docs/o-navbar.component.ts");
/* harmony import */ var _docs_o_scroll_top_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./docs/o-scroll-top.component */ "./src/app/docs/o-scroll-top.component.ts");
/* harmony import */ var _docs_o_switch_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./docs/o-switch.component */ "./src/app/docs/o-switch.component.ts");
/* harmony import */ var _docs_o_toggle_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./docs/o-toggle.component */ "./src/app/docs/o-toggle.component.ts");
/* harmony import */ var _boostwatch_boostwatch_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./boostwatch/boostwatch.component */ "./src/app/boostwatch/boostwatch.component.ts");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵnNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵqNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HomeComponentNgFactory"], _start_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["StartComponentNgFactory"], _docs_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["DocCollapseNgFactory"], _docs_o_calendar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["DocOCalendarNgFactory"], _docs_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["DocAccordionNgFactory"], _docs_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["DocModalNgFactory"], _docs_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["DocDropdownNgFactory"], _docs_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["DocTabsNgFactory"], _docs_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["DocPaginationNgFactory"], _docs_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["DocTooltipNgFactory"], _docs_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["DocPopoverNgFactory"], _docs_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["DocAlertNgFactory"], _docs_carousel_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["DocCarouselNgFactory"], _docs_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["DocSwiperNgFactory"], _docs_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["DocProgressBarNgFactory"], _docs_o_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["DocONavbarNgFactory"], _docs_o_scroll_top_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["DocOScrollTopNgFactory"], _docs_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["DocOSwitchNgFactory"], _docs_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["DocOToggleNgFactory"], _boostwatch_boostwatch_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["BoostwatchComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_26__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_30__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_30__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_30__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_30__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _docs_shared_analytics__WEBPACK_IMPORTED_MODULE_31__["Analytics"], _docs_shared_analytics__WEBPACK_IMPORTED_MODULE_31__["Analytics"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _directives_global__WEBPACK_IMPORTED_MODULE_32__["Globals"], _directives_global__WEBPACK_IMPORTED_MODULE_32__["Globals"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_30__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_26__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTES"], function () { return [[{ path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_33__["HomeComponent"] }, { path: "start", component: _start_start_component__WEBPACK_IMPORTED_MODULE_34__["StartComponent"] }, { path: "documentation", redirectTo: "documentation/accordion", pathMatch: "full" }, { path: "documentation/collapse", component: _docs_collapse_component__WEBPACK_IMPORTED_MODULE_35__["DocCollapse"] }, { path: "documentation/calendar", component: _docs_o_calendar_component__WEBPACK_IMPORTED_MODULE_36__["DocOCalendar"] }, { path: "documentation/accordion", component: _docs_accordion_component__WEBPACK_IMPORTED_MODULE_37__["DocAccordion"] }, { path: "documentation/modal", component: _docs_modal_component__WEBPACK_IMPORTED_MODULE_38__["DocModal"] }, { path: "documentation/dropdown", component: _docs_dropdown_component__WEBPACK_IMPORTED_MODULE_39__["DocDropdown"] }, { path: "documentation/tabs", component: _docs_tabs_component__WEBPACK_IMPORTED_MODULE_40__["DocTabs"] }, { path: "documentation/pagination", component: _docs_pagination_component__WEBPACK_IMPORTED_MODULE_41__["DocPagination"] }, { path: "documentation/tooltip", component: _docs_tooltip_component__WEBPACK_IMPORTED_MODULE_42__["DocTooltip"] }, { path: "documentation/popover", component: _docs_popover_component__WEBPACK_IMPORTED_MODULE_43__["DocPopover"] }, { path: "documentation/alert", component: _docs_alert_component__WEBPACK_IMPORTED_MODULE_44__["DocAlert"] }, { path: "documentation/carousel", component: _docs_carousel_component__WEBPACK_IMPORTED_MODULE_45__["DocCarousel"] }, { path: "documentation/swiper", component: _docs_swiper_component__WEBPACK_IMPORTED_MODULE_46__["DocSwiper"] }, { path: "documentation/progress", component: _docs_progress_bar_component__WEBPACK_IMPORTED_MODULE_47__["DocProgressBar"] }, { path: "documentation/o-navbar", component: _docs_o_navbar_component__WEBPACK_IMPORTED_MODULE_48__["DocONavbar"] }, { path: "documentation/o-scroll-top", component: _docs_o_scroll_top_component__WEBPACK_IMPORTED_MODULE_49__["DocOScrollTop"] }, { path: "documentation/o-switch", component: _docs_o_switch_component__WEBPACK_IMPORTED_MODULE_50__["DocOSwitch"] }, { path: "documentation/o-toggle", component: _docs_o_toggle_component__WEBPACK_IMPORTED_MODULE_51__["DocOToggle"] }, { path: "boostwatch", component: _boostwatch_boostwatch_component__WEBPACK_IMPORTED_MODULE_52__["BoostwatchComponent"] }, { path: "", redirectTo: "/home", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_30__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_30__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_boosted__WEBPACK_IMPORTED_MODULE_53__["NgBoostedModule"], ng_boosted__WEBPACK_IMPORTED_MODULE_53__["NgBoostedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boostwatch/boostwatch.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/boostwatch/boostwatch.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_BoostwatchComponent, View_BoostwatchComponent_0, View_BoostwatchComponent_Host_0, BoostwatchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BoostwatchComponent", function() { return RenderType_BoostwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoostwatchComponent_0", function() { return View_BoostwatchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoostwatchComponent_Host_0", function() { return View_BoostwatchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoostwatchComponentNgFactory", function() { return BoostwatchComponentNgFactory; });
/* harmony import */ var _boostwatch_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boostwatch.component.scss.shim.ngstyle */ "./src/app/boostwatch/boostwatch.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/collapse.component.ngfactory */ "./src/app/demos/collapse.component.ngfactory.js");
/* harmony import */ var _demos_collapse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demos/collapse.component */ "./src/app/demos/collapse.component.ts");
/* harmony import */ var _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../demos/accordion.component.ngfactory */ "./src/app/demos/accordion.component.ngfactory.js");
/* harmony import */ var _demos_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../demos/accordion.component */ "./src/app/demos/accordion.component.ts");
/* harmony import */ var _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../demos/modal.component.ngfactory */ "./src/app/demos/modal.component.ngfactory.js");
/* harmony import */ var _demos_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../demos/modal.component */ "./src/app/demos/modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../demos/dropdown.component.ngfactory */ "./src/app/demos/dropdown.component.ngfactory.js");
/* harmony import */ var _demos_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../demos/dropdown.component */ "./src/app/demos/dropdown.component.ts");
/* harmony import */ var _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../demos/tabs.component.ngfactory */ "./src/app/demos/tabs.component.ngfactory.js");
/* harmony import */ var _demos_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../demos/tabs.component */ "./src/app/demos/tabs.component.ts");
/* harmony import */ var _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../demos/pagination.component.ngfactory */ "./src/app/demos/pagination.component.ngfactory.js");
/* harmony import */ var _demos_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../demos/pagination.component */ "./src/app/demos/pagination.component.ts");
/* harmony import */ var _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../demos/tooltip.component.ngfactory */ "./src/app/demos/tooltip.component.ngfactory.js");
/* harmony import */ var _demos_tooltip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../demos/tooltip.component */ "./src/app/demos/tooltip.component.ts");
/* harmony import */ var _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../demos/popover.component.ngfactory */ "./src/app/demos/popover.component.ngfactory.js");
/* harmony import */ var _demos_popover_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../demos/popover.component */ "./src/app/demos/popover.component.ts");
/* harmony import */ var _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../demos/alert.component.ngfactory */ "./src/app/demos/alert.component.ngfactory.js");
/* harmony import */ var _demos_alert_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../demos/alert.component */ "./src/app/demos/alert.component.ts");
/* harmony import */ var _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../demos/swiper.component.ngfactory */ "./src/app/demos/swiper.component.ngfactory.js");
/* harmony import */ var _demos_swiper_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../demos/swiper.component */ "./src/app/demos/swiper.component.ts");
/* harmony import */ var _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../demos/progress-bar.component.ngfactory */ "./src/app/demos/progress-bar.component.ngfactory.js");
/* harmony import */ var _demos_progress_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../demos/progress-bar.component */ "./src/app/demos/progress-bar.component.ts");
/* harmony import */ var _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../demos/o-switch.component.ngfactory */ "./src/app/demos/o-switch.component.ngfactory.js");
/* harmony import */ var _demos_o_switch_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../demos/o-switch.component */ "./src/app/demos/o-switch.component.ts");
/* harmony import */ var _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../demos/o-toggle.component.ngfactory */ "./src/app/demos/o-toggle.component.ngfactory.js");
/* harmony import */ var _demos_o_toggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../demos/o-toggle.component */ "./src/app/demos/o-toggle.component.ts");
/* harmony import */ var _boostwatch_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./boostwatch.component */ "./src/app/boostwatch/boostwatch.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var styles_BoostwatchComponent = ["[_nghost-%COMP%]     #no_borders .tab-content {\n                    border: none;\n                }", _boostwatch_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BoostwatchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BoostwatchComponent, data: {} });

function View_BoostwatchComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, null); }
function View_BoostwatchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 110, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Collapse"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/collapse"], ["title", "go to collpase documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "demo-collapse", [], null, null, null, _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_DemoCollapse_0"], _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_DemoCollapse"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _demos_collapse_component__WEBPACK_IMPORTED_MODULE_5__["DemoCollapse"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Accordions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/accordion"], ["title", "go to accordion documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "demo-accordion", [], null, null, null, _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DemoAccordion_0"], _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DemoAccordion"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _demos_accordion_component__WEBPACK_IMPORTED_MODULE_7__["DemoAccordion"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Modal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/modal"], ["title", "go to modal documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "demo-modal", [], null, null, null, _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_DemoModal_0"], _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_DemoModal"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _demos_modal_component__WEBPACK_IMPORTED_MODULE_9__["DemoModal"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0, null, View_BoostwatchComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dropdown"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/dropdown"], ["title", "go to dropdown documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "demo-dropdown", [], null, null, null, _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DemoDropdown_0"], _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DemoDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 49152, null, 0, _demos_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["DemoDropdown"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 11, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tabs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/tabs"], ["title", "go to tabs documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "demo-tabs", [], null, null, null, _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DemoTabs_0"], _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DemoTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 49152, null, 0, _demos_tabs_component__WEBPACK_IMPORTED_MODULE_14__["DemoTabs"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Without borders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "demo-tabs", [["id", "no_borders"]], null, null, null, _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_DemoTabs_0"], _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_DemoTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 49152, null, 0, _demos_tabs_component__WEBPACK_IMPORTED_MODULE_14__["DemoTabs"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pagination"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/pagination"], ["title", "go to pagination documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "demo-pagination", [], null, null, null, _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DemoPagination_0"], _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DemoPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 49152, null, 0, _demos_pagination_component__WEBPACK_IMPORTED_MODULE_16__["DemoPagination"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tooltip"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/tooltip"], ["title", "go to tooltip documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "demo-tooltip", [], null, null, null, _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_DemoTooltip_0"], _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_DemoTooltip"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 49152, null, 0, _demos_tooltip_component__WEBPACK_IMPORTED_MODULE_18__["DemoTooltip"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Popover"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/popover"], ["title", "go to popover documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "demo-popover", [], null, null, null, _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_DemoPopover_0"], _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_DemoPopover"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 49152, null, 0, _demos_popover_component__WEBPACK_IMPORTED_MODULE_20__["DemoPopover"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Alert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/alert"], ["title", "go to alert documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "demo-alert", [], null, null, null, _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_DemoAlert_0"], _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_DemoAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 0, _demos_alert_component__WEBPACK_IMPORTED_MODULE_22__["DemoAlert"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Swiper"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/swiper"], ["title", "go to swiper documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "demo-swiper", [], null, null, null, _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_DemoSwiper_0"], _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_DemoSwiper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 49152, null, 0, _demos_swiper_component__WEBPACK_IMPORTED_MODULE_24__["DemoSwiper"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Progress Bar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/progress"], ["title", "go to progress documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "demo-progress-bar", [], null, null, null, _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_DemoProgressBar_0"], _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_DemoProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 49152, null, 0, _demos_progress_bar_component__WEBPACK_IMPORTED_MODULE_26__["DemoProgressBar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Orange Switch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/o-switch"], ["title", "go to orange switch documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 1, "demo-o-switch", [], null, null, null, _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_DemoOSwitch_0"], _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_DemoOSwitch"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 49152, null, 0, _demos_o_switch_component__WEBPACK_IMPORTED_MODULE_28__["DemoOSwitch"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Orange Toggle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 2, "a", [["class", "doc-link"], ["routerLink", "/documentation/o-toggle"], ["title", "go to orange toggle documentation page"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 0, "span", [["class", "icon-Forward-curved-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 1, "demo-o-toggle", [], null, null, null, _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_DemoOToggle_0"], _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_DemoOToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 49152, null, 0, _demos_o_toggle_component__WEBPACK_IMPORTED_MODULE_30__["DemoOToggle"], [], null, null)], function (_ck, _v) { var currVal_2 = "/documentation/collapse"; _ck(_v, 6, 0, currVal_2); var currVal_5 = "/documentation/accordion"; _ck(_v, 15, 0, currVal_5); var currVal_8 = "/documentation/modal"; _ck(_v, 22, 0, currVal_8); var currVal_11 = "/documentation/dropdown"; _ck(_v, 32, 0, currVal_11); var currVal_14 = "/documentation/tabs"; _ck(_v, 41, 0, currVal_14); var currVal_17 = "/documentation/pagination"; _ck(_v, 52, 0, currVal_17); var currVal_20 = "/documentation/tooltip"; _ck(_v, 59, 0, currVal_20); var currVal_23 = "/documentation/popover"; _ck(_v, 66, 0, currVal_23); var currVal_26 = "/documentation/alert"; _ck(_v, 75, 0, currVal_26); var currVal_29 = "/documentation/swiper"; _ck(_v, 84, 0, currVal_29); var currVal_32 = "/documentation/progress"; _ck(_v, 93, 0, currVal_32); var currVal_35 = "/documentation/o-switch"; _ck(_v, 100, 0, currVal_35); var currVal_38 = "/documentation/o-toggle"; _ck(_v, 107, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).href; _ck(_v, 21, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).href; _ck(_v, 31, 0, currVal_9, currVal_10); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).href; _ck(_v, 40, 0, currVal_12, currVal_13); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).target; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).href; _ck(_v, 51, 0, currVal_15, currVal_16); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).target; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).href; _ck(_v, 58, 0, currVal_18, currVal_19); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).href; _ck(_v, 65, 0, currVal_21, currVal_22); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).target; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).href; _ck(_v, 74, 0, currVal_24, currVal_25); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).target; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).href; _ck(_v, 83, 0, currVal_27, currVal_28); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).target; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).href; _ck(_v, 92, 0, currVal_30, currVal_31); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).target; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).href; _ck(_v, 99, 0, currVal_33, currVal_34); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).target; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 107).href; _ck(_v, 106, 0, currVal_36, currVal_37); }); }
function View_BoostwatchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-boostwatch", [], null, null, null, View_BoostwatchComponent_0, RenderType_BoostwatchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _boostwatch_component__WEBPACK_IMPORTED_MODULE_31__["BoostwatchComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BoostwatchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-boostwatch", _boostwatch_component__WEBPACK_IMPORTED_MODULE_31__["BoostwatchComponent"], View_BoostwatchComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/boostwatch/boostwatch.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/boostwatch/boostwatch.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb3N0d2F0Y2gvYm9vc3R3YXRjaC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/boostwatch/boostwatch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/boostwatch/boostwatch.component.ts ***!
  \****************************************************/
/*! exports provided: BoostwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoostwatchComponent", function() { return BoostwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BoostwatchComponent = /** @class */ (function () {
    function BoostwatchComponent() {
    }
    BoostwatchComponent.prototype.ngOnInit = function () {
    };
    return BoostwatchComponent;
}());



/***/ }),

/***/ "./src/app/demos/accordion.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/demos/accordion.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_DemoAccordion, View_DemoAccordion_0, View_DemoAccordion_Host_0, DemoAccordionNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoAccordion", function() { return RenderType_DemoAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoAccordion_0", function() { return View_DemoAccordion_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoAccordion_Host_0", function() { return View_DemoAccordion_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAccordionNgFactory", function() { return DemoAccordionNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.component */ "./src/app/demos/accordion.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoAccordion = [];
var RenderType_DemoAccordion = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoAccordion, data: {} });

function View_DemoAccordion_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "]))], null, null); }
function View_DemoAccordion_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "]))], null, null); }
function View_DemoAccordion_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "]))], null, null); }
function View_DemoAccordion_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 23, "ngb-accordion", [["activeIds", "ngb-panel-0"], ["class", "accordion"], ["role", "tablist"]], [[1, "aria-multiselectable", 0]], null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbAccordion_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbAccordion"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]], { activeIds: [0, "activeIds"], closeOtherPanels: [1, "closeOtherPanels"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { panels: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "ngb-panel", [["title", "Panel 1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 2113536, [[1, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { headerTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoAccordion_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[4, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 6, "ngb-panel", [["title", "Panel 2"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 2113536, [[1, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { headerTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoAccordion_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, [[7, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "ngb-panel", [["title", "Panel 3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 2113536, [[1, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { headerTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoAccordion_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, [[10, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_1 = "ngb-panel-0"; var currVal_2 = true; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = "Panel 1"; _ck(_v, 4, 0, currVal_3); var currVal_4 = "Panel 2"; _ck(_v, 11, 0, currVal_4); var currVal_5 = "Panel 3"; _ck(_v, 18, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).closeOtherPanels; _ck(_v, 0, 0, currVal_0); }); }
function View_DemoAccordion_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-accordion", [], null, null, null, View_DemoAccordion_0, RenderType_DemoAccordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _accordion_component__WEBPACK_IMPORTED_MODULE_3__["DemoAccordion"], [], null, null)], null, null); }
var DemoAccordionNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-accordion", _accordion_component__WEBPACK_IMPORTED_MODULE_3__["DemoAccordion"], View_DemoAccordion_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/accordion.component.ts":
/*!**********************************************!*\
  !*** ./src/app/demos/accordion.component.ts ***!
  \**********************************************/
/*! exports provided: DemoAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAccordion", function() { return DemoAccordion; });
var DemoAccordion = /** @class */ (function () {
    function DemoAccordion() {
    }
    return DemoAccordion;
}());



/***/ }),

/***/ "./src/app/demos/alert.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/demos/alert.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_DemoAlert, View_DemoAlert_0, View_DemoAlert_Host_0, DemoAlertNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoAlert", function() { return RenderType_DemoAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoAlert_0", function() { return View_DemoAlert_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoAlert_Host_0", function() { return View_DemoAlert_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAlertNgFactory", function() { return DemoAlertNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.component */ "./src/app/demos/alert.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DemoAlert = [];
var RenderType_DemoAlert = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoAlert, data: {} });

function View_DemoAlert_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "ngb-alert", [["class", "alert"], ["role", "alert"]], [[2, "alert-dismissible", null]], [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeAlert(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbAlert_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 638976, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { type: [0, "type"] }, { close: "close" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, ["", ""]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.type; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).dismissible; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.message; _ck(_v, 3, 0, currVal_2); }); }
function View_DemoAlert_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DemoAlert_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reset"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.alerts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_DemoAlert_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-alert", [], null, null, null, View_DemoAlert_0, RenderType_DemoAlert)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _alert_component__WEBPACK_IMPORTED_MODULE_4__["DemoAlert"], [], null, null)], null, null); }
var DemoAlertNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-alert", _alert_component__WEBPACK_IMPORTED_MODULE_4__["DemoAlert"], View_DemoAlert_Host_0, { alerts: "alerts" }, {}, []);



/***/ }),

/***/ "./src/app/demos/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/demos/alert.component.ts ***!
  \******************************************/
/*! exports provided: DemoAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAlert", function() { return DemoAlert; });
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
    return DemoAlert;
}());



/***/ }),

/***/ "./src/app/demos/carousel.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/carousel.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoCarousel, View_DemoCarousel_0, View_DemoCarousel_Host_0, DemoCarouselNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoCarousel", function() { return RenderType_DemoCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoCarousel_0", function() { return View_DemoCarousel_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoCarousel_Host_0", function() { return View_DemoCarousel_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCarouselNgFactory", function() { return DemoCarouselNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel.component */ "./src/app/demos/carousel.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DemoCarousel = [".icon-Pause[_ngcontent-%COMP%] {\n        content: \"eabc\";\n    }\n    .icon-Play[_ngcontent-%COMP%] {\n        content: \"eac9\";\n    }"];
var RenderType_DemoCarousel = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoCarousel, data: {} });

function View_DemoCarousel_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/600x400/cccccc/000000"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["First slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nulla vitae elit libero, a pharetra augue mollis interdum."]))], null, null); }
function View_DemoCarousel_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "Random second slide"], ["src", "https://dummyimage.com/600x400/cccccc/000000"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Second slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]))], null, null); }
function View_DemoCarousel_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "Random third slide"], ["src", "https://dummyimage.com/600x400/cccccc/000000"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Third slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."]))], null, null); }
function View_DemoCarousel_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "Random fourth slide"], ["src", "https://dummyimage.com/600x400/cccccc/000000"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "carousel-caption"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Fourth slide label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."]))], null, null); }
function View_DemoCarousel_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { carousel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 10, "ngb-carousel", [["class", "carousel slide"], ["tabIndex", "0"]], [[4, "display", null]], [[null, "focus"], [null, "blur"], [null, "mouseenter"], [null, "mouseleave"], [null, "keydown.arrowLeft"], [null, "keydown.arrowRight"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).pauseOnHover && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).pause()) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).pauseOnHover && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).cycle()) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.arrowLeft" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).prev()) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.arrowRight" === en)) {
        var pd_3 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).keyboard && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).next()) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_co.onFocus() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_co.onBlur() !== false);
        ad = (pd_5 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbCarousel_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbCarousel"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 3850240, [[1, 4], ["carousel", 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { slides: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoCarousel_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoCarousel_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, [[2, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoCarousel_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[2, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoCarousel_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, [[2, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "div", [["aria-label", "Carousel toggle controls"], ["class", "btn-group"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "button", [["class", "btn btn-outline-dark btn-sm"], ["id", "changeState"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeState() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "btn btn-outline-dark btn-sm"; var currVal_3 = (!_co.pause ? "icon-Pause" : "icon-Play"); _ck(_v, 14, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = "block"; _ck(_v, 1, 0, currVal_0); var currVal_1 = (!_co.pause ? "set Pause" : "set Play"); _ck(_v, 13, 0, currVal_1); }); }
function View_DemoCarousel_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "demo-carousel", [], null, [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onMouseEnter() !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onMouseLeave() !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_DemoCarousel_0, RenderType_DemoCarousel)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _carousel_component__WEBPACK_IMPORTED_MODULE_4__["DemoCarousel"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var DemoCarouselNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-carousel", _carousel_component__WEBPACK_IMPORTED_MODULE_4__["DemoCarousel"], View_DemoCarousel_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/carousel.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/carousel.component.ts ***!
  \*********************************************/
/*! exports provided: DemoCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCarousel", function() { return DemoCarousel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");


var DemoCarousel = /** @class */ (function () {
    function DemoCarousel(config) {
        config.interval = 1500;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    DemoCarousel.prototype.changeState = function () {
        if (!this.pause) {
            this.carousel.interval = 0;
            this.carousel.pause();
            this.pause = !this.pause;
        }
        else {
            this.carousel.interval = 1500;
            this.carousel.cycle();
            this.pause = !this.pause;
        }
    };
    DemoCarousel.prototype.ngOnInit = function () {
        this.pause = false;
    };
    DemoCarousel.prototype.onFocus = function () {
        this.carousel.interval = 0;
        this.carousel.pause();
        this.pause = !this.pause;
    };
    DemoCarousel.prototype.onBlur = function () {
        this.carousel.interval = 1500;
        this.carousel.cycle();
        this.pause = !this.pause;
    };
    DemoCarousel.prototype.onMouseEnter = function () {
        this.carousel.pause();
        this.pause = !this.pause;
    };
    DemoCarousel.prototype.onMouseLeave = function () {
        this.carousel.cycle();
        this.pause = !this.pause;
    };
    return DemoCarousel;
}());



/***/ }),

/***/ "./src/app/demos/collapse.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/collapse.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoCollapse, View_DemoCollapse_0, View_DemoCollapse_Host_0, DemoCollapseNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoCollapse", function() { return RenderType_DemoCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoCollapse_0", function() { return View_DemoCollapse_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoCollapse_Host_0", function() { return View_DemoCollapse_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCollapseNgFactory", function() { return DemoCollapseNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _collapse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse.component */ "./src/app/demos/collapse.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_DemoCollapse = [];
var RenderType_DemoCollapse = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoCollapse, data: {} });

function View_DemoCollapse_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], [[1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isCollapsed = !_co.isCollapsed) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toggle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["id", "collapse1"]], [[2, "collapse", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], [], { collapsed: [0, "collapsed"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" You can collapse this card by clicking Toggle "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.isCollapsed; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed; var currVal_1 = "collapse1"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = true; var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).collapsed; _ck(_v, 3, 0, currVal_2, currVal_3); }); }
function View_DemoCollapse_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-collapse", [], null, null, null, View_DemoCollapse_0, RenderType_DemoCollapse)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _collapse_component__WEBPACK_IMPORTED_MODULE_2__["DemoCollapse"], [], null, null)], null, null); }
var DemoCollapseNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-collapse", _collapse_component__WEBPACK_IMPORTED_MODULE_2__["DemoCollapse"], View_DemoCollapse_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/collapse.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/collapse.component.ts ***!
  \*********************************************/
/*! exports provided: DemoCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCollapse", function() { return DemoCollapse; });
var DemoCollapse = /** @class */ (function () {
    function DemoCollapse() {
        this.isCollapsed = false;
    }
    return DemoCollapse;
}());



/***/ }),

/***/ "./src/app/demos/dropdown.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/dropdown.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoDropdown, View_DemoDropdown_0, View_DemoDropdown_Host_0, DemoDropdownNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoDropdown", function() { return RenderType_DemoDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoDropdown_0", function() { return View_DemoDropdown_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoDropdown_Host_0", function() { return View_DemoDropdown_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDropdownNgFactory", function() { return DemoDropdownNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/demos/dropdown.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DemoDropdown = [".dropdown-item.focus[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:focus {\n      color: #fff;\n      text-decoration: none;\n      background-color: #000;\n      }"];
var RenderType_DemoDropdown = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoDropdown, data: {} });

function View_DemoDropdown_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "div", [["class", "d-inline-block"], ["ngbDropdown", ""]], [[2, "show", null]], [[null, "openChange"]], function (_v, en, $event) { var ad = true; if (("openChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleDropdownFocus($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4210688, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_1__["ODropdownDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 737280, null, 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵm"]]], null, { openChange: "openChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { _menuElement: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { _anchor: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "button", [["aria-haspopup", "true"], ["class", "btn btn-info dropdown-toggle"], ["id", "dropdownMenu1"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown.ArrowUp" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.ArrowDown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.Home" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.onKeyDown($event) !== false);
        ad = (pd_3 && ad);
    } if (("keydown.End" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.onKeyDown($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toggle dropdown"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, [[2, 0]], null, 11, "div", [["aria-labelledby", "dropdownMenu1"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"]], function (_v, en, $event) { var ad = true; if (("keydown.ArrowUp" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.ArrowDown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.Home" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.End" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_3 && ad);
    } if (("keydown.Enter" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_4 && ad);
    } if (("keydown.Space" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, [[1, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { menuItems: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "button", [["class", "dropdown-item"], ["ngbDropdownItem", ""]], [[2, "disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, [[4, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Action - 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "button", [["class", "dropdown-item"], ["ngbDropdownItem", ""]], [[2, "disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, [[4, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Another Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "button", [["class", "dropdown-item"], ["ngbDropdownItem", ""]], [[2, "disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, [[4, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Something else is here"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isOpen(); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).dropdown.isOpen(); _ck(_v, 6, 0, currVal_1); var currVal_2 = true; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).dropdown.isOpen(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).placement; _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).disabled; _ck(_v, 13, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).disabled; _ck(_v, 16, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).disabled; _ck(_v, 19, 0, currVal_7); }); }
function View_DemoDropdown_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-dropdown", [], null, null, null, View_DemoDropdown_0, RenderType_DemoDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DemoDropdown"], [], null, null)], null, null); }
var DemoDropdownNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-dropdown", _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DemoDropdown"], View_DemoDropdown_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/dropdown.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/dropdown.component.ts ***!
  \*********************************************/
/*! exports provided: DemoDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDropdown", function() { return DemoDropdown; });
var DemoDropdown = /** @class */ (function () {
    function DemoDropdown() {
    }
    return DemoDropdown;
}());



/***/ }),

/***/ "./src/app/demos/modal.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/demos/modal.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_DemoModal, View_DemoModal_0, View_DemoModal_Host_0, DemoModalNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoModal", function() { return RenderType_DemoModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoModal_0", function() { return View_DemoModal_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoModal_Host_0", function() { return View_DemoModal_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModalNgFactory", function() { return DemoModalNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./src/app/demos/modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_DemoModal = [];
var RenderType_DemoModal = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoModal, data: {} });

function View_DemoModal_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title"], ["id", "modal-basic-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Modal title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.dismiss("Cross click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["One fine body\u2026"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "button", [["class", "btn btn-secondary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.close("Close click") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Close"]))], null, null); }
function View_DemoModal_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["content", 2]], null, 0, null, View_DemoModal_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.open(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Open modal"]))], null, null); }
function View_DemoModal_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-modal", [], null, null, null, View_DemoModal_0, RenderType_DemoModal)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _modal_component__WEBPACK_IMPORTED_MODULE_1__["DemoModal"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]], null, null)], null, null); }
var DemoModalNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-modal", _modal_component__WEBPACK_IMPORTED_MODULE_1__["DemoModal"], View_DemoModal_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/demos/modal.component.ts ***!
  \******************************************/
/*! exports provided: DemoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModal", function() { return DemoModal; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

var DemoModal = /** @class */ (function () {
    function DemoModal(modalService) {
        this.modalService = modalService;
    }
    DemoModal.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DemoModal.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return DemoModal;
}());



/***/ }),

/***/ "./src/app/demos/o-calendar.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/demos/o-calendar.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_DemoOCalendar, View_DemoOCalendar_0, View_DemoOCalendar_Host_0, DemoOCalendarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoOCalendar", function() { return RenderType_DemoOCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOCalendar_0", function() { return View_DemoOCalendar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOCalendar_Host_0", function() { return View_DemoOCalendar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOCalendarNgFactory", function() { return DemoOCalendarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ng-boosted/ng-boosted.ngfactory */ "./node_modules/ng-boosted/ng-boosted.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-calendar.component */ "./src/app/demos/o-calendar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_DemoOCalendar = [];
var RenderType_DemoOCalendar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoOCalendar, data: {} });

function View_DemoOCalendar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "lib-o-calendar", [], null, [[null, "childEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("childEvent" === en)) {
        var pd_0 = ((_co.model = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCalendarComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCalendarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], ng_boosted__WEBPACK_IMPORTED_MODULE_3__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_3__["OCalendarComponent"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]], { color: [0, "color"], labelButton: [1, "labelButton"], labelInput: [2, "labelInput"], labelFooterToday: [3, "labelFooterToday"], labelFooterClose: [4, "labelFooterClose"], placeHolder: [5, "placeHolder"] }, { childEvent: "childEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, ["Model: ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], [])], function (_ck, _v) { var currVal_0 = "black"; var currVal_1 = "Open Calendar"; var currVal_2 = "Calendar"; var currVal_3 = "Today"; var currVal_4 = "Close"; var currVal_5 = "Une date (jj/mm/aaa)"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform(_co.model)); _ck(_v, 5, 0, currVal_6); }); }
function View_DemoOCalendar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "demo-o-calendar", [], null, null, null, View_DemoOCalendar_0, RenderType_DemoOCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["I18n"], _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["I18n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CustomDatepickerI18n"], [_o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["I18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["DemoOCalendar"], [], null, null)], null, null); }
var DemoOCalendarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-o-calendar", _o_calendar_component__WEBPACK_IMPORTED_MODULE_5__["DemoOCalendar"], View_DemoOCalendar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/o-calendar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/demos/o-calendar.component.ts ***!
  \***********************************************/
/*! exports provided: I18n, CustomDatepickerI18n, DemoOCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOCalendar", function() { return DemoOCalendar; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDatepickerI18n"]));

var DemoOCalendar = /** @class */ (function () {
    function DemoOCalendar() {
    }
    return DemoOCalendar;
}());



/***/ }),

/***/ "./src/app/demos/o-navbar.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/o-navbar.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoONavbar, View_DemoONavbar_0, View_DemoONavbar_Host_0, DemoONavbarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoONavbar", function() { return RenderType_DemoONavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoONavbar_0", function() { return View_DemoONavbar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoONavbar_Host_0", function() { return View_DemoONavbar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoONavbarNgFactory", function() { return DemoONavbarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ng-boosted/ng-boosted.ngfactory */ "./node_modules/ng-boosted/ng-boosted.ngfactory.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _o_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-navbar.component */ "./src/app/demos/o-navbar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_DemoONavbar = [];
var RenderType_DemoONavbar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoONavbar, data: {} });

function View_DemoONavbar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 30, "lib-o-navbar", [["brandLabel", "Back to home page"], ["brandPath", "assets/img/orange-logo.jpg"], ["breakpoint", "sm"], ["homeRoute", "/start"]], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ONavbarComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ONavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["ONavbarComponent"], [], { homeRoute: [0, "homeRoute"], breakpoint: [1, "breakpoint"], brandPath: [2, "brandPath"], brandLabel: [3, "brandLabel"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 3, "li", [["o-nav-link", ""], ["route", "/documentation"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["ONavLinkComponent"], [], { route: [0, "route"], query: [1, "query"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { id: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Getting started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 4, "li", [["o-nav-link", ""], ["route", "/start"], ["title", "Shop"]], [[2, "nav-item", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ONavLinkComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ONavLinkComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 311296, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["ONavLinkComponent"], [], { route: [0, "route"], title: [1, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["basket"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 0, 0, "span", [["aria-hidden", "true"], ["class", "icon-buy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 16, "li", [["class", "nav-item dropdown"], ["ngbDropdown", ""]], [[2, "show", null]], [[null, "openChange"]], function (_v, en, $event) { var ad = true; if (("openChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).handleDropdownFocus($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 4210688, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["ODropdownDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 737280, null, 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵm"]]], null, { openChange: "openChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { _menuElement: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { _anchor: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "a", [["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle"], ["id", "dropdownBasic1"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown.ArrowUp" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.ArrowDown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.Home" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.onKeyDown($event) !== false);
        ad = (pd_3 && ad);
    } if (("keydown.End" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.onKeyDown($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Contribute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, [[2, 0]], null, 6, "div", [["aria-labelledby", "dropdownBasic1"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"]], function (_v, en, $event) { var ad = true; if (("keydown.ArrowUp" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.ArrowDown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.Home" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.End" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_3 && ad);
    } if (("keydown.Enter" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_4 && ad);
    } if (("keydown.Space" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.onKeyDown($event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, [[1, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { menuItems: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "a", [["class", "dropdown-item"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Github"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "a", [["class", "dropdown-item"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["About Markdown"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, 0, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "http://orange.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["External link"]))], function (_ck, _v) { var currVal_0 = "/start"; var currVal_1 = "sm"; var currVal_2 = "assets/img/orange-logo.jpg"; var currVal_3 = "Back to home page"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_5 = "/documentation"; var currVal_6 = _ck(_v, 4, 0, "my_id"); _ck(_v, 3, 0, currVal_5, currVal_6); var currVal_8 = "/start"; var currVal_9 = "Shop"; _ck(_v, 7, 0, currVal_8, currVal_9); _ck(_v, 13, 0); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).route; _ck(_v, 2, 0, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).route; _ck(_v, 6, 0, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).isOpen(); _ck(_v, 11, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).dropdown.isOpen(); _ck(_v, 17, 0, currVal_11); var currVal_12 = true; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).dropdown.isOpen(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).placement; _ck(_v, 21, 0, currVal_12, currVal_13, currVal_14); }); }
function View_DemoONavbar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-o-navbar", [], null, null, null, View_DemoONavbar_0, RenderType_DemoONavbar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _o_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DemoONavbar"], [], null, null)], null, null); }
var DemoONavbarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-o-navbar", _o_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DemoONavbar"], View_DemoONavbar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/o-navbar.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/o-navbar.component.ts ***!
  \*********************************************/
/*! exports provided: DemoONavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoONavbar", function() { return DemoONavbar; });
var DemoONavbar = /** @class */ (function () {
    function DemoONavbar() {
    }
    return DemoONavbar;
}());



/***/ }),

/***/ "./src/app/demos/o-switch.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/o-switch.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoOSwitch, View_DemoOSwitch_0, View_DemoOSwitch_Host_0, DemoOSwitchNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoOSwitch", function() { return RenderType_DemoOSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOSwitch_0", function() { return View_DemoOSwitch_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOSwitch_Host_0", function() { return View_DemoOSwitch_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOSwitchNgFactory", function() { return DemoOSwitchNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ng-boosted/ng-boosted.ngfactory */ "./node_modules/ng-boosted/ng-boosted.ngfactory.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _o_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./o-switch.component */ "./src/app/demos/o-switch.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoOSwitch = ["label[_ngcontent-%COMP%] {\n            font-weight: bold;\n        }"];
var RenderType_DemoOSwitch = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoOSwitch, data: {} });

function View_DemoOSwitch_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "label", [["class", "col-form-label col-md-3 col-8"], ["for", "checkbox1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Default"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "lib-o-switch", [["inputId", "checkbox1"]], [[2, "o-switch", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OSwitchComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OSwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OSwitchComponent"], [], { inputId: [0, "inputId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "label", [["class", "col-form-label col-md-3 col-8"], ["for", "checkbox2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Toggled on init"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "lib-o-switch", [["inputId", "checkbox2"], ["toggled", "false"]], [[2, "o-switch", null]], [[null, "isChecked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("isChecked" === en)) {
        var pd_0 = (_co.getCheck($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OSwitchComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OSwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OSwitchComponent"], [], { inputId: [0, "inputId"], toggled: [1, "toggled"] }, { isChecked: "isChecked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "label", [["class", "col-form-label col-md-3 col-8"], ["for", "checkbox3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rounded success variant"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "lib-o-switch", [["customWidth", "76px"], ["inputId", "checkbox3"], ["offLabel", "Off"], ["onLabel", "On"], ["rounded", "true"], ["successColor", "true"], ["toggled", "true"]], [[2, "o-switch", null]], null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OSwitchComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OSwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 49152, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OSwitchComponent"], [], { inputId: [0, "inputId"], toggled: [1, "toggled"], rounded: [2, "rounded"], successColor: [3, "successColor"], customWidth: [4, "customWidth"], onLabel: [5, "onLabel"], offLabel: [6, "offLabel"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](18, null, ["Toggled on Init: ", ""]))], function (_ck, _v) { var currVal_1 = "checkbox1"; _ck(_v, 5, 0, currVal_1); var currVal_3 = "checkbox2"; var currVal_4 = "false"; _ck(_v, 10, 0, currVal_3, currVal_4); var currVal_6 = "checkbox3"; var currVal_7 = "true"; var currVal_8 = "true"; var currVal_9 = "true"; var currVal_10 = "76px"; var currVal_11 = "On"; var currVal_12 = "Off"; _ck(_v, 15, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).inputId; _ck(_v, 4, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).inputId; _ck(_v, 9, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).inputId; _ck(_v, 14, 0, currVal_5); var currVal_13 = _co.checked; _ck(_v, 18, 0, currVal_13); }); }
function View_DemoOSwitch_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-o-switch", [], null, null, null, View_DemoOSwitch_0, RenderType_DemoOSwitch)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _o_switch_component__WEBPACK_IMPORTED_MODULE_3__["DemoOSwitch"], [], null, null)], null, null); }
var DemoOSwitchNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-o-switch", _o_switch_component__WEBPACK_IMPORTED_MODULE_3__["DemoOSwitch"], View_DemoOSwitch_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/o-switch.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/o-switch.component.ts ***!
  \*********************************************/
/*! exports provided: DemoOSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOSwitch", function() { return DemoOSwitch; });
var DemoOSwitch = /** @class */ (function () {
    function DemoOSwitch() {
    }
    DemoOSwitch.prototype.getCheck = function (check) {
        this.checked = check;
    };
    return DemoOSwitch;
}());



/***/ }),

/***/ "./src/app/demos/o-toggle.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/demos/o-toggle.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DemoOToggle, View_DemoOToggle_0, View_DemoOToggle_Host_0, DemoOToggleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoOToggle", function() { return RenderType_DemoOToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOToggle_0", function() { return View_DemoOToggle_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoOToggle_Host_0", function() { return View_DemoOToggle_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOToggleNgFactory", function() { return DemoOToggleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _o_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./o-toggle.component */ "./src/app/demos/o-toggle.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoOToggle = ["h4[_ngcontent-%COMP%] {\n            margin-top: 2.5rem;\n        }"];
var RenderType_DemoOToggle = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoOToggle, data: {} });

function View_DemoOToggle_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, "div", [["class", "btn-group btn-group-toggle o-switch"], ["name", "radioBasic"], ["ngbRadioGroup", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.model = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Without Outline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 20, "div", [["class", "btn-group btn-group-toggle o-switch no-outline"], ["name", "radioBasic2"], ["ngbRadioGroup", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.model2 = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "label", [["class", "btn-secondary"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).onChange() !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).focused = true) !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = ((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).focused = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 147456, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 3 "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "radioBasic"; _ck(_v, 1, 0, currVal_7); var currVal_8 = "radioBasic"; var currVal_9 = _co.model; _ck(_v, 3, 0, currVal_8, currVal_9); var currVal_17 = 1; _ck(_v, 9, 0, currVal_17); var currVal_25 = 2; _ck(_v, 14, 0, currVal_25); var currVal_33 = 3; _ck(_v, 19, 0, currVal_33); var currVal_41 = "radioBasic2"; _ck(_v, 24, 0, currVal_41); var currVal_42 = "radioBasic2"; var currVal_43 = _co.model2; _ck(_v, 26, 0, currVal_42, currVal_43); var currVal_51 = 1; _ck(_v, 32, 0, currVal_51); var currVal_59 = 2; _ck(_v, 37, 0, currVal_59); var currVal_67 = 3; _ck(_v, 42, 0, currVal_67); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = true; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).active; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).disabled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).focused; _ck(_v, 6, 0, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).checked; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).disabled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).nameAttr; _ck(_v, 8, 0, currVal_14, currVal_15, currVal_16); var currVal_18 = true; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).active; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).disabled; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).focused; _ck(_v, 11, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).checked; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).disabled; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).nameAttr; _ck(_v, 13, 0, currVal_22, currVal_23, currVal_24); var currVal_26 = true; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).active; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).disabled; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).focused; _ck(_v, 16, 0, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).checked; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).disabled; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).nameAttr; _ck(_v, 18, 0, currVal_30, currVal_31, currVal_32); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_44 = true; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).active; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).disabled; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).focused; _ck(_v, 29, 0, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).checked; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).disabled; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).nameAttr; _ck(_v, 31, 0, currVal_48, currVal_49, currVal_50); var currVal_52 = true; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).active; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).disabled; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).focused; _ck(_v, 34, 0, currVal_52, currVal_53, currVal_54, currVal_55); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).checked; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).disabled; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).nameAttr; _ck(_v, 36, 0, currVal_56, currVal_57, currVal_58); var currVal_60 = true; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).active; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).focused; _ck(_v, 39, 0, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).checked; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).disabled; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).nameAttr; _ck(_v, 41, 0, currVal_64, currVal_65, currVal_66); }); }
function View_DemoOToggle_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-o-toggle", [], null, null, null, View_DemoOToggle_0, RenderType_DemoOToggle)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _o_toggle_component__WEBPACK_IMPORTED_MODULE_3__["DemoOToggle"], [], null, null)], null, null); }
var DemoOToggleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-o-toggle", _o_toggle_component__WEBPACK_IMPORTED_MODULE_3__["DemoOToggle"], View_DemoOToggle_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/o-toggle.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demos/o-toggle.component.ts ***!
  \*********************************************/
/*! exports provided: DemoOToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoOToggle", function() { return DemoOToggle; });
var DemoOToggle = /** @class */ (function () {
    function DemoOToggle() {
        // define which radio is toggled on init
        this.model = 2;
        this.model2 = 1;
    }
    return DemoOToggle;
}());



/***/ }),

/***/ "./src/app/demos/pagination.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/demos/pagination.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_DemoPagination, View_DemoPagination_0, View_DemoPagination_Host_0, DemoPaginationNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoPagination", function() { return RenderType_DemoPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPagination_0", function() { return View_DemoPagination_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPagination_Host_0", function() { return View_DemoPagination_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPaginationNgFactory", function() { return DemoPaginationNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/app/demos/pagination.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoPagination = [];
var RenderType_DemoPagination = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoPagination, data: {} });

function View_DemoPagination_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_DemoPagination_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_DemoPagination_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "ngb-pagination", [["aria-label", "Pagination"], ["role", "navigation"]], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = ((_co.page = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbPagination_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 6, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationConfig"]], { collectionSize: [0, "collectionSize"], page: [1, "page"], pageSize: [2, "pageSize"] }, { pageChange: "pageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, { tplEllipsis: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { tplFirst: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { tplLast: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 4, { tplNext: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 5, { tplNumber: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 6, { tplPrevious: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoPagination_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[6, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationPrevious"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoPagination_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, [[4, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationNext"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = 5; var currVal_1 = 1; var currVal_2 = 1; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_DemoPagination_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-pagination", [], null, null, null, View_DemoPagination_0, RenderType_DemoPagination)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _pagination_component__WEBPACK_IMPORTED_MODULE_3__["DemoPagination"], [], null, null)], null, null); }
var DemoPaginationNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-pagination", _pagination_component__WEBPACK_IMPORTED_MODULE_3__["DemoPagination"], View_DemoPagination_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/pagination.component.ts":
/*!***********************************************!*\
  !*** ./src/app/demos/pagination.component.ts ***!
  \***********************************************/
/*! exports provided: DemoPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPagination", function() { return DemoPagination; });
var DemoPagination = /** @class */ (function () {
    function DemoPagination() {
        this.page = 1;
    }
    return DemoPagination;
}());



/***/ }),

/***/ "./src/app/demos/popover.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/demos/popover.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DemoPopover, View_DemoPopover_0, View_DemoPopover_Host_0, DemoPopoverNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoPopover", function() { return RenderType_DemoPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPopover_0", function() { return View_DemoPopover_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoPopover_Host_0", function() { return View_DemoPopover_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPopoverNgFactory", function() { return DemoPopoverNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.component */ "./src/app/demos/popover.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoPopover = ["button[_ngcontent-%COMP%] {\n        margin-right: 0.5rem;\n    }"];
var RenderType_DemoPopover = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoPopover, data: {} });

function View_DemoPopover_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbPopover", "Now click outside to close me !"], ["placement", "top"], ["popoverTitle", "Popover on top"], ["type", "button"]], null, [["document", "click"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).close() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ($event.stopPropagation() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 737280, [["p", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], popoverTitle: [1, "popoverTitle"], placement: [2, "placement"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nPopover on top\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbPopover", "You can't close me by clicking outside, sorry."], ["placement", "bottom"], ["popoverTitle", "Popover on bottom"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], popoverTitle: [1, "popoverTitle"], placement: [2, "placement"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nPopover on bottom\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."], ["placement", "left"], ["popoverTitle", "Popover on left"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], popoverTitle: [1, "popoverTitle"], placement: [2, "placement"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nPopover on left\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."], ["placement", "right"], ["popoverTitle", "Popover on right"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], popoverTitle: [1, "popoverTitle"], placement: [2, "placement"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nPopover on right\n"]))], function (_ck, _v) { var currVal_0 = "Now click outside to close me !"; var currVal_1 = "Popover on top"; var currVal_2 = "top"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = "You can't close me by clicking outside, sorry."; var currVal_4 = "Popover on bottom"; var currVal_5 = "bottom"; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."; var currVal_7 = "Popover on left"; var currVal_8 = "left"; _ck(_v, 7, 0, currVal_6, currVal_7, currVal_8); var currVal_9 = "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."; var currVal_10 = "Popover on right"; var currVal_11 = "right"; _ck(_v, 10, 0, currVal_9, currVal_10, currVal_11); }, null); }
function View_DemoPopover_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-popover", [], null, null, null, View_DemoPopover_0, RenderType_DemoPopover)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _popover_component__WEBPACK_IMPORTED_MODULE_3__["DemoPopover"], [], null, null)], null, null); }
var DemoPopoverNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-popover", _popover_component__WEBPACK_IMPORTED_MODULE_3__["DemoPopover"], View_DemoPopover_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/popover.component.ts":
/*!********************************************!*\
  !*** ./src/app/demos/popover.component.ts ***!
  \********************************************/
/*! exports provided: DemoPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPopover", function() { return DemoPopover; });
var DemoPopover = /** @class */ (function () {
    function DemoPopover() {
    }
    return DemoPopover;
}());



/***/ }),

/***/ "./src/app/demos/progress-bar.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/demos/progress-bar.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_DemoProgressBar, View_DemoProgressBar_0, View_DemoProgressBar_Host_0, DemoProgressBarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoProgressBar", function() { return RenderType_DemoProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoProgressBar_0", function() { return View_DemoProgressBar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoProgressBar_Host_0", function() { return View_DemoProgressBar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoProgressBarNgFactory", function() { return DemoProgressBarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.component */ "./src/app/demos/progress-bar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoProgressBar = [".progress {\n      margin-top: 1rem;\n    }"];
var RenderType_DemoProgressBar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoProgressBar, data: {} });

function View_DemoProgressBar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ngb-progressbar", [["type", "default"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbProgressbar_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbProgressbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"]], { type: [0, "type"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "ngb-progressbar", [["type", "success"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbProgressbar_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbProgressbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"]], { type: [0, "type"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "ngb-progressbar", [["type", "info"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbProgressbar_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbProgressbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"]], { type: [0, "type"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "ngb-progressbar", [["type", "warning"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbProgressbar_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbProgressbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"]], { type: [0, "type"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "ngb-progressbar", [["type", "danger"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbProgressbar_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbProgressbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 49152, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"]], { type: [0, "type"], value: [1, "value"] }, null)], function (_ck, _v) { var currVal_0 = "default"; var currVal_1 = 90; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "success"; var currVal_3 = 25; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "info"; var currVal_5 = 50; _ck(_v, 5, 0, currVal_4, currVal_5); var currVal_6 = "warning"; var currVal_7 = 75; _ck(_v, 7, 0, currVal_6, currVal_7); var currVal_8 = "danger"; var currVal_9 = 100; _ck(_v, 9, 0, currVal_8, currVal_9); }, null); }
function View_DemoProgressBar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-progress-bar", [], null, null, null, View_DemoProgressBar_0, RenderType_DemoProgressBar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["DemoProgressBar"], [], null, null)], null, null); }
var DemoProgressBarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-progress-bar", _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["DemoProgressBar"], View_DemoProgressBar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/progress-bar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demos/progress-bar.component.ts ***!
  \*************************************************/
/*! exports provided: DemoProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoProgressBar", function() { return DemoProgressBar; });
var DemoProgressBar = /** @class */ (function () {
    function DemoProgressBar() {
    }
    return DemoProgressBar;
}());



/***/ }),

/***/ "./src/app/demos/swiper.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/demos/swiper.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_DemoSwiper, View_DemoSwiper_0, View_DemoSwiper_Host_0, DemoSwiperNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoSwiper", function() { return RenderType_DemoSwiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoSwiper_0", function() { return View_DemoSwiper_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoSwiper_Host_0", function() { return View_DemoSwiper_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSwiperNgFactory", function() { return DemoSwiperNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ng-boosted/ng-boosted.ngfactory */ "./node_modules/ng-boosted/ng-boosted.ngfactory.js");
/* harmony import */ var ng_boosted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-boosted */ "./node_modules/ng-boosted/fesm5/ng-boosted.js");
/* harmony import */ var _swiper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper.component */ "./src/app/demos/swiper.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoSwiper = [".swiper-container {\n            width: 37.5rem;\n            margin-left: 0;\n        }"];
var RenderType_DemoSwiper = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoSwiper, data: {} });

function View_DemoSwiper_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "lib-o-carousel-container", [], null, [[null, "mouseenter"], [null, "mouseleave"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onMouseEnter() !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onMouseLeave() !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onFocusIn() !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onFocusOut() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselContainerComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { options: [0, "options"], pauseButton: [1, "pauseButton"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 2, "lib-o-carousel-slide", [], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4243456, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/800x600/cccccc/000000&text=slide+1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 2, "lib-o-carousel-slide", [], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 4243456, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/800x600/cccccc/000000&text=slide+2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 2, "lib-o-carousel-slide", [], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 4243456, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 0, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/800x600/cccccc/000000&text=slide+3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 2, "lib-o-carousel-slide", [], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 4243456, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/800x600/cccccc/000000&text=slide+4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 0, 2, "lib-o-carousel-slide", [], null, null, null, _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_OCarouselComponent_0"], _node_modules_ng_boosted_ng_boosted_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_OCarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 4243456, null, 0, ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng_boosted__WEBPACK_IMPORTED_MODULE_2__["OCarouselContainerComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 0, 0, "img", [["alt", "Random first slide"], ["src", "https://dummyimage.com/800x600/cccccc/000000&text=slide+5"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.example1SwipeOptions; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_DemoSwiper_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-swiper", [], null, null, null, View_DemoSwiper_0, RenderType_DemoSwiper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _swiper_component__WEBPACK_IMPORTED_MODULE_3__["DemoSwiper"], [], null, null)], null, null); }
var DemoSwiperNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-swiper", _swiper_component__WEBPACK_IMPORTED_MODULE_3__["DemoSwiper"], View_DemoSwiper_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/swiper.component.ts":
/*!*******************************************!*\
  !*** ./src/app/demos/swiper.component.ts ***!
  \*******************************************/
/*! exports provided: DemoSwiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSwiper", function() { return DemoSwiper; });
var DemoSwiper = /** @class */ (function () {
    function DemoSwiper() {
        this.example1SwipeOptions = {
            autoplay: {
                delay: 1500,
            },
            slidesPerView: 1,
            loop: true,
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
    return DemoSwiper;
}());



/***/ }),

/***/ "./src/app/demos/tabs.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/demos/tabs.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_DemoTabs, View_DemoTabs_0, View_DemoTabs_Host_0, DemoTabsNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoTabs", function() { return RenderType_DemoTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoTabs_0", function() { return View_DemoTabs_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoTabs_Host_0", function() { return View_DemoTabs_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTabsNgFactory", function() { return DemoTabsNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ "./src/app/demos/tabs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoTabs = [];
var RenderType_DemoTabs = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoTabs, data: {} });

function View_DemoTabs_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."]))], null, null); }
function View_DemoTabs_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit."]))], null, null); }
function View_DemoTabs_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis volutpat quam, non suscipit arcu accumsan at. Aliquam pellentesque. "]))], null, null); }
function View_DemoTabs_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 20, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabsetConfig"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 5, "ngb-tab", [["title", "Home"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoTabs_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 5, "ngb-tab", [["title", "Profile"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoTabs_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 5, "ngb-tab", [["title", "Messages"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_DemoTabs_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, [[7, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = "Home"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "Profile"; _ck(_v, 10, 0, currVal_1); var currVal_2 = "Messages"; _ck(_v, 16, 0, currVal_2); }, null); }
function View_DemoTabs_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-tabs", [], null, null, null, View_DemoTabs_0, RenderType_DemoTabs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _tabs_component__WEBPACK_IMPORTED_MODULE_3__["DemoTabs"], [], null, null)], null, null); }
var DemoTabsNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-tabs", _tabs_component__WEBPACK_IMPORTED_MODULE_3__["DemoTabs"], View_DemoTabs_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/tabs.component.ts":
/*!*****************************************!*\
  !*** ./src/app/demos/tabs.component.ts ***!
  \*****************************************/
/*! exports provided: DemoTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTabs", function() { return DemoTabs; });
var DemoTabs = /** @class */ (function () {
    function DemoTabs() {
    }
    return DemoTabs;
}());



/***/ }),

/***/ "./src/app/demos/tooltip.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/demos/tooltip.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DemoTooltip, View_DemoTooltip_0, View_DemoTooltip_Host_0, DemoTooltipNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoTooltip", function() { return RenderType_DemoTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoTooltip_0", function() { return View_DemoTooltip_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoTooltip_Host_0", function() { return View_DemoTooltip_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTooltipNgFactory", function() { return DemoTooltipNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/demos/tooltip.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DemoTooltip = ["button[_ngcontent-%COMP%] {\n        margin-right: 0.5rem;\n    }"];
var RenderType_DemoTooltip = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DemoTooltip, data: {} });

function View_DemoTooltip_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbTooltip", "Tooltip on left"], ["placement", "left"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { placement: [0, "placement"], ngbTooltip: [1, "ngbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nTooltip on left\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbTooltip", "Tooltip on top"], ["placement", "top"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { placement: [0, "placement"], ngbTooltip: [1, "ngbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nTooltip on top\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbTooltip", "Tooltip on bottom"], ["placement", "bottom"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 212992, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { placement: [0, "placement"], ngbTooltip: [1, "ngbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nTooltip on bottom\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbTooltip", "Tooltip on right"], ["placement", "right"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 212992, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { placement: [0, "placement"], ngbTooltip: [1, "ngbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nTooltip on right\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 16777216, null, null, 2, "button", [["class", "btn btn-secondary"], ["ngbTooltip", "Closing after another click or Escape"], ["placement", "top"], ["triggers", "click"], ["type", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 212992, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]], { autoClose: [0, "autoClose"], placement: [1, "placement"], triggers: [2, "triggers"], ngbTooltip: [3, "ngbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\nClick right here !\n"]))], function (_ck, _v) { var currVal_0 = "left"; var currVal_1 = "Tooltip on left"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "top"; var currVal_3 = "Tooltip on top"; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = "bottom"; var currVal_5 = "Tooltip on bottom"; _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_6 = "right"; var currVal_7 = "Tooltip on right"; _ck(_v, 10, 0, currVal_6, currVal_7); var currVal_8 = "outside"; var currVal_9 = "top"; var currVal_10 = "click"; var currVal_11 = "Closing after another click or Escape"; _ck(_v, 13, 0, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
function View_DemoTooltip_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-tooltip", [], null, null, null, View_DemoTooltip_0, RenderType_DemoTooltip)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["DemoTooltip"], [], null, null)], null, null); }
var DemoTooltipNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-tooltip", _tooltip_component__WEBPACK_IMPORTED_MODULE_3__["DemoTooltip"], View_DemoTooltip_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/demos/tooltip.component.ts":
/*!********************************************!*\
  !*** ./src/app/demos/tooltip.component.ts ***!
  \********************************************/
/*! exports provided: DemoTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTooltip", function() { return DemoTooltip; });
var DemoTooltip = /** @class */ (function () {
    function DemoTooltip() {
    }
    return DemoTooltip;
}());



/***/ }),

/***/ "./src/app/directives/global.ts":
/*!**************************************!*\
  !*** ./src/app/directives/global.ts ***!
  \**************************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
var Globals = /** @class */ (function () {
    function Globals() {
        this.ngBoostedVersion = '4.2.1-beta.2';
        this.boostedVersion = '4.3.1';
        this.angularVersion = ' > 7.0.0';
        this.ngBootstrapVersion = '4.2.1';
    }
    return Globals;
}());



/***/ }),

/***/ "./src/app/docs-menu/docs-menu.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/docs-menu/docs-menu.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_DocsMenuComponent, View_DocsMenuComponent_0, View_DocsMenuComponent_Host_0, DocsMenuComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocsMenuComponent", function() { return RenderType_DocsMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocsMenuComponent_0", function() { return View_DocsMenuComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocsMenuComponent_Host_0", function() { return View_DocsMenuComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsMenuComponentNgFactory", function() { return DocsMenuComponentNgFactory; });
/* harmony import */ var _docs_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-menu.component.scss.shim.ngstyle */ "./src/app/docs-menu/docs-menu.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _docs_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_DocsMenuComponent = [_docs_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DocsMenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DocsMenuComponent, data: {} });

function View_DocsMenuComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 135, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["aria-controls", "collapseExample"], ["class", "btn btn-outline-secondary mt-3 d-md-none"], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isCollapsed = !_co.isCollapsed) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 132, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 123, "div", [["class", "col-md-2"], ["id", "component_nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 122, "div", [["class", "o-nav-local"], ["id", "collapseExample"]], [[2, "collapse", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], [], { collapsed: [0, "collapsed"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 120, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 119, "ul", [["class", "nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "li", [["class", "nav-item d-none d-md-inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/home"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/accordion"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Accordion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/alert"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Alert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/calendar"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Calendar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/collapse"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Collapse"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/dropdown"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, [[12, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dropdown"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/modal"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, [[14, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Modal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/o-navbar"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, [[16, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Navbar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/pagination"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 671744, [[18, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pagination"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/popover"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 671744, [[20, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Popover"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/progress"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 671744, [[22, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Progress"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/o-scroll-top"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 671744, [[24, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Scroll Top"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/swiper"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 671744, [[26, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Swiper"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/o-switch"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 671744, [[28, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Switch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/tabs"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 671744, [[30, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tabs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/o-toggle"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 671744, [[32, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Toggle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 6, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 5, "a", [["class", "nav-link"], ["routerLink", "/documentation/tooltip"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 671744, [[34, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tooltip"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 7, "div", [["class", "col-md-10 pl-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](130, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 3, "p", [["class", "doc-ext-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original component documentation can be found "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 1, "a", [["href", "https://ng-bootstrap.github.io/#/components/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["here."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.isCollapsed; _ck(_v, 6, 0, currVal_3); var currVal_6 = "/home"; _ck(_v, 11, 0, currVal_6); var currVal_7 = "active"; _ck(_v, 12, 0, currVal_7); var currVal_10 = "/documentation/accordion"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "active"; _ck(_v, 19, 0, currVal_11); var currVal_14 = "/documentation/alert"; _ck(_v, 25, 0, currVal_14); var currVal_15 = "active"; _ck(_v, 26, 0, currVal_15); var currVal_18 = "/documentation/calendar"; _ck(_v, 32, 0, currVal_18); var currVal_19 = "active"; _ck(_v, 33, 0, currVal_19); var currVal_22 = "/documentation/collapse"; _ck(_v, 39, 0, currVal_22); var currVal_23 = "active"; _ck(_v, 40, 0, currVal_23); var currVal_26 = "/documentation/dropdown"; _ck(_v, 46, 0, currVal_26); var currVal_27 = "active"; _ck(_v, 47, 0, currVal_27); var currVal_30 = "/documentation/modal"; _ck(_v, 53, 0, currVal_30); var currVal_31 = "active"; _ck(_v, 54, 0, currVal_31); var currVal_34 = "/documentation/o-navbar"; _ck(_v, 60, 0, currVal_34); var currVal_35 = "active"; _ck(_v, 61, 0, currVal_35); var currVal_38 = "/documentation/pagination"; _ck(_v, 67, 0, currVal_38); var currVal_39 = "active"; _ck(_v, 68, 0, currVal_39); var currVal_42 = "/documentation/popover"; _ck(_v, 74, 0, currVal_42); var currVal_43 = "active"; _ck(_v, 75, 0, currVal_43); var currVal_46 = "/documentation/progress"; _ck(_v, 81, 0, currVal_46); var currVal_47 = "active"; _ck(_v, 82, 0, currVal_47); var currVal_50 = "/documentation/o-scroll-top"; _ck(_v, 88, 0, currVal_50); var currVal_51 = "active"; _ck(_v, 89, 0, currVal_51); var currVal_54 = "/documentation/swiper"; _ck(_v, 95, 0, currVal_54); var currVal_55 = "active"; _ck(_v, 96, 0, currVal_55); var currVal_58 = "/documentation/o-switch"; _ck(_v, 102, 0, currVal_58); var currVal_59 = "active"; _ck(_v, 103, 0, currVal_59); var currVal_62 = "/documentation/tabs"; _ck(_v, 109, 0, currVal_62); var currVal_63 = "active"; _ck(_v, 110, 0, currVal_63); var currVal_66 = "/documentation/o-toggle"; _ck(_v, 116, 0, currVal_66); var currVal_67 = "active"; _ck(_v, 117, 0, currVal_67); var currVal_70 = "/documentation/tooltip"; _ck(_v, 123, 0, currVal_70); var currVal_71 = "active"; _ck(_v, 124, 0, currVal_71); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed; _ck(_v, 1, 0, currVal_0); var currVal_1 = true; var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).collapsed; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_8, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).target; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).href; _ck(_v, 31, 0, currVal_16, currVal_17); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).target; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).href; _ck(_v, 38, 0, currVal_20, currVal_21); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).target; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).href; _ck(_v, 45, 0, currVal_24, currVal_25); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href; _ck(_v, 52, 0, currVal_28, currVal_29); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).target; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).href; _ck(_v, 59, 0, currVal_32, currVal_33); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).target; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).href; _ck(_v, 66, 0, currVal_36, currVal_37); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).target; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).href; _ck(_v, 73, 0, currVal_40, currVal_41); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).target; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).href; _ck(_v, 80, 0, currVal_44, currVal_45); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).target; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).href; _ck(_v, 87, 0, currVal_48, currVal_49); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).target; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).href; _ck(_v, 94, 0, currVal_52, currVal_53); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).target; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).href; _ck(_v, 101, 0, currVal_56, currVal_57); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).target; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).href; _ck(_v, 108, 0, currVal_60, currVal_61); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).target; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).href; _ck(_v, 115, 0, currVal_64, currVal_65); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).target; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).href; _ck(_v, 122, 0, currVal_68, currVal_69); var currVal_72 = _co.component; _ck(_v, 130, 0, currVal_72); }); }
function View_DocsMenuComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "docs-wrapper", [], null, null, null, View_DocsMenuComponent_0, RenderType_DocsMenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _docs_menu_component__WEBPACK_IMPORTED_MODULE_5__["DocsMenuComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocsMenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("docs-wrapper", _docs_menu_component__WEBPACK_IMPORTED_MODULE_5__["DocsMenuComponent"], View_DocsMenuComponent_Host_0, { component: "component" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/docs-menu/docs-menu.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/docs-menu/docs-menu.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3MtbWVudS9kb2NzLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/docs-menu/docs-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/docs-menu/docs-menu.component.ts ***!
  \**************************************************/
/*! exports provided: DocsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsMenuComponent", function() { return DocsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DocsMenuComponent = /** @class */ (function () {
    function DocsMenuComponent() {
        this.isCollapsed = true;
    }
    DocsMenuComponent.prototype.ngOnInit = function () {
    };
    return DocsMenuComponent;
}());



/***/ }),

/***/ "./src/app/docs/accordion.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/docs/accordion.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_DocAccordion, View_DocAccordion_0, View_DocAccordion_Host_0, DocAccordionNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocAccordion", function() { return RenderType_DocAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocAccordion_0", function() { return View_DocAccordion_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocAccordion_Host_0", function() { return View_DocAccordion_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAccordionNgFactory", function() { return DocAccordionNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/accordion.component.ngfactory */ "./src/app/demos/accordion.component.ngfactory.js");
/* harmony import */ var _demos_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/accordion.component */ "./src/app/demos/accordion.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accordion.component */ "./src/app/docs/accordion.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocAccordion = [];
var RenderType_DocAccordion = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocAccordion, data: {} });

function View_DocAccordion_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Accordion"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-accordion", [], null, null, null, _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoAccordion_0"], _demos_accordion_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoAccordion"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_accordion_component__WEBPACK_IMPORTED_MODULE_4__["DemoAccordion"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Accordion"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocAccordion_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-accordion", [], null, null, null, View_DocAccordion_0, RenderType_DocAccordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _accordion_component__WEBPACK_IMPORTED_MODULE_7__["DocAccordion"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocAccordionNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-accordion", _accordion_component__WEBPACK_IMPORTED_MODULE_7__["DocAccordion"], View_DocAccordion_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/accordion.component.ts":
/*!*********************************************!*\
  !*** ./src/app/docs/accordion.component.ts ***!
  \*********************************************/
/*! exports provided: DocAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAccordion", function() { return DocAccordion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocAccordion = /** @class */ (function () {
    function DocAccordion(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/accordion.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/accordion.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/accordion.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/accordion.component.ts")
        };
    }
    DocAccordion.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocAccordion;
}());



/***/ }),

/***/ "./src/app/docs/alert.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/docs/alert.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_DocAlert, View_DocAlert_0, View_DocAlert_Host_0, DocAlertNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocAlert", function() { return RenderType_DocAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocAlert_0", function() { return View_DocAlert_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocAlert_Host_0", function() { return View_DocAlert_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAlertNgFactory", function() { return DocAlertNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/alert.component.ngfactory */ "./src/app/demos/alert.component.ngfactory.js");
/* harmony import */ var _demos_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/alert.component */ "./src/app/demos/alert.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert.component */ "./src/app/docs/alert.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocAlert = [];
var RenderType_DocAlert = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocAlert, data: {} });

function View_DocAlert_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Alert"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-alert", [], null, null, null, _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoAlert_0"], _demos_alert_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoAlert"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_alert_component__WEBPACK_IMPORTED_MODULE_4__["DemoAlert"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Alert"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocAlert_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-alert", [], null, null, null, View_DocAlert_0, RenderType_DocAlert)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _alert_component__WEBPACK_IMPORTED_MODULE_7__["DocAlert"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocAlertNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-alert", _alert_component__WEBPACK_IMPORTED_MODULE_7__["DocAlert"], View_DocAlert_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/alert.component.ts":
/*!*****************************************!*\
  !*** ./src/app/docs/alert.component.ts ***!
  \*****************************************/
/*! exports provided: DocAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAlert", function() { return DocAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocAlert = /** @class */ (function () {
    function DocAlert(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/alert.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/alert.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/alert.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/alert.component.ts")
        };
    }
    DocAlert.prototype.ngOnInit = function () {
        this._analytics.trackPageViews();
    };
    return DocAlert;
}());



/***/ }),

/***/ "./src/app/docs/carousel.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/carousel.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocCarousel, View_DocCarousel_0, View_DocCarousel_Host_0, DocCarouselNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocCarousel", function() { return RenderType_DocCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocCarousel_0", function() { return View_DocCarousel_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocCarousel_Host_0", function() { return View_DocCarousel_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocCarouselNgFactory", function() { return DocCarouselNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_carousel_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/carousel.component.ngfactory */ "./src/app/demos/carousel.component.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _demos_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demos/carousel.component */ "./src/app/demos/carousel.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel.component */ "./src/app/docs/carousel.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_DocCarousel = [];
var RenderType_DocCarousel = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocCarousel, data: {} });

function View_DocCarousel_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "docs-wrapper", [["component", "Carousel"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 7, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "demo-carousel", [], null, [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onMouseEnter() !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onMouseLeave() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _demos_carousel_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoCarousel_0"], _demos_carousel_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoCarousel"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 114688, null, 0, _demos_carousel_component__WEBPACK_IMPORTED_MODULE_5__["DemoCarousel"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_7__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Carousel"; _ck(_v, 1, 0, currVal_0); _ck(_v, 8, 0); var currVal_1 = _co.demoSnippets; _ck(_v, 10, 0, currVal_1); }, null); }
function View_DocCarousel_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-carousel", [], null, null, null, View_DocCarousel_0, RenderType_DocCarousel)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _carousel_component__WEBPACK_IMPORTED_MODULE_8__["DocCarousel"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_9__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocCarouselNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-carousel", _carousel_component__WEBPACK_IMPORTED_MODULE_8__["DocCarousel"], View_DocCarousel_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/carousel.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/carousel.component.ts ***!
  \********************************************/
/*! exports provided: DocCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocCarousel", function() { return DocCarousel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocCarousel = /** @class */ (function () {
    function DocCarousel(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/carousel.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/carousel.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/carousel.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/carousel.component.ts")
        };
    }
    DocCarousel.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocCarousel;
}());



/***/ }),

/***/ "./src/app/docs/code-box.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/code-box.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_CodeBox, View_CodeBox_0, View_CodeBox_Host_0, CodeBoxNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CodeBox", function() { return RenderType_CodeBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CodeBox_0", function() { return View_CodeBox_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CodeBox_Host_0", function() { return View_CodeBox_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBoxNgFactory", function() { return CodeBoxNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_CodeBox = ["h3[_ngcontent-%COMP%] {\n            margin-top: 1.25rem;\n        }\n        .tab-content[_ngcontent-%COMP%] {\n            border: 0;\n            padding: 0;\n        }\n        [_nghost-%COMP%] {\n            display: block;\n            margin-bottom: 30px;\n        }"];
var RenderType_CodeBox = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_CodeBox, data: {} });

function View_CodeBox_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "pre", [["class", "language-html"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "code", [["class", "language-html"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.snippets.markup; _ck(_v, 1, 0, currVal_0); }); }
function View_CodeBox_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ngb-tab", [["title", "HTML"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_CodeBox_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = "HTML"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CodeBox_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "pre", [["class", "language-typescript"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "code", [["class", "language-typescript"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.snippets.typescript; _ck(_v, 1, 0, currVal_0); }); }
function View_CodeBox_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ngb-tab", [["title", "TypeScript"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], [], { title: [0, "title"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { titleTpls: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { contentTpls: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 1, null, View_CodeBox_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = "TypeScript"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CodeBox_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "ngb-tabset", [["class", "code-box"]], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CodeBox_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CodeBox_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.snippets.markup; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.snippets.typescript; _ck(_v, 8, 0, currVal_1); }, null); }
function View_CodeBox_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "code-box", [], null, null, null, View_CodeBox_0, RenderType_CodeBox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBox"], [], null, null)], null, null); }
var CodeBoxNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("code-box", _code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBox"], View_CodeBox_Host_0, { snippets: "snippets" }, {}, []);



/***/ }),

/***/ "./src/app/docs/code-box.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/code-box.component.ts ***!
  \********************************************/
/*! exports provided: CodeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBox", function() { return CodeBox; });
var CodeBox = /** @class */ (function () {
    function CodeBox() {
        this.snippets = { markup: '', typescript: '' };
    }
    return CodeBox;
}());



/***/ }),

/***/ "./src/app/docs/collapse.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/collapse.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocCollapse, View_DocCollapse_0, View_DocCollapse_Host_0, DocCollapseNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocCollapse", function() { return RenderType_DocCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocCollapse_0", function() { return View_DocCollapse_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocCollapse_Host_0", function() { return View_DocCollapse_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocCollapseNgFactory", function() { return DocCollapseNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/collapse.component.ngfactory */ "./src/app/demos/collapse.component.ngfactory.js");
/* harmony import */ var _demos_collapse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/collapse.component */ "./src/app/demos/collapse.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _collapse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapse.component */ "./src/app/docs/collapse.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocCollapse = [];
var RenderType_DocCollapse = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocCollapse, data: {} });

function View_DocCollapse_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Collapse"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-collapse", [], null, null, null, _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoCollapse_0"], _demos_collapse_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoCollapse"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_collapse_component__WEBPACK_IMPORTED_MODULE_4__["DemoCollapse"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Collapse"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocCollapse_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-collapse", [], null, null, null, View_DocCollapse_0, RenderType_DocCollapse)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _collapse_component__WEBPACK_IMPORTED_MODULE_7__["DocCollapse"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocCollapseNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-collapse", _collapse_component__WEBPACK_IMPORTED_MODULE_7__["DocCollapse"], View_DocCollapse_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/collapse.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/collapse.component.ts ***!
  \********************************************/
/*! exports provided: DocCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocCollapse", function() { return DocCollapse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocCollapse = /** @class */ (function () {
    function DocCollapse(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/collapse.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/collapse.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/collapse.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/collapse.component.ts")
        };
    }
    DocCollapse.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocCollapse;
}());



/***/ }),

/***/ "./src/app/docs/dropdown.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/dropdown.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocDropdown, View_DocDropdown_0, View_DocDropdown_Host_0, DocDropdownNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocDropdown", function() { return RenderType_DocDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocDropdown_0", function() { return View_DocDropdown_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocDropdown_Host_0", function() { return View_DocDropdown_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocDropdownNgFactory", function() { return DocDropdownNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/dropdown.component.ngfactory */ "./src/app/demos/dropdown.component.ngfactory.js");
/* harmony import */ var _demos_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/dropdown.component */ "./src/app/demos/dropdown.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/docs/dropdown.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocDropdown = [];
var RenderType_DocDropdown = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocDropdown, data: {} });

function View_DocDropdown_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Dropdown"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-dropdown", [], null, null, null, _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoDropdown_0"], _demos_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DemoDropdown"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Dropdown"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocDropdown_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-dropdown", [], null, null, null, View_DocDropdown_0, RenderType_DocDropdown)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DocDropdown"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocDropdownNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-dropdown", _dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DocDropdown"], View_DocDropdown_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/dropdown.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/dropdown.component.ts ***!
  \********************************************/
/*! exports provided: DocDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocDropdown", function() { return DocDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocDropdown = /** @class */ (function () {
    function DocDropdown(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/dropdown.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/dropdown.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/dropdown.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/dropdown.component.ts")
        };
    }
    DocDropdown.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocDropdown;
}());



/***/ }),

/***/ "./src/app/docs/modal.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/docs/modal.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_DocModal, View_DocModal_0, View_DocModal_Host_0, DocModalNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocModal", function() { return RenderType_DocModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocModal_0", function() { return View_DocModal_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocModal_Host_0", function() { return View_DocModal_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocModalNgFactory", function() { return DocModalNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/modal.component.ngfactory */ "./src/app/demos/modal.component.ngfactory.js");
/* harmony import */ var _demos_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/modal.component */ "./src/app/demos/modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal.component */ "./src/app/docs/modal.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_DocModal = [];
var RenderType_DocModal = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocModal, data: {} });

function View_DocModal_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_DocModal_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "docs-wrapper", [["component", "Modal"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-modal", [], null, null, null, _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoModal_0"], _demos_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoModal"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_modal_component__WEBPACK_IMPORTED_MODULE_4__["DemoModal"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, 0, 0, null, View_DocModal_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_7__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Modal"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 8, 0, currVal_1); }, null); }
function View_DocModal_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-modal", [], null, null, null, View_DocModal_0, RenderType_DocModal)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _modal_component__WEBPACK_IMPORTED_MODULE_8__["DocModal"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_9__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocModalNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-modal", _modal_component__WEBPACK_IMPORTED_MODULE_8__["DocModal"], View_DocModal_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/modal.component.ts":
/*!*****************************************!*\
  !*** ./src/app/docs/modal.component.ts ***!
  \*****************************************/
/*! exports provided: DocModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocModal", function() { return DocModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocModal = /** @class */ (function () {
    function DocModal(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/modal.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/modal.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/modal.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/modal.component.ts")
        };
    }
    DocModal.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocModal;
}());



/***/ }),

/***/ "./src/app/docs/o-calendar.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/docs/o-calendar.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_DocOCalendar, View_DocOCalendar_0, View_DocOCalendar_Host_0, DocOCalendarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocOCalendar", function() { return RenderType_DocOCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOCalendar_0", function() { return View_DocOCalendar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOCalendar_Host_0", function() { return View_DocOCalendar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOCalendarNgFactory", function() { return DocOCalendarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_o_calendar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/o-calendar.component.ngfactory */ "./src/app/demos/o-calendar.component.ngfactory.js");
/* harmony import */ var _demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/o-calendar.component */ "./src/app/demos/o-calendar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _o_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./o-calendar.component */ "./src/app/docs/o-calendar.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_DocOCalendar = ["demo-o-calendar[_ngcontent-%COMP%]    + h3[_ngcontent-%COMP%] {\n      margin-top: 1.25rem;\n    }"];
var RenderType_DocOCalendar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocOCalendar, data: {} });

function View_DocOCalendar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "docs-wrapper", [["component", "Calendar"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 3, "demo-o-calendar", [], null, null, null, _demos_o_calendar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoOCalendar_0"], _demos_o_calendar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoOCalendar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__["I18n"], _demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__["I18n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"], _demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CustomDatepickerI18n"], [_demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__["I18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _demos_o_calendar_component__WEBPACK_IMPORTED_MODULE_4__["DemoOCalendar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_7__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Calendar"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 12, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 10, 0, currVal_1); }); }
function View_DocOCalendar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-o-calendar", [], null, null, null, View_DocOCalendar_0, RenderType_DocOCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _o_calendar_component__WEBPACK_IMPORTED_MODULE_8__["DocOCalendar"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_9__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocOCalendarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-o-calendar", _o_calendar_component__WEBPACK_IMPORTED_MODULE_8__["DocOCalendar"], View_DocOCalendar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/o-calendar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/docs/o-calendar.component.ts ***!
  \**********************************************/
/*! exports provided: DocOCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOCalendar", function() { return DocOCalendar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocOCalendar = /** @class */ (function () {
    function DocOCalendar(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./o-calendar.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-calendar.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/o-calendar.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-calendar.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/o-calendar.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-calendar.component.ts")
        };
    }
    DocOCalendar.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocOCalendar;
}());



/***/ }),

/***/ "./src/app/docs/o-navbar.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/o-navbar.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocONavbar, View_DocONavbar_0, View_DocONavbar_Host_0, DocONavbarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocONavbar", function() { return RenderType_DocONavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocONavbar_0", function() { return View_DocONavbar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocONavbar_Host_0", function() { return View_DocONavbar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocONavbarNgFactory", function() { return DocONavbarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_o_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/o-navbar.component.ngfactory */ "./src/app/demos/o-navbar.component.ngfactory.js");
/* harmony import */ var _demos_o_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/o-navbar.component */ "./src/app/demos/o-navbar.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _o_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-navbar.component */ "./src/app/docs/o-navbar.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocONavbar = ["demo-o-navbar[_ngcontent-%COMP%]    + h3[_ngcontent-%COMP%] {\n      margin-top: 1.25rem;\n    }"];
var RenderType_DocONavbar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocONavbar, data: {} });

function View_DocONavbar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "docs-wrapper", [["component", "Navbar"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-o-navbar", [], null, null, null, _demos_o_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoONavbar_0"], _demos_o_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoONavbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_o_navbar_component__WEBPACK_IMPORTED_MODULE_4__["DemoONavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Navbar"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 8, 0, currVal_1); }); }
function View_DocONavbar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-o-navbar", [], null, null, null, View_DocONavbar_0, RenderType_DocONavbar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _o_navbar_component__WEBPACK_IMPORTED_MODULE_7__["DocONavbar"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocONavbarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-o-navbar", _o_navbar_component__WEBPACK_IMPORTED_MODULE_7__["DocONavbar"], View_DocONavbar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/o-navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/o-navbar.component.ts ***!
  \********************************************/
/*! exports provided: DocONavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocONavbar", function() { return DocONavbar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocONavbar = /** @class */ (function () {
    function DocONavbar(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./o-navbar.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-navbar.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/o-navbar.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-navbar.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/o-navbar.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-navbar.component.ts")
        };
    }
    DocONavbar.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocONavbar;
}());



/***/ }),

/***/ "./src/app/docs/o-scroll-top.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/docs/o-scroll-top.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_DocOScrollTop, View_DocOScrollTop_0, View_DocOScrollTop_Host_0, DocOScrollTopNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocOScrollTop", function() { return RenderType_DocOScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOScrollTop_0", function() { return View_DocOScrollTop_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOScrollTop_Host_0", function() { return View_DocOScrollTop_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOScrollTopNgFactory", function() { return DocOScrollTopNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _o_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-scroll-top.component */ "./src/app/docs/o-scroll-top.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_DocOScrollTop = [".fake-block[_ngcontent-%COMP%] { height: 400rem; }"];
var RenderType_DocOScrollTop = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocOScrollTop, data: {} });

function View_DocOScrollTop_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "docs-wrapper", [["component", "Scroll Top"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Scroll down this page to see a nice example."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBox"], [], { snippets: [0, "snippets"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 0, "div", [["class", "fake-block"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Scroll Top"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 8, 0, currVal_1); }); }
function View_DocOScrollTop_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-o-scroll-top", [], null, null, null, View_DocOScrollTop_0, RenderType_DocOScrollTop)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _o_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__["DocOScrollTop"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_6__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocOScrollTopNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-o-scroll-top", _o_scroll_top_component__WEBPACK_IMPORTED_MODULE_5__["DocOScrollTop"], View_DocOScrollTop_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/o-scroll-top.component.ts":
/*!************************************************!*\
  !*** ./src/app/docs/o-scroll-top.component.ts ***!
  \************************************************/
/*! exports provided: DocOScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOScrollTop", function() { return DocOScrollTop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocOScrollTop = /** @class */ (function () {
    function DocOScrollTop(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./o-scroll-top.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-scroll-top.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/o-scroll-top.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-scroll-top.component.html")
        };
    }
    DocOScrollTop.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocOScrollTop;
}());



/***/ }),

/***/ "./src/app/docs/o-switch.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/o-switch.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocOSwitch, View_DocOSwitch_0, View_DocOSwitch_Host_0, DocOSwitchNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocOSwitch", function() { return RenderType_DocOSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOSwitch_0", function() { return View_DocOSwitch_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOSwitch_Host_0", function() { return View_DocOSwitch_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOSwitchNgFactory", function() { return DocOSwitchNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/o-switch.component.ngfactory */ "./src/app/demos/o-switch.component.ngfactory.js");
/* harmony import */ var _demos_o_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/o-switch.component */ "./src/app/demos/o-switch.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _o_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-switch.component */ "./src/app/docs/o-switch.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocOSwitch = [];
var RenderType_DocOSwitch = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocOSwitch, data: {} });

function View_DocOSwitch_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "docs-wrapper", [["component", "Switch"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-o-switch", [], null, null, null, _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoOSwitch_0"], _demos_o_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoOSwitch"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_o_switch_component__WEBPACK_IMPORTED_MODULE_4__["DemoOSwitch"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Switch"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 8, 0, currVal_1); }); }
function View_DocOSwitch_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-o-switch", [], null, null, null, View_DocOSwitch_0, RenderType_DocOSwitch)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _o_switch_component__WEBPACK_IMPORTED_MODULE_7__["DocOSwitch"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocOSwitchNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-o-switch", _o_switch_component__WEBPACK_IMPORTED_MODULE_7__["DocOSwitch"], View_DocOSwitch_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/o-switch.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/o-switch.component.ts ***!
  \********************************************/
/*! exports provided: DocOSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOSwitch", function() { return DocOSwitch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocOSwitch = /** @class */ (function () {
    function DocOSwitch(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./o-switch.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-switch.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/o-switch.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-switch.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/o-switch.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-switch.component.ts")
        };
    }
    DocOSwitch.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocOSwitch;
}());



/***/ }),

/***/ "./src/app/docs/o-toggle.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/docs/o-toggle.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_DocOToggle, View_DocOToggle_0, View_DocOToggle_Host_0, DocOToggleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocOToggle", function() { return RenderType_DocOToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOToggle_0", function() { return View_DocOToggle_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocOToggle_Host_0", function() { return View_DocOToggle_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOToggleNgFactory", function() { return DocOToggleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/o-toggle.component.ngfactory */ "./src/app/demos/o-toggle.component.ngfactory.js");
/* harmony import */ var _demos_o_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/o-toggle.component */ "./src/app/demos/o-toggle.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _o_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-toggle.component */ "./src/app/docs/o-toggle.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocOToggle = ["demo-o-toggle[_ngcontent-%COMP%]    + h3[_ngcontent-%COMP%] {\n      margin-top: 1.25rem;\n    }"];
var RenderType_DocOToggle = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocOToggle, data: {} });

function View_DocOToggle_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "docs-wrapper", [["component", "Toggle"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-o-toggle", [], null, null, null, _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoOToggle_0"], _demos_o_toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoOToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_o_toggle_component__WEBPACK_IMPORTED_MODULE_4__["DemoOToggle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Toggle"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 8, 0, currVal_1); }); }
function View_DocOToggle_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-o-toggle", [], null, null, null, View_DocOToggle_0, RenderType_DocOToggle)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _o_toggle_component__WEBPACK_IMPORTED_MODULE_7__["DocOToggle"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocOToggleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-o-toggle", _o_toggle_component__WEBPACK_IMPORTED_MODULE_7__["DocOToggle"], View_DocOToggle_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/o-toggle.component.ts":
/*!********************************************!*\
  !*** ./src/app/docs/o-toggle.component.ts ***!
  \********************************************/
/*! exports provided: DocOToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocOToggle", function() { return DocOToggle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocOToggle = /** @class */ (function () {
    function DocOToggle(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./o-toggle.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/o-toggle.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/o-toggle.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/o-toggle.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/o-toggle.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/o-toggle.component.ts")
        };
    }
    DocOToggle.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocOToggle;
}());



/***/ }),

/***/ "./src/app/docs/pagination.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/docs/pagination.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_DocPagination, View_DocPagination_0, View_DocPagination_Host_0, DocPaginationNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocPagination", function() { return RenderType_DocPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocPagination_0", function() { return View_DocPagination_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocPagination_Host_0", function() { return View_DocPagination_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPaginationNgFactory", function() { return DocPaginationNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/pagination.component.ngfactory */ "./src/app/demos/pagination.component.ngfactory.js");
/* harmony import */ var _demos_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/pagination.component */ "./src/app/demos/pagination.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination.component */ "./src/app/docs/pagination.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocPagination = [];
var RenderType_DocPagination = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocPagination, data: {} });

function View_DocPagination_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Pagination"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-pagination", [], null, null, null, _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoPagination_0"], _demos_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_pagination_component__WEBPACK_IMPORTED_MODULE_4__["DemoPagination"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Pagination"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocPagination_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-pagination", [], null, null, null, View_DocPagination_0, RenderType_DocPagination)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _pagination_component__WEBPACK_IMPORTED_MODULE_7__["DocPagination"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocPaginationNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-pagination", _pagination_component__WEBPACK_IMPORTED_MODULE_7__["DocPagination"], View_DocPagination_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/pagination.component.ts":
/*!**********************************************!*\
  !*** ./src/app/docs/pagination.component.ts ***!
  \**********************************************/
/*! exports provided: DocPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPagination", function() { return DocPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocPagination = /** @class */ (function () {
    function DocPagination(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/pagination.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/pagination.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/pagination.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/pagination.component.ts")
        };
    }
    DocPagination.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocPagination;
}());



/***/ }),

/***/ "./src/app/docs/popover.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/docs/popover.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_DocPopover, View_DocPopover_0, View_DocPopover_Host_0, DocPopoverNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocPopover", function() { return RenderType_DocPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocPopover_0", function() { return View_DocPopover_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocPopover_Host_0", function() { return View_DocPopover_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPopoverNgFactory", function() { return DocPopoverNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/popover.component.ngfactory */ "./src/app/demos/popover.component.ngfactory.js");
/* harmony import */ var _demos_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/popover.component */ "./src/app/demos/popover.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover.component */ "./src/app/docs/popover.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocPopover = ["p[_ngcontent-%COMP%] {\n      margin-top: 1rem;\n    }\n\n    demo-popover[_ngcontent-%COMP%]    + h3[_ngcontent-%COMP%] {\n      margin-top: 1.25rem;\n    }\n\n    code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }"];
var RenderType_DocPopover = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocPopover, data: {} });

function View_DocPopover_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "docs-wrapper", [["component", "Popover"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-popover", [], null, null, null, _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoPopover_0"], _demos_popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoPopover"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_popover_component__WEBPACK_IMPORTED_MODULE_4__["DemoPopover"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Popover"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 8, 0, currVal_1); }); }
function View_DocPopover_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-popover", [], null, null, null, View_DocPopover_0, RenderType_DocPopover)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _popover_component__WEBPACK_IMPORTED_MODULE_7__["DocPopover"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocPopoverNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-popover", _popover_component__WEBPACK_IMPORTED_MODULE_7__["DocPopover"], View_DocPopover_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/popover.component.ts":
/*!*******************************************!*\
  !*** ./src/app/docs/popover.component.ts ***!
  \*******************************************/
/*! exports provided: DocPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPopover", function() { return DocPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocPopover = /** @class */ (function () {
    function DocPopover(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./popover.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/popover.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/popover.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/popover.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/popover.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/popover.component.ts")
        };
    }
    DocPopover.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocPopover;
}());



/***/ }),

/***/ "./src/app/docs/progress-bar.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/docs/progress-bar.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_DocProgressBar, View_DocProgressBar_0, View_DocProgressBar_Host_0, DocProgressBarNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocProgressBar", function() { return RenderType_DocProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocProgressBar_0", function() { return View_DocProgressBar_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocProgressBar_Host_0", function() { return View_DocProgressBar_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocProgressBarNgFactory", function() { return DocProgressBarNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/progress-bar.component.ngfactory */ "./src/app/demos/progress-bar.component.ngfactory.js");
/* harmony import */ var _demos_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/progress-bar.component */ "./src/app/demos/progress-bar.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-bar.component */ "./src/app/docs/progress-bar.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocProgressBar = [];
var RenderType_DocProgressBar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocProgressBar, data: {} });

function View_DocProgressBar_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Progress Bar"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-progress-bar", [], null, null, null, _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoProgressBar_0"], _demos_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["DemoProgressBar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Progress Bar"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocProgressBar_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-progress-bar", [], null, null, null, View_DocProgressBar_0, RenderType_DocProgressBar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["DocProgressBar"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocProgressBarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-progress-bar", _progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["DocProgressBar"], View_DocProgressBar_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/progress-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/docs/progress-bar.component.ts ***!
  \************************************************/
/*! exports provided: DocProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocProgressBar", function() { return DocProgressBar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocProgressBar = /** @class */ (function () {
    function DocProgressBar(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/progress-bar.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/progress-bar.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/progress-bar.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/progress-bar.component.ts")
        };
    }
    DocProgressBar.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocProgressBar;
}());



/***/ }),

/***/ "./src/app/docs/shared/analytics.ts":
/*!******************************************!*\
  !*** ./src/app/docs/shared/analytics.ts ***!
  \******************************************/
/*! exports provided: Analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analytics", function() { return Analytics; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * Simple Google Analytics service. Note that all its methods don't do anything unless the app
 * is deployed on https://ng-boosted.orange.com. This avoids sending events and page views during development.
 */
var Analytics = /** @class */ (function () {
    function Analytics(_location, _router) {
        this._location = _location;
        this._router = _router;
        this._enabled = window.location.href.indexOf('https://ng-boosted.orange.com') >= 0;
    }
    /**
     * Intended to be called only once. Subscribes to router events and sends a page view
     * after each ended navigation event.
     */
    Analytics.prototype.trackPageViews = function () {
        if (this._enabled) {
            this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; })).subscribe(function () {
                // ga('send', {hitType: 'pageview', page: this._location.path()});
            });
        }
    };
    /**
     * Sends an event.
     */
    Analytics.prototype.trackEvent = function (action, category) {
        if (this._enabled) {
            // ga('send', {hitType: 'event', eventCategory: category, eventAction: action});
        }
    };
    return Analytics;
}());



/***/ }),

/***/ "./src/app/docs/swiper.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/docs/swiper.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_DocSwiper, View_DocSwiper_0, View_DocSwiper_Host_0, DocSwiperNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocSwiper", function() { return RenderType_DocSwiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocSwiper_0", function() { return View_DocSwiper_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocSwiper_Host_0", function() { return View_DocSwiper_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSwiperNgFactory", function() { return DocSwiperNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/swiper.component.ngfactory */ "./src/app/demos/swiper.component.ngfactory.js");
/* harmony import */ var _demos_swiper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/swiper.component */ "./src/app/demos/swiper.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _swiper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swiper.component */ "./src/app/docs/swiper.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocSwiper = ["demo-swiper[_ngcontent-%COMP%]    + h3[_ngcontent-%COMP%] {\n      margin-top: 1.25rem;\n    }"];
var RenderType_DocSwiper = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DocSwiper, data: {} });

function View_DocSwiper_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "docs-wrapper", [["component", "Swiper"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 9, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "demo-swiper", [], null, null, null, _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoSwiper_0"], _demos_swiper_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoSwiper"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _demos_swiper_component__WEBPACK_IMPORTED_MODULE_4__["DemoSwiper"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Usage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Swiper"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.demoSnippets; _ck(_v, 12, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.docContent; _ck(_v, 10, 0, currVal_1); }); }
function View_DocSwiper_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-swiper", [], null, null, null, View_DocSwiper_0, RenderType_DocSwiper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _swiper_component__WEBPACK_IMPORTED_MODULE_7__["DocSwiper"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocSwiperNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-swiper", _swiper_component__WEBPACK_IMPORTED_MODULE_7__["DocSwiper"], View_DocSwiper_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/swiper.component.ts":
/*!******************************************!*\
  !*** ./src/app/docs/swiper.component.ts ***!
  \******************************************/
/*! exports provided: DocSwiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSwiper", function() { return DocSwiper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocSwiper = /** @class */ (function () {
    function DocSwiper(_analytics) {
        this._analytics = _analytics;
        this.docContent = __webpack_require__(/*! html-loader!markdown-loader!./swiper.component.md */ "./node_modules/html-loader/index.js!./node_modules/markdown-loader/index.js!./src/app/docs/swiper.component.md");
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/swiper.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/swiper.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/swiper.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/swiper.component.ts")
        };
    }
    DocSwiper.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocSwiper;
}());



/***/ }),

/***/ "./src/app/docs/tabs.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/docs/tabs.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_DocTabs, View_DocTabs_0, View_DocTabs_Host_0, DocTabsNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocTabs", function() { return RenderType_DocTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocTabs_0", function() { return View_DocTabs_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocTabs_Host_0", function() { return View_DocTabs_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTabsNgFactory", function() { return DocTabsNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/tabs.component.ngfactory */ "./src/app/demos/tabs.component.ngfactory.js");
/* harmony import */ var _demos_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/tabs.component */ "./src/app/demos/tabs.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.component */ "./src/app/docs/tabs.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocTabs = [];
var RenderType_DocTabs = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocTabs, data: {} });

function View_DocTabs_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Tabs"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-tabs", [], null, null, null, _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoTabs_0"], _demos_tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_tabs_component__WEBPACK_IMPORTED_MODULE_4__["DemoTabs"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Tabs"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocTabs_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-tabs", [], null, null, null, View_DocTabs_0, RenderType_DocTabs)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _tabs_component__WEBPACK_IMPORTED_MODULE_7__["DocTabs"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocTabsNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-tabs", _tabs_component__WEBPACK_IMPORTED_MODULE_7__["DocTabs"], View_DocTabs_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/docs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: DocTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTabs", function() { return DocTabs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocTabs = /** @class */ (function () {
    function DocTabs(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/tabs.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/tabs.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/tabs.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/tabs.component.ts")
        };
    }
    DocTabs.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocTabs;
}());



/***/ }),

/***/ "./src/app/docs/tooltip.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/docs/tooltip.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_DocTooltip, View_DocTooltip_0, View_DocTooltip_Host_0, DocTooltipNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DocTooltip", function() { return RenderType_DocTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocTooltip_0", function() { return View_DocTooltip_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DocTooltip_Host_0", function() { return View_DocTooltip_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTooltipNgFactory", function() { return DocTooltipNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../docs-menu/docs-menu.component.ngfactory */ "./src/app/docs-menu/docs-menu.component.ngfactory.js");
/* harmony import */ var _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../docs-menu/docs-menu.component */ "./src/app/docs-menu/docs-menu.component.ts");
/* harmony import */ var _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demos/tooltip.component.ngfactory */ "./src/app/demos/tooltip.component.ngfactory.js");
/* harmony import */ var _demos_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demos/tooltip.component */ "./src/app/demos/tooltip.component.ts");
/* harmony import */ var _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-box.component.ngfactory */ "./src/app/docs/code-box.component.ngfactory.js");
/* harmony import */ var _code_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-box.component */ "./src/app/docs/code-box.component.ts");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/docs/tooltip.component.ts");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_DocTooltip = [];
var RenderType_DocTooltip = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DocTooltip, data: {} });

function View_DocTooltip_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "docs-wrapper", [["component", "Tooltip"]], null, null, null, _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_DocsMenuComponent_0"], _docs_menu_docs_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_DocsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _docs_menu_docs_menu_component__WEBPACK_IMPORTED_MODULE_2__["DocsMenuComponent"], [], { component: [0, "component"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 1, "demo-tooltip", [], null, null, null, _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_DemoTooltip_0"], _demos_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_DemoTooltip"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _demos_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["DemoTooltip"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 1, "code-box", [], null, null, null, _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CodeBox_0"], _code_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CodeBox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, null, 0, _code_box_component__WEBPACK_IMPORTED_MODULE_6__["CodeBox"], [], { snippets: [0, "snippets"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Tooltip"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.demoSnippets; _ck(_v, 7, 0, currVal_1); }, null); }
function View_DocTooltip_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "doc-tooltip", [], null, null, null, View_DocTooltip_0, RenderType_DocTooltip)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _tooltip_component__WEBPACK_IMPORTED_MODULE_7__["DocTooltip"], [_shared_analytics__WEBPACK_IMPORTED_MODULE_8__["Analytics"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DocTooltipNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("doc-tooltip", _tooltip_component__WEBPACK_IMPORTED_MODULE_7__["DocTooltip"], View_DocTooltip_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/docs/tooltip.component.ts":
/*!*******************************************!*\
  !*** ./src/app/docs/tooltip.component.ts ***!
  \*******************************************/
/*! exports provided: DocTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTooltip", function() { return DocTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/analytics */ "./src/app/docs/shared/analytics.ts");


var DocTooltip = /** @class */ (function () {
    function DocTooltip(_analytics) {
        this._analytics = _analytics;
        this.demoSnippets = {
            markup: __webpack_require__(/*! !prismjs-loader?lang=html!../demos/tooltip.component.html */ "./node_modules/prismjs-loader/index.js?lang=html!./src/app/demos/tooltip.component.html"),
            typescript: __webpack_require__(/*! !prismjs-loader?lang=typescript!../demos/tooltip.component.ts */ "./node_modules/prismjs-loader/index.js?lang=typescript!./src/app/demos/tooltip.component.ts")
        };
    }
    DocTooltip.prototype.ngOnInit = function () {
        // this._analytics.trackPageViews();
    };
    return DocTooltip;
}());



/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/global */ "./src/app/directives/global.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "section", [["class", "ng-banner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "row head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Orange B"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["oo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["sted with Angular"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [["class", "lead"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This is Ng-boosted, built with Boosted (css only), Angular and ng-bootstrap."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "a", [["class", "btn btn-secondary btn-lg"], ["href", ""], ["routerLink", "/start"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [["class", "version"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["Currently v", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [["alt", "ng-boosted logo"], ["src", "assets/img/ng-boosted_logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 20, "section", [["class", "only-in-ng"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 19, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "img", [["alt", "components examles"], ["src", "assets/img/only_in_boosted.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 15, "div", [["class", "col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 14, "div", [["class", "inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Only in ng-boosted !"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 8, "ul", [["class", "o-square-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Navbar component"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Custom checkboxes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Advanced carousel with touch support"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back to top link"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "a", [["class", "btn btn-secondary btn-lg"], ["href", ""], ["routerLink", "/boostwatch"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Discover"]))], function (_ck, _v) { var currVal_2 = "/start"; _ck(_v, 12, 0, currVal_2); var currVal_6 = "/boostwatch"; _ck(_v, 37, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_0, currVal_1); var currVal_3 = _co.globals.ngBoostedVersion; _ck(_v, 15, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).href; _ck(_v, 36, 0, currVal_4, currVal_5); }); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _directives_global__WEBPACK_IMPORTED_MODULE_4__["Globals"], _directives_global__WEBPACK_IMPORTED_MODULE_4__["Globals"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], [_directives_global__WEBPACK_IMPORTED_MODULE_4__["Globals"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/home/home.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/global */ "./src/app/directives/global.ts");


var HomeComponent = /** @class */ (function () {
    function HomeComponent(globals) {
        this.globals = globals;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/start/start.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_StartComponent, View_StartComponent_0, View_StartComponent_Host_0, StartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StartComponent", function() { return RenderType_StartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StartComponent_0", function() { return View_StartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StartComponent_Host_0", function() { return View_StartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponentNgFactory", function() { return StartComponentNgFactory; });
/* harmony import */ var _start_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.component.scss.shim.ngstyle */ "./src/app/start/start.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/global */ "./src/app/directives/global.ts");
/* harmony import */ var _start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.component */ "./src/app/start/start.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_StartComponent = [_start_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_StartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_StartComponent, data: {} });

function View_StartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 133, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Getting started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dependencies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ng-boosted is an extension of ng-bootstrap. It uses Orange graphic chart. It allows you to run your Angular project based on Boosted CSS. Like ng-bootstrap that backports js component from bootstrap in angular, ng-boosted aimed to backport custom Orange component of boosted in Angular. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Here are the dependencies that we rely on and you don't need to explicitly add to your project:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "ul", [["class", "o-square-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["href", "http://boosted.orange.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["Boosted ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["href", "https://ng-bootstrap.github.io/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["Ng-bootstrap ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Beware the versions above-mentioned are "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["the minimal required versions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". Some components need ng-bootstrap import. Find below instructions."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Installation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["For "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ng-bootstrap"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" installation, please see the documentation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["href", "https://ng-bootstrap.github.io/#/getting-started#installation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["here."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Install "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ng-boosted"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" via:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["npm install --save ng-boosted"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" or "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["yarn add ng-boosted"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Once installed, you need to import "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ng-boosted"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" modules."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, [" import ", " NgBoostedModule ", " from 'ng-boosted'; "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 15, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 14, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, [" @NgModule(", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" declarations: [AppComponent, ...],"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" imports: [ NgBoostedModule, ...],"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" bootstrap: [AppComponent]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, [" ", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](63, null, [" export class AppModule ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" If you need to use a component from ng-bootstrap you need to import it like explained in the ng-bootstrap documentation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "a", [["href", "https://ng-bootstrap.github.io/#/getting-started#installation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Adding Boosted CSS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Three options can be done to import Boosted CSS if downloaded from "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 0, "a", [["href", "https://www.npmjs.com/package/boosted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["npm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Configure your angular.json"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 11, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Inside the file, add the following path:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 7, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \"styles\": ["])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \"/path/node_modules/boosted/dist/css/boosted.min.css\","])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \"styles.css\""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Configure your styles.css"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Inside your styles.css, import boosted css:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["@import '~boosted/dist/css/boosted.min.css'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Configure your styles.scss with SASS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["if you are using SASS, then you need to do this in your styles.scss:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["@import '../node_modules/boosted/scss/boosted.scss'"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Building this documentation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Simply "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["npm run build:docs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" and the output goes to a "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["_gh_pages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" folder."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You can also run this documentation with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["npm run start"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The output is then served to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 1, "a", [["href", "http://localhost:3030"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["http://localhost:3030"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copyright and license"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Code and documentation copyright 2018 Orange SA. Code released under "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 1, "a", [["href", "https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/LICENSE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["the MIT license"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". Docs released under "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 1, "a", [["href", "https://github.com/Orange-OpenSource/Orange-Boosted-Angular/blob/master/docs/LICENSE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Creative Commons Attribution"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.globals.boostedVersion; _ck(_v, 12, 0, currVal_0); var currVal_1 = _co.globals.ngBootstrapVersion; _ck(_v, 15, 0, currVal_1); var currVal_2 = "{"; var currVal_3 = "}"; _ck(_v, 50, 0, currVal_2, currVal_3); var currVal_4 = "{"; _ck(_v, 53, 0, currVal_4); var currVal_5 = "}"; _ck(_v, 61, 0, currVal_5); var currVal_6 = "{"; _ck(_v, 63, 0, currVal_6); var currVal_7 = "}"; _ck(_v, 65, 0, currVal_7); }); }
function View_StartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-start", [], null, null, null, View_StartComponent_0, RenderType_StartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _directives_global__WEBPACK_IMPORTED_MODULE_2__["Globals"], _directives_global__WEBPACK_IMPORTED_MODULE_2__["Globals"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], [_directives_global__WEBPACK_IMPORTED_MODULE_2__["Globals"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var StartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-start", _start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], View_StartComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/start/start.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/start/start.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/global */ "./src/app/directives/global.ts");


var StartComponent = /** @class */ (function () {
    function StartComponent(globals) {
        this.globals = globals;
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    return StartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\svzv6149\Documents\Projet_OAB\Orange-Boosted-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map