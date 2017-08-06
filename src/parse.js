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

  Object.values(attributes).forEach((attribute: any) => binding.call(this, element, attribute));
  Object.values(children).forEach((child: any) => parse.call(this, child));
}
