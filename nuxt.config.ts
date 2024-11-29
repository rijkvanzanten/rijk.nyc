// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/content'],
	devtools: { enabled: true },

	css: ['~/assets/css/main.css'],

	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-11-01',

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
});
