import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { login, logout, register } from "../services/auth"
import { TAuth, TAuthRegister, TTokenFetch } from "../types"

type ERPStore = {
  token: TTokenFetch
  login: (userData: TAuth) => Promise<void>
  logout: (token: TTokenFetch['data']) => Promise<void>
  register: (userData: TAuthRegister) => Promise<void>
}

export const useERPStore = create<ERPStore>()(devtools((set) => ({
  token: {} as TTokenFetch,
  login: async (userData) => {
    const token = await login(userData)

    set(() => ({
      token
    }))
  },
  logout: async (token) => {
    await logout(token)

    set(() => ({
      token: {
        data: '',
        message: '',
      }
    }))
  },
  register: async (userData) => {
    await register(userData)
  }
})))