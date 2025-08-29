import { defineCollection, z } from 'astro:content';

const products = defineCollection({
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		image: image(),
		price: z.number().positive(),
		available: z.boolean().default(true)
	})
});

export const collections = { products };
