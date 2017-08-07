// @flow

export default (element: HTMLElement, value: string): void => {
  element.textContent = value ? value : '';
};
