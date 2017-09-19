import hitchup from '../../src';

describe('Directives', () => {
  let instance;
  let element;

  const data = {isVisible: true, message: 'text'};

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="foo" data-show="isVisible">
        <span class="bar" data-text="message"></span>
        <input class="baz" data-model="message">
      </div>
    `;

    element = document.querySelector('.foo');
    instance = hitchup(element, data);
  });

  it('stores directives', () => {
    expect(instance.$directives).toMatchObject({
      message: [{
        binding: expect.any(Function),
        element: element.children[0]
      }, {
        binding: expect.any(Function),
        element: element.children[1]
      }],
      isVisible: [{
        binding: expect.any(Function),
        element
      }]
    });
  });
});
