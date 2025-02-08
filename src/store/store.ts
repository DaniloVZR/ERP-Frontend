import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { login, logout, register } from "../services/auth"
import { TAuth, TAuthRegister, TTokenFetch } from "../types"
import { toast } from "react-toastify"

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

    toast.success(token?.message)
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