import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { login } from "../services/auth"
import { TAuth, TTokenFetch } from "../types"

type ERPStore = {
  token: TTokenFetch
  login: (userData: TAuth) => Promise<void>
}

export const useERPStore = create<ERPStore>()(devtools((set) => ({
  token: {} as TTokenFetch,
  login: async (userData) => {
    const token = await login(userData)
    // if (token) {
    //   throw new Error('No se pudo obtener el token')
    // }
    set(() => ({
      token
    }))
  }
})))