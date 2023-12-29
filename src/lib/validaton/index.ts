import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Terlalu Pendek'}),
    username: z.string().min(2, { message: 'Terlalu Pendek'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password harus 8 karakter'}),
  })