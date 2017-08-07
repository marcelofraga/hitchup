(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.hitchup = factory());
}(this, (function () { 'use strict';

var hide = (function (element, value) {
  var style = element.style;
  style.display = value ? 'none' : '';
});

var show = (function (element, value) {
  var style = element.style;
  style.display = value ? '' : 'none';
});

var text = (function (element, value) {
  element.textContent = value ? value : '';
});

var html = (function (element, value) {
  element.innerHTML = value ? value : '';
});

var binders = {
  hide: hide,
  show: show,
  text: text,
  html: html
};

var bindingRegExp = /^data-/;

function binding(element, attribute) {
  var attrName = attribute.name;
  var attrValue = attribute.value;

  if (bindingRegExp.test(attrName)) {
    var type = attrName.replace(bindingRegExp, '');
    var binder = binders[type];

    if (binder) {
      var value = attrValue.split('.').reduce(function (object, prop) {
        return object && object[prop];
      }, this);
      binder(element, value);
    }
  }
}

function parse(element) {
  var _this = this;

  if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.TEXT_NODE) {
    throw new TypeError('must be an element or text node');
  }

  var attributes = element.attributes,
      children = element.children;


  Object.values(attributes).forEach(function (attribute) {
    return binding.call(_this, element, attribute);
  });
  Object.values(children).forEach(function (child) {
    return parse.call(_this, child);
  });
}

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

var Hitchup = function () {
  function Hitchup(element) {
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Hitchup);

    this.element = element;
    this.model = model;

    this.build();
  }

  createClass(Hitchup, [{
    key: 'build',
    value: function build() {
      parse.call(this.model, this.element);
    }
  }]);
  return Hitchup;
}();

return Hitchup;

})));
