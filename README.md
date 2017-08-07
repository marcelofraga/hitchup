# pike [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 🚧 Work in progress.

## Installation

```sh
$ npm install --save pike
```

## Usage

```html
<section class="user">
  <h1 data-text="user.name"></h1>
  <p data-text="user.email"></p>
</section>
```

```js
import Pike from 'pike';
new Pike(document.querySelector('.user'), { user });
```
## License

MIT © [Marcelo Fraga]()


[npm-image]: https://badge.fury.io/js/pike.svg
[npm-url]: https://npmjs.org/package/pike
[travis-image]: https://travis-ci.org/marcelofraga/pike.svg?branch=master
[travis-url]: https://travis-ci.org/marcelofraga/pike
[daviddm-image]: https://david-dm.org/marcelofraga/pike.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/marcelofraga/pike
[coveralls-image]: https://coveralls.io/repos/marcelofraga/pike/badge.svg
[coveralls-url]: https://coveralls.io/r/marcelofraga/pike
