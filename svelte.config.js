import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			paths: {
				base: dev ? '' : '/{avs-frontend}'
			},
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
		})
	},
	preprocess: vitePreprocess()
};

export default config;
