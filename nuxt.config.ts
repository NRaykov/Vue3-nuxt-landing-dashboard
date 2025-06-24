import { resolve } from 'path';

export default defineNuxtConfig({
	app: {
		baseURL: '/',
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png',
				},
			],
		},
	},
	alias: {
		'@': resolve(new URL('.', import.meta.url).pathname),
	},
	css: ['~/assets/scss/main.scss'],
	modules: ['@pinia/nuxt'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	compatibilityDate: '2025-03-06',

	nitro: {
		preset: 'static',
		output: {
			dir: 'dist',
		},
	},
});
