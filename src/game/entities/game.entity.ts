import z from 'zod'

export const GameSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1),
  description: z.string().min(36),
  launchDate: z.date(),
  tags: z.array(z.string()),
  publisher: z.string().min(1),
  studio: z.string().min(1),
  price: z.number().min(0),
  review: z.number().min(0).max(5).optional(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export class Game {
  id: string;
  name: string;
  tags: string[];
  publisher: string;
  studio: string;
  price: number;
  review?: number;
  createdAt: Date;
  updatedAt: Date;
}
