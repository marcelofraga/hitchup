import Pike from '../src/pike';

const data = {
  user: {
    name: 'John'
  }
};

let instance;
let dummy;
let element;

class Dummy {
  constructor(element, data) {
    this.user = data.user;
  }
}

beforeEach(() => {
  document.body.innerHTML = `
    <div class="user">
      <span class="user-name" data-text="user.name"></span>
    </div>
  `;

  element = document.querySelector('.user');
  instance = new Pike(element, data);
  dummy = new Dummy(element, data);
});

describe('Pike', () => {
  it('throws type error when does not pass an element', () => {
    expect(() => new Pike('.user')).toThrowError('must be an element or text node');
  });

  it('sets element and model', () => {
    expect(instance.element).toBe(element);
    expect(instance.model).toBe(data);
  });

  it('run binders by the declarative data binding of the element', () => {
    const child = element.children[0];
    expect(child.textContent).toEqual('John');
  });

  describe('when model is a class instance', () => {
    beforeEach(() => {
      instance = new Pike(element, dummy);
    });

    it('run binder with instance as data model', () => {
      const child = element.children[0];
      expect(child.textContent).toEqual('John');
    });
  });
});
