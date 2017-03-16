'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = exports.pipeline = undefined;

var _pipeline = require('./lib/pipeline');

var _pipeline2 = _interopRequireDefault(_pipeline);

var _reduce = require('./lib/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.pipeline = _pipeline2.default;
exports.reduce = _reduce2.default;