import { defineCollection, z } from "astro:content";

const exercisesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficult: z.enum(["Fácil", "Medio", "Difícil"]),
    reference: z.string().optional(),
  })
})

export const collections = { 'exercises': exercisesCollection }
 