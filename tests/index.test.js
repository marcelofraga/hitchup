import hitchup from '../src';
import {DataCache} from '../src/util/cache';

describe('Hitchup', () => {
  let data;
  let instance;
  let element;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="user">
        <span class="user-name" data-text="user.name"></span>
      </div>
    `;

    data = {user: {name: 'John'}};
    element = document.querySelector('.user');
    instance = hitchup(element, data);
  });

  it('sets element and model', () => {
    expect(instance.$element).toBe(element);
    expect(instance.$data).toBe(data);
  });

  it('mounts directives and cache data', () => {
    expect(instance.$directives).toMatchObject({'user.name': [expect.any(Object)]});
    expect(DataCache.get('user.name')).toEqual('John');
  });

  it('run bindings by the declarative directive of the element', () => {
    const child = element.children[0];
    expect(child.textContent).toEqual('John');
  });

  it('updates elements when data property is changed', () => {
    const child = element.children[0];
    data.user.name = 'Steve';
    expect(child.textContent).toEqual('Steve');
  });

  describe('when data is a class instance', () => {
    let dummy;

    beforeEach(() => {
      class Dummy {
        constructor(element, data) {
          this.user = data.user;
        }
      }

      dummy = new Dummy(element, data);
      instance = hitchup(element, dummy);
    });

    it('run binding with instance as data object', () => {
      const child = element.children[0];
      expect(child.textContent).toEqual('John');
    });
  });
});
