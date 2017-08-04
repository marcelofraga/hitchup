// @flow

class Pike {
  element: Node | void;
  data: Object | void;

  constructor(element: Node, data: Object = {}) {
    this.element = element;
    this.data = data;
  }
}

export default Pike;
