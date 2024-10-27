import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			paths: {
				base: '/avs-frontend'
			},
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			ssr: false,
		})
	},
	preprocess: vitePreprocess()
};

export default config;
