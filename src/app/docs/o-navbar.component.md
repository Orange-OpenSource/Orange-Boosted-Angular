#### ONavbar

Orange navbar component is designed to work with Angular [router](https://angular.io/docs/ts/latest/guide/router.html) module.

Main element `<lib-o-navbar>` accepts the following parameters :

* `homeRoute` which is the default route of your application when user clicks the logo link.
* `breakpoint` which is the bootstrap suffix for when the navbar must collapse to mobile view. The default value is `"sm"`. Checkout [Boosted documentation][1] for supported values.
* `containerClass` to specify `container` or `container-fluid` class. The default value is `container`.
* `ariaLabel` to add a aria-Label attribute to  `<button>` tag.

* `brandPath` to specify path and file of the brand logo.
* `brandLabel` to specify alt text for image and link title at the same time.
* `isCollapsed` to close the navbar after clicking on navbar items. (just for mobile apps).

There is three supported types of child elements to `<lib-o-navbar>`. Each of them must use native `<li>` html element.

* `o-nav-link` for application navigation using Angular router module.
* classic `<a href class="nav-link"></a>` for external links.

##### ONavLink

This component has two parameters :

* `route` is the targeted app route. It is the same value you would use in `[routerLink]`attribute.
* `query`, optional, is the params to pass. It is the same value you would use in `[queryParams]`attribute.
* `title` which acts as `<a>` tag attribute `title`. Can be handy when using icon nav links with no text in it. No provided value will not set the `title`attribute.

##### ONavMenu

This component has one parameter :

* `menuTitle` which is the dropdown title.

The host tag `<li>` must include the `ngbDropdown` directive in order to allow dropdown behaviour. Dropdown menu content must be included inside `<li>` element. See Dropdown [documentation](https://ng-bootstrap.github.io/#/components/dropdown) for more information.

[1]: https://boosted.orange.com/docs/4.4/layout/overview "Title"


