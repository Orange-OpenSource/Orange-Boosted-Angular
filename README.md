# Building and Running Ng-Boosted

This document describes how to set up your development environment to build and test Ng-Boosted.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Running demo Locally](#running-demo-locally)
* [Copyright and license](#copyright-and-license)

## Prerequisite Software

Before you can build and test Ng-Boosted, you must install and configure the
following products on your development machine:

* [Node.js](http://nodejs.org), (version `>=4.2.1`) which is used to run tests, and generate distributable files. We also use Node's Package Manager, `npm`
  (version `>3.8.x`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

## Getting the Sources

Clone this repository


## Installing NPM Modules

Next, install the JavaScript modules needed to build Ng-Boosted:

```shell
# Install Ng-Boosted project dependencies (package.json)
npm install
```

## Running demo locally

```shell
npm start
```

 and go to [http://localhost:3030/](http://localhost:3030/)

## Copyright and license

Thanks to [Netlify](https://www.netlify.com/), we are able to deploy pre-versions at [Ng-Boosted](https://ng-boosted.netlify.com).
Code and documentation copyright 2018 Orange SA. Code released under [the MIT license](LICENSE). Docs released under [Creative Commons Attribution](docs/LICENSE).
