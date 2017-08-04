(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pike = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Pike = function Pike(element) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, Pike);

  this.element = element;
  this.data = data;
};

return Pike;

})));
