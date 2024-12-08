// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/content',
		'nuxt-time',
		'@nuxt/scripts',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
	],
	devtools: { enabled: true },

	css: ['~/assets/css/main.css'],

	site: {
		url: 'rijk.nyc',
	},

	content: {
		markdown: {
			remarkPlugins: [
				[
					'@mavrin/remark-typograf',
					{
						locale: ['en-US'],
					},
				],
			],
		},
	},

	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-11-01',

	nitro: {
		prerender: {
			routes: ['/sitemap.xml'],
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},

	fonts: {
		defaults: {
			weights: [400, 700],
		},
	},

	sitemap: {
		strictNuxtContentPaths: true,
	},
});
