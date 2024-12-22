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
		'@nuxt/icon',
	],

	devtools: { enabled: true },

	app: {
		head: {
			title: 'rijk.nyc',
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
			meta: [
				{ name: 'apple-mobile-web-app-title', content: 'rijk.nyc' },
			],
		},
	},

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
