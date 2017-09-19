// @flow

export default {
  bind(element: HTMLInputElement, callback: Function) {
    element.addEventListener('input', callback, false);
  },

  unbind(element: HTMLInputElement, callback: Function) {
    element.removeEventListener('input', callback, false);
  },

  publish(key: string, {target}: {target: HTMLInputElement}) {
    const {value}: {value: any} = target;
    this[key] = value;
  },

  update(element: HTMLInputElement, value: any) {
    if (value !== element.value) {
      element.value = value || '';
    }
  }
};
