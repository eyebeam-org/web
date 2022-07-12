import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import netlify-adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
