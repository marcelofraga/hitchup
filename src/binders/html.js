// @flow

export default (element: HTMLElement, value: string): void => {
  element.innerHTML = value ? value : '';
};
