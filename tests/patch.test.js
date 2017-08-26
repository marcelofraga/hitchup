import hitchup from '../src';

describe('Patch', () => {
  document.body.innerHTML = `<span class="foo" data-text="foo.bar"></span>`;

  let instance;
  let element;
  const data = {foo: {bar: 'Hello World'}};

  beforeEach(() => {
    element = document.querySelector('.foo');
    instance = hitchup(element, data);
  });

  it('init patch', () => {
    expect(element.textContent).toEqual('Hello World');
  });

  it('patches the data and call element directives', () => {
    data.foo.bar = 'Other Text';
    expect(element.textContent).toEqual('Other Text');
  });
});

