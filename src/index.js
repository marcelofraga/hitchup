
// @flow

import {initDirectives} from './directives';
import {initData} from './data';
import {initPatch, patch} from './patch';

class Hitchup {
  $element: HTMLElement;
  $data: Object;
  $directives: Object;

  constructor(element: HTMLElement, data: Object = {}) {
    this.$element = element;
    this.$data = data;
  }

  $mount() {
    initDirectives(this);
    initPatch(this);
    initData(this);

    return this;
  }

  $update(data: Object, root: void) {
    patch(data || this.$data, this.$directives, root);

    return this;
  }

  $destroy() {}
}

export default (element: HTMLElement, data: Object) => new Hitchup(element, data).$mount();
