# hitchup [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Declarative data binding solution.

## Installation

```sh
$ npm install --save hitchup
```

## Usage

```html
<section class="user">
  <h1 data-text="user.name"></h1>
  <p data-text="user.email"></p>
</section>
```

```js
import Hitchup from 'hitchup';
new Hitchup(document.querySelector('.user'), { user });
```
## License

MIT © [Marcelo Fraga]()


[npm-image]: https://badge.fury.io/js/hitchup.svg
[npm-url]: https://npmjs.org/package/hitchup
[travis-image]: https://travis-ci.org/marcelofraga/hitchup.svg?branch=master
[travis-url]: https://travis-ci.org/marcelofraga/hitchup
[daviddm-image]: https://david-dm.org/marcelofraga/hitchup.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/marcelofraga/hitchup
[coveralls-image]: https://coveralls.io/repos/marcelofraga/hitchup/badge.svg
[coveralls-url]: https://coveralls.io/r/marcelofraga/hitchup
