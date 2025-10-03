import { z } from "astro:schema";

export const learningPathsSchema = z
	.object({
		title: z.string(),
		uid: z.string().optional(),
		path: z.string(),
		priority: z.number(),
		description: z.string(),
		pcx_content_type: z.string().default("learning-path"),
		products: z.string().array(),
		product_group: z.string(),
		tags: z.string().array().optional(),
		additional_groups: z.string().array().optional(),
		video: z.boolean().default(false),
	})
	.strict();
