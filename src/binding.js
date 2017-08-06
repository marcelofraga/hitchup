// @flow

import binders from './binders';

const bindingRegExp: RegExp = /^data-/;

export default function binding(element: HTMLElement, attribute: Attr) {
  const attrName: string = attribute.name;
  const attrValue: string = attribute.value;

  if (bindingRegExp.test(attrName)) {
    const type: string = attrName.replace(bindingRegExp, '');
    const binder: ?Function = binders[type];

    if (binder) {
      const value: ?any = attrValue.split('.').reduce((object: Object, prop: string) => object && object[prop], this);
      binder(element, value);
    }
  }
}
