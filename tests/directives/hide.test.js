import hide from '../../src/directives/hide';

let element;

beforeAll(() => {
  document.body.innerHTML = `<div class="element"></div>`;
  element = document.querySelector('.element');
});

describe('binders:hide', () => {
  it('hides element when value is true', () => {
    hide(element, true);
    expect(element.style.display).toEqual('none');
  });

  it('shows element when value is false', () => {
    hide(element, false);
    expect(element.style.display).toEqual('');
  });
});
