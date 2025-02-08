import { z } from 'zod'

export const tokenSchema = z.object({
  data: z.string(),
  message: z.string(),
})