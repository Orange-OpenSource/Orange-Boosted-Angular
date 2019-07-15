<a name="4.2.1"></a> (15/07/2019)
## 4.2.1

### This version requires Angular > 7.0.0 and Ng-Bootstrap 4.2.1

### Changes
*	**O-Calendar, O-Carousel, O-Navbar, O-Scroll, O-switch :** From now on, add lib when calling the selector of the component as lib-o-navbar, lib-o-scrool, lib-o-switch, lib-o-carousel-slide, lib-o-calendar [c909875](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/c90987584e9f0153b9d46abec8b070aeeac791f3)

*	**lib-O-Calendar, lib-O-Carousel, lib-O-Navbar, lib-O-Scroll, lib-O-switch :** Improvement have been done on testing the DOM of each component [ec0a1e9](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/ec0a1e97dd418cd5804491bd6d8a54a2a1dd2e23)
*	**O-Carousel :** Removing types/swiper [e58474b](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/e58d74b583eb72c73d3eae57526b0e3ad6069502)

### Bug Fixed
*	**lib-O-Navbar :** Updating the dropdown item in lib-o-navbar and changing the call name inside the documentation from <o-navbar> to <lib-o-navbar> [eb52030](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/pull/92/commits/eb52030a7bf230d03cc8f69491c9b586033bb744)

*	**lib-O-Navbar :** Changing the call name inside the documentation from <o-navbar> to <lib-o-navbar> [0eafd44](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/pull/92/commits/0eafd44021a85ea4b420151b0d99c249af3e35ac)

<a name="4.2.1-beta.2"></a> (08/07/2019)
## 4.2.1-beta.2

### This version requires Angular > 7.0.0 and Ng-Bootstrap 4.2.1

### Bug Fixed
*	**O-Calendar, O-Carousel, O-Navbar, O-Scroll, O-switch :** Improvement done on testing the component [ec0a1e9](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/ec0a1e97dd418cd5804491bd6d8a54a2a1dd2e23)
*	**O-Carousel :** Removing types/swiper [e58474b](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/e58d74b583eb72c73d3eae57526b0e3ad6069502)
<a name="4.2.1-beta.1"></a> (27/06/2019)
## 4.2.1-beta.1

### This version requires Angular 8.0.0 and Ng-Bootstrap 4.2.1

### Changed/Improvement
*	**Package:** Adding Angular-Cli, remaking the library [3fed9aa](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/3fed9aa01b80ae7937a4bad2192cfa25d94f323e) 

### Bug Fixed
*	**O-Calendar, O-Carousel, O-Navbar, O-Scroll, O-switch :** From now on, add lib when calling the selector of the component as lib-o-navbar, lib-o-scrool, lib-o-switch, lib-o-carousel-slide, lib-o-calendar [c909875](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/c90987584e9f0153b9d46abec8b070aeeac791f3)


<a name="4.2.1-beta.0"></a> (25/06/2019)
## 4.2.1-beta.0

### This version requires Angular 8.0.0 and Ng-Bootstrap 4.2.1

### Changed/Improvement
*	**Packages:** Update Angular and ng bootrap package [5ab3539](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/5ab3539c0d2f88470b9666fb76a4c7c2ff1749c9) 

### Bug Fixed
*	**O-Calendar, Carousel, O-Navbar :** Updating ViewChild function in order to take two params due to the update of Angular [a9d3788](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/a9d37880e2dae9b2c11975aed8d72e08deb811b7)

<a name="4.2.0"></a> (19/06/2019)
## 4.2.0

### Changed/Improvement
*	**Calendar:** Contrast enhanced change blue on grey to black on grey inside header and white on orange to white on black on today button [f98f5a8](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/f98f5a82c0460e6db3ea8234307520356fdb28e1)
*	**Calendar:** Adding title attribute along with aria-label for compliance with WCAG [ae1b40d](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/ae1b40d8881b8d7dce5563e9db24a9c0b5a2e141)
*	**Calendar:** Appending the button after the input [9caea6e](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/9caea6e8f6ccba0ebb44b84fdae65d422b69a1d4)
*	**Calendar:** Using class.stylename in order to improve css input [b752546](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/b7525463fc5316867830f02ee27d3dd3b0124745)
*	**Swiper:** Use a straight line for focus [5552c0b](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/5552c0bdc963f947313bc9a7b1840c46a177d8a5)
*	**Packages:** Update ng bootrap package [eff6e8c](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/commit/eff6e8cbe5620a50f142895bf8c979aa341116e3) 
### Bug Fixed
*	**Carousel/Swiper:** Changing the the status of pause from private to public [58f6097](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/pull/72/commits/58f60975af7e8bd9ed6da0899ad7cf2e4d1b3cc9)
*   **Switch** Adding an output to bind the switch event in and out. [7f6e26d](https://github.com/Orange-OpenSource/Orange-Boosted-Angular/pull/75/commits/56353629ee4290e5ecaf314a5a1b2cb492dddd94)

<a name="4.1.3"></a> (22/05/2019)
## 4.1.3
### Added
*	Adding Orange logo (8f24268)
*	Adding Netlify link (6817d87) and logo (a738485)
*	**Documentation:** Explanation on how to add boosted scss files to Angular Project (4e09bdb)
*	**Documentation:** Adding explanation 
### Changed
*	**ScrollTop:** redefine the function scroll to top (116a98f)
*	**Swiper:** Adding pause and play button, Adding listener on mouse enter/leave and focus in or out (5fe45a6)
*	**Carousel:** Deleted (0df8e7c)
*	**Packages:** Moves unnecessary package to devdependencies (82e6b94) 
*	**Documentation:** Explanation on what package is mandatory or optional (dc47b38)
*	**Dropdown:** Update class used to enable keyboard navigation (0019c92)
*	**Tooltip:** Adding a tooltip opening up and closing by a click (47aa442)
### Bug Fixed
*	**Pagination:** remove the char appearing when clicking on prev/next indicator (5a4ea04)
*	**Menu on IE:** adding height on css class to display a logo in the same row (5137dd8)
*	**Navbar:** Enabling to pass a query (cd913a5)
