import model from '../../src/directives/model';

describe('directives:model', () => {
  let element;
  let publish;
  const data = {name: 'John'};
  const event = new Event('input', {cancelable: true, bubbles: true});

  beforeEach(() => {
    document.body.innerHTML = `<input type="text" class="element">`;
    element = document.querySelector('.element');
    publish = jest.fn();
  });

  it('binds element with callback', () => {
    model.bind(element, publish);
    element.dispatchEvent(event);

    expect(publish).toBeCalled();
  });

  it('unbinds element with callback', () => {
    model.unbind(element, publish);
    element.dispatchEvent(event);

    expect(publish).not.toBeCalled();
  });

  it('publishes data changes in input element', () => {
    model.bind(element, model.publish.bind(data, 'name'));
    element.value = 'Mike';
    element.dispatchEvent(event);

    expect(data.name).toEqual('Mike');
  });

  it('updates element value', () => {
    model.update(element, 'Michael');
    expect(element.value).toEqual('Michael');
  });
});
