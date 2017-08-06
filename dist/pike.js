(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pike = factory());
}(this, (function () { 'use strict';

var show = (function (element, value) {
  var style = element.style;
  style.display = value ? '' : 'none';
});

var hide = (function (element, value) {
  var style = element.style;
  style.display = value ? 'none' : '';
});

var binders = {
  show: show,
  hide: hide
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function binding(element, attribute, data) {
  var bindingRegExp = /^data-/;
  var name = attribute.name,
      value = attribute.value;


  if (bindingRegExp.test(name)) {
    var type = name.replace(bindingRegExp, '');
    var binder = binders[type];

    if (binder) {
      binder(element, data[value]);
    }
  }
}

function parse(element, data) {
  if (element.nodeType !== 1 && element.nodeType !== 3) {
    return;
  }

  var attributes = element.attributes;


  for (var i = 0; i < attributes.length; i++) {
    var attribute = attributes[i];
    binding(element, attribute, data);
  }
}

var Pike = function () {
  function Pike(element) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Pike);

    this.element = element;
    this.data = data;

    this.build();
  }

  createClass(Pike, [{
    key: 'build',
    value: function build() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.element.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          parse(child, this.data);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Pike;
}();

return Pike;

})));
