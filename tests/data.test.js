import hitchup from '../src';
import {DataCache} from '../src/util/cache';

describe('Data', () => {
  let instance;
  let update;
  const data = {foo: {bar: 'Hello World'}};

  beforeEach(() => {
    instance = hitchup(document.body, data);
    update = jest.spyOn(instance, '$update');
  });

  it('caches the data', () => {
    expect(DataCache.get('foo.bar')).toEqual('Hello World');
  });

  it('calls instance update when some property is changed', () => {
    data.foo.bar = 'Other Text';
    expect(update).toBeCalled();
  });
});

