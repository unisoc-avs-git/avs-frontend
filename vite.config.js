import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 3000,
		fs: {
			allow: ['..'] // プロジェクトのルートディレクトリを許可
		},
	},
	base: '/avs-frontend'
});
