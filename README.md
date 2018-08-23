# load-script-p

[![Build Status][ci-img]][ci] [![BrowserStack Status][browserstack-img]][browserstack]

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
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://www.browserstack.com/automate/badge.svg?badge_key=L1MyUkUwQ1hZYmxXRk91OHlYQU4zVFp4bGg3ZDhrT0pwSk1ZNWs5TkV5QT0tLVMwdmNLWktIVkxJKy85N0Z6RHI5dUE9PQ==--a978df4f98d96289177f14f0341fa98be8ee16a4
