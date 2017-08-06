import show from '../../src/binders/show';

let element;

beforeAll(() => {
  document.body.innerHTML = `<div class="element"></div>`;
  element = document.querySelector('.element');
});

describe('binders:show', () => {
  it('shows element when value is true', () => {
    show(element, true);
    expect(element.style.display).toEqual('');
  });

  it('hides element when value is false', () => {
    show(element, false);
    expect(element.style.display).toEqual('none');
  });
});
