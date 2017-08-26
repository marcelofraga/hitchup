(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Hitchup = factory());
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

var bindingEx = /^data-/;
var directives = {
  hide: hide,
  show: show,
  text: text,
  html: html
};

function buildDirectives(instance, element) {
  var attributes = element.attributes,
      children = element.children;


  for (var i = 0; i < attributes.length; i++) {
    var attribute = attributes[i];
    var name = attribute.name,
        value = attribute.value;


    if (!bindingEx.test(attribute.name)) {
      continue;
    }

    var type = name.replace(bindingEx, '');
    var binding = directives[type];

    instance.$directives[value] = instance.$directives[value] || [];
    instance.$directives[value].push({ element: element, binding: binding });
  }

  for (var _i = 0; _i < children.length; _i++) {
    buildDirectives(instance, children[_i]);
  }
}

function initDirectives(instance) {
  instance.$directives = {};
  var element = instance.$element;
  buildDirectives(instance, element);
}

var DataCache = new Map();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

function cacheData(instance, data, root) {
  Object.keys(data).forEach(function (key) {
    var value = data[key];
    var name = root ? [root, key].join('.') : key;

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      cacheData(instance, value, name);
      return;
    }

    DataCache.set(name, value);

    Object.defineProperty(data, key, {
      get: function get$$1() {
        return value;
      },
      set: function set$$1(newValue) {
        if (newValue === value) {
          return;
        }

        value = newValue;
        instance.$update(data, root);
      }
    });
  });
}

function initData(instance) {
  var data = instance.$data;
  cacheData(instance, data);
}

function patch(data, directives, root) {
  Object.keys(data).forEach(function (key) {
    var value = data[key];
    var name = root ? [root, key].join('.') : key;
    var bindings = directives[name];

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      patch(value, directives, name);
      return;
    }

    if (!bindings) {
      return;
    }

    if (!DataCache.has(name) || DataCache.get(name).value !== value) {
      bindings.forEach(function (_ref) {
        var element = _ref.element,
            binding = _ref.binding;
        return binding(element, value);
      });
      DataCache.set(name, value);
    }
  });
}

function initPatch(instance) {
  var data = instance.$data;
  var directives = instance.$directives;

  patch(data, directives);
}

var Hitchup = function () {
  function Hitchup(element) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Hitchup);

    this.$element = element;
    this.$data = data;
  }

  createClass(Hitchup, [{
    key: '$mount',
    value: function $mount() {
      initDirectives(this);
      initPatch(this);
      initData(this);

      return this;
    }
  }, {
    key: '$update',
    value: function $update(data, root) {
      patch(data || this.$data, this.$directives, root);

      return this;
    }
  }, {
    key: '$destroy',
    value: function $destroy() {}
  }]);
  return Hitchup;
}();

return Hitchup;

})));
