# load-script-p

[![Build Status][ci-img]][ci]

Load script as promise.

## Install

```sh
npm install load-script-p --save
```

## Usage

```js
import loadScript from 'load-script-p';

loadScript('http://example.com/jackie.js')
	.then(()=> {
		// ...
	});
```

## API

### loadScript(src)

Returns: `Promise`

Loads script from URL.

#### src

Type: `String`

Script URL.

## Browser support

Tested in IE9+ and all modern browsers.

## Test

For local automated tests, run `npm run test:automated:local` (append `:watch` for watcher support).

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.com/niksy/load-script-p
[ci-img]: https://travis-ci.com/niksy/load-script-p.svg?branch=master
