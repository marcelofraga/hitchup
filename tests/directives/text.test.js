import text from '../../src/directives/text';

let element;

beforeAll(() => {
  document.body.innerHTML = `<span class="element"></span>`;
  element = document.querySelector('.element');
});

describe('directives:text', () => {
  it('sets element text with value', () => {
    text(element, 'Foo Bar');
    expect(element.textContent).toEqual('Foo Bar');
  });
});
