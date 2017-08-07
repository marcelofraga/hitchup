// @flow

import parse from './parse';

class Hitchup {
  element: HTMLElement;
  model: Object;

  constructor(element: HTMLElement, model: Object = {}) {
    this.element = element;
    this.model = model;

    this.build();
  }

  build() {
    parse.call(this.model, this.element);
  }
}

export default Hitchup;
