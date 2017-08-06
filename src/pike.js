// @flow

import binders from './binders';

function binding(element: HTMLElement, attribute: Attr, data: Object) {
  const bindingRegExp: RegExp = /^data-/;
  const {name, value}: {name: string, value: string} = attribute;

  if (bindingRegExp.test(name)) {
    const type: string = name.replace(bindingRegExp, '');
    const binder: ?Function = binders[type];

    if (binder) {
      binder(element, data[value]);
    }
  }
}

function parse(element: HTMLElement, data) {
  if (element.nodeType !== 1 && element.nodeType !== 3) {
    return;
  }

  const {attributes}: {attributes: NamedNodeMap} = element;

  for (let i = 0; i < attributes.length; i++) {
    const attribute: Attr = attributes[i];
    binding(element, attribute, data);
  }
}

class Pike {
  element: HTMLElement;
  data: Object;

  constructor(element: HTMLElement, data: Object = {}) {
    this.element = element;
    this.data = data;

    this.build();
  }

  build() {
    for (let child of this.element.children) {
      parse(child, this.data);
    }
  }
}

export default Pike;
