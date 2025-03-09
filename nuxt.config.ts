import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",

	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"nuxt-time",
		"@nuxt/scripts",
		"@nuxtjs/robots",
		"@nuxtjs/sitemap",
		"@nuxt/icon",
		"@nuxt/content",
	],

	css: ["~/assets/css/main.css"],

	devtools: { enabled: true },

	app: {
		head: {
			title: "rijk.nyc",
			link: [
				{ rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
				{ rel: "shortcut icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
				{ rel: "manifest", href: "/site.webmanifest" },
			],
			meta: [{ name: "apple-mobile-web-app-title", content: "rijk.nyc" }],
		},
	},

	site: {
		url: "rijk.nyc",
	},

	content: {
		build: {
			markdown: {
				remarkPlugins: {
					"@mavrin/remark-typograf": {
						locale: ["en-US"],
					},
				},
			},
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	future: {
		compatibilityVersion: 4,
	},

	nitro: {
		prerender: {
			routes: ["/sitemap.xml"],
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: "tab",
				semi: true,
			},
		},
	},

	fonts: {
		experimental: {
			processCSSVariables: true,
		},

		defaults: {
			weights: [400, 700],
		},
	},
});
