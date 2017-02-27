Orange navbar component is designed to work with Angular [router](https://angular.io/docs/ts/latest/guide/router.html) module.

Main element `<o-navbar>`accepts two parameters :

* `homeRoute` which is the default route of your application when user clicks the logo link.
* `breakpoint` which is the bootstrap suffix for when the navbar must collapse to mobile view. Default value is `"sm"`.
Checkout Boosted [documentation](http://boosted.orange.com/v4-alpha/layout/responsive-utilities/#available-classes) for supported values

Element `<o-nav-link>` has also two parameters :

* `title` which is the link text.
* `route` which the targeted app route, same value as you would use in `[routerLink]`attribute.