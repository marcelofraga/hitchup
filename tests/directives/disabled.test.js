import disabled from '../../src/directives/disabled';

let element;

beforeAll(() => {
  document.body.innerHTML = `<input type="text" class="element">`;
  element = document.querySelector('.element');
});

describe('directives:enabled', () => {
  it('disables the element when value is trua', () => {
    disabled(element, true);
    expect(element.disabled).toEqual(true);
  });
});
