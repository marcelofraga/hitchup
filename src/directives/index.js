// @flow

import hide from './hide';
import show from './show';
import text from './text';
import html from './html';

const bindingEx: RegExp = /^data-/;
const directives: {
  [string]: Function
} = {
  hide,
  show,
  text,
  html
};

function buildDirectives(instance: Object, element: HTMLElement) {
  const {attributes, children}: {
    attributes: NamedNodeMap,
    children: HTMLCollection<HTMLElement>
  } = element;

  for (let i = 0; i < attributes.length; i++) {
    const attribute: Attr = attributes[i];
    const {name, value}: {name: string, value: string} = attribute;

    if (!bindingEx.test(attribute.name)) {
      continue;
    }

    const type: string = name.replace(bindingEx, '');
    const binding: ?Function = directives[type];

    instance.$directives[value] = instance.$directives[value] || [];
    instance.$directives[value].push({element, binding});
  }

  for (let i = 0; i < children.length; i++) {
    buildDirectives(instance, children[i]);
  }
}

export function initDirectives(instance: Object) {
  instance.$directives = {};
  const element: HTMLElement = instance.$element;
  buildDirectives(instance, element);
}
