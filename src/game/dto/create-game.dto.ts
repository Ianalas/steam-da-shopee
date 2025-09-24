import { z } from 'zod'

export const createGameSchema = z.object({
  name: z.string().min(1),
  tags: z.array(z.string()),
  publisher: z.string().min(1),
  studio: z.string().min(1),
  price: z.number().min(0),
  review: z.number().min(0).max(5).optional()
})

export type CreateGameDto = z.infer<typeof createGameSchema>
