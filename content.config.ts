import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			source: '*',
			type: 'page',
		}),
		talks: defineCollection({
			source: 'talks/**',
			type: 'page',
			schema: z.object({
				videoId: z.string(),
				live: z.array(
					z.object({
						name: z.string(),
						date: z.string(),
					}),
				),
			}),
		}),
		posts: defineCollection({
			source: 'posts/**',
			type: 'page',
			schema: z.object({
				date: z.string(),
			}),
		}),
	},
});
