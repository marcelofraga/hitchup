import enabled from '../../src/directives/enabled';

let element;

beforeAll(() => {
  document.body.innerHTML = `<input type="text" class="element">`;
  element = document.querySelector('.element');
});

describe('directives:enabled', () => {
  it('enables the element when value is trua', () => {
    enabled(element, true);
    expect(element.disabled).toEqual(false);
  });
});
