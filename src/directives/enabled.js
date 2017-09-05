// @flow

export default (element: HTMLInputElement, value: boolean): void => {
  element.disabled = !value;
};
