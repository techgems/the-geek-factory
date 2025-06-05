import { defineCollection, z } from 'astro:content';

const productsSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.string(),
	price: z.number().positive()
});

const products = defineCollection({
	type: 'content',
	schema: productsSchema
});

export type Products = z.infer<typeof productsSchema>;

export const collections = { products };
