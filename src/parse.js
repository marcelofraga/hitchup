// @flow

import binding from './binding';

export default function parse(element: HTMLElement) {
  if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.TEXT_NODE) {
    throw new TypeError('must be an element or text node');
  }

  const {attributes, children}: {
    attributes: NamedNodeMap,
    children: HTMLCollection<HTMLElement>
  } = element;

  for (let i = 0; i < attributes.length; i++) {
    binding.call(this, element, attributes[i]);
  }

  for (let i = 0; i < children.length; i++) {
    parse.call(this, children[i]);
  }
}
