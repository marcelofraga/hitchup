// @flow

import {DataCache} from './util/cache';

function cacheData(instance: Object, data: Object, root: string | void) {
  Object.keys(data).forEach(key => {
    let value: any = data[key];
    const name: string = root ? [root, key].join('.') : key;

    if (typeof value === 'object') {
      cacheData(instance, value, name);
      return;
    }

    DataCache.set(name, value);

    Object.defineProperty(data, key, {
      get() {
        return value;
      },

      set(newValue) {
        if (newValue === value) {
          return;
        }

        value = newValue;
        instance.$update(data, root);
      }
    });
  });
}

export function initData(instance: Object) {
  const data: Object = instance.$data;
  cacheData(instance, data);
}
