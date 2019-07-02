# Orange Boosted Angular

This document describes how to set up your development environment to build and test Ng-Boosted.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Installing Ng-Boosted](#installing-lib)
* [Running demo Locally](#running-demo-locally)
* [Copyright and license](#copyright-and-license)

## Prerequisite Software

Before you can build and test Ng-Boosted, you must install and configure the
following products on your development machine:

* [Node.js](http://nodejs.org), (version `>=4.2.1`) which is used to run tests, and generate distributable files. We also use Node's Package Manager, `npm`
  (version `>3.8.x`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

## Getting the Sources

Clone this repository [Orange Boosted Angular](https://github.com/Orange-OpenSource/Orange-Boosted-Angular.git)


## Installing NPM Modules

Next, install the JavaScript modules needed to build Ng-Boosted:

```shell
# Install Ng-Boosted project dependencies (package.json)
npm install
```

## Installing Ng-Boosted

Here is the [explanation](https://ng-boosted.orange.com/#/start) on how to install and use ng-boosted library.

## Copyright and license

Thanks to [Netlify](https://www.netlify.com/), we are able to deploy pre-versions at [Ng-Boosted](https://ng-boosted.netlify.com).
Code and documentation copyright 2018 Orange SA. Code released under [the MIT license](LICENSE). Docs released under [Creative Commons Attribution](docs/LICENSE).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
