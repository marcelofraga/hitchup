// @flow

import {DataCache} from './util/cache';

export function patch(data: Object, directives: Object, root?: string) {
  Object.keys(data).forEach(key => {
    const value: any = data[key];
    const name: string = root ? [root, key].join('.') : key;
    const bindings: Array<Object> = directives[name];

    if (typeof value === 'object') {
      patch(value, directives, name);
      return;
    }

    if (!bindings) {
      return;
    }

    if (!DataCache.has(name) || DataCache.get(name).value !== value) {
      bindings.forEach(({element, binding}) => binding(element, value));
      DataCache.set(name, value);
    }
  });
}

export function initPatch(instance: Object) {
  const data: Object = instance.$data;
  const directives: Object = instance.$directives;

  patch(data, directives);
}
