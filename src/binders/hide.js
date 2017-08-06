// @flow

export default (element: HTMLElement, value: boolean): void => {
  const style: Object = element.style;
  style.display = value ? 'none' : '';
};
