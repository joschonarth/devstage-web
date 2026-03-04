import z from 'zod'

const envSchema = z.object({
  API_URL: z.url().default('http://localhost:3333'),
})

export const env = envSchema.parse(process.env)
