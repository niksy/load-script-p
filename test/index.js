import assert from 'assert';
import fn from '../index';

let urlSrc;

before(function () {

	urlSrc = Object.keys(window.__karma__.files)
		.filter(( file ) => /jackie/.test(file))
		.pop();

	const fixture = window.__html__['test/fixtures/index.html'];
	document.body.insertAdjacentHTML('beforeend', `<div id="fixture">${fixture}</div>`);

});

after(function () {
	document.body.removeChild(document.getElementById('fixture'));
});

it('should load script', function () {

	return fn(urlSrc)
		.then(() => {
			assert.equal(document.querySelector('#fixture').innerHTML, 'Jackie');
		});

});

it('should load script only once', function () {

	return Promise.all([fn(urlSrc), fn(urlSrc), fn(urlSrc)])
		.then(() => {
			assert.equal(document.querySelector('#fixture').innerHTML, 'Jackie');
		});

});
