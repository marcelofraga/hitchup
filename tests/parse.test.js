import * as binding from '../src/binding';
import parse from '../src/parse';

let element;

beforeAll(() => {
  document.body.innerHTML = `
    <div class="parent" data-bind="foo">
      <div class="child" data-bind="bar"></div>
    </div>
  `;

  element = document.querySelector('.parent');
  binding.default = jest.fn();

  parse(element);
});

describe('parse', () => {
  it('throws type error when element is not an element or text node', () => {
    expect(() => parse(document)).toThrowError('must be an element or text node');
  });

  it('calls binding to element attributes', () => {
    expect(binding.default).toHaveBeenCalledWith(element, expect.any(Attr));
  });

  it('calls parse recursively to element children', () => {
    const child = element.children[0];
    expect(binding.default).toHaveBeenCalledWith(child, expect.any(Attr));
  });
});
