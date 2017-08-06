import * as binders from '../src/binders';
import binding from '../src/binding';

const data = {
  user: {
    isHidden: true,
    isShown: false
  }
};

let userHide;
let userShow;

beforeAll(() => {
  document.body.innerHTML = `
    <span data-hide="user.isHidden" class="user-hide"></span>
    <span data-show="user.isShown" class="user-show"></span>
  `;

  binders.default.hide = jest.fn();
  binders.default.show = jest.fn();

  userHide = document.querySelector('.user-hide');
  userShow = document.querySelector('.user-show');

  binding.call(data, userHide, userHide.attributes[0]);
  binding.call(data, userShow, userShow.attributes[0]);
});

describe('binding', () => {
  it('calls the binder related to the element', () => {
    expect(binders.default.hide).toHaveBeenCalledWith(userHide, true);
    expect(binders.default.show).toHaveBeenCalledWith(userShow, false);
  });
});
