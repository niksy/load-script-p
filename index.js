import littleLoader from 'little-loader';

const cache = {};

/**
 * @param  {String} src
 *
 * @return {Promise}
 */
export default ( src ) => {
	if ( !cache[src] ) {
		cache[src] = new Promise(( resolve, reject ) => {
			littleLoader(src, ( err ) => {
				if ( err ) {
					return reject(err);
				}
				resolve();
			});
		});
	}
	return cache[src];
};
