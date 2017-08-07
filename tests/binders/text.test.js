import text from '../../src/binders/text';

let element;

beforeAll(() => {
  document.body.innerHTML = `<span class="element"></span>`;
  element = document.querySelector('.element');
});

describe('binders:text', () => {
  it('sets element text with value', () => {
    text(element, 'Foo Bar');
    expect(element.textContent).toEqual('Foo Bar');
  });
});
