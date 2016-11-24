// Polyfills

import 'core-js/client/shim';
import 'reflect-metadata';

// Typescript emit helpers polyfill
import 'ts-helpers';

require('zone.js/dist/zone');

if ('production' === process.env.ENV) {
  // Production

} else {
  // Development

  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');

}
