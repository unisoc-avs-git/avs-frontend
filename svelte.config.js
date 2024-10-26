import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html',
			path: {
				base: dev ? '' : '/{avs-frontend}'
			}
		})
	},
	preprocess: vitePreprocess()
};

export default config;
