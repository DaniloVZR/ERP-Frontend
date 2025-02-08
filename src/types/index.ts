import { z } from "zod"
import { tokenSchema } from "../schemas/auth-schemas"

export type TAuth = {
  email: string,
  password: string,
}

export type TAuthRegister = TAuth & {
  name: string
  password_confirmation: string
}

export type TTokenFetch = z.infer<typeof tokenSchema>