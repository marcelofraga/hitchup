# hitchup [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] ![Stability][stability-image]
> Declarative data binding solution.

## Installation

```sh
$ npm install --save hitchup
```

## Usage

```html
<section class="user">
  <h1 data-text="user.name"></h1>
  <div data-html="user.bio"></div>
</section>
```

```js
import hitchup from 'hitchup';
hitchup(document.querySelector('.user'), {user});
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
[stability-image]: https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg
