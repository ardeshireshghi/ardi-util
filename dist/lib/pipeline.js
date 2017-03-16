'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pipeline;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pipeline() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var fns = Array.isArray(args[0]) ? args[0] : args;
  var composedFn = function composedFn(seed) {
    return (0, _reduce2.default)(fns, function (result, fn) {
      return fn(result);
    }, seed);
  };

  return composedFn;
}