import html from '../../src/directives/html';

let element;

beforeAll(() => {
  document.body.innerHTML = `<div class="element"></div>`;
  element = document.querySelector('.element');
});

describe('directives:html', () => {
  it('sets element html with value', () => {
    html(element, '<strong>Foo Bar</strong>');
    expect(element.innerHTML).toEqual('<strong>Foo Bar</strong>');
  });
});
