import { resolve } from 'path';

export default defineNuxtConfig({
	app: {
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
});
function defineNuxtConfig(config: {
	alias: { [key: string]: any };
	css: string[];
	modules?: string[];
	postcss: { plugins: { tailwindcss: {}; autoprefixer: {} } };
	app: { head: { link: { rel: string; type: string; href: string }[] } };
	components?: any;
	compatibilityDate: string;
}) {
	return config;
}
