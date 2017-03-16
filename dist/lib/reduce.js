'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reduce() {
  for (var _len = arguments.length, theArgs = Array(_len), _key = 0; _key < _len; _key++) {
    theArgs[_key] = arguments[_key];
  }

  if ('reduce' in Array.prototype) {
    var arr = theArgs[0];
    return arr.reduce.apply(arr, _toConsumableArray(theArgs.slice(1)));
  }

  return _lodash.reduce.apply(undefined, theArgs);
}