// @flow

import hide from './hide';
import show from './show';
import text from './text';
import html from './html';

const binders: {
  [string]: Function
} = {
  hide,
  show,
  text,
  html
};

export default binders;
