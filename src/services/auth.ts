import { tokenSchema } from "../schemas/auth-schemas";
import { TAuth, TAuthRegister, TTokenFetch } from "../types";
import axios from "axios";

export const login = async (userData: TAuth) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, userData);
  const result = tokenSchema.safeParse(response.data)
  if (result.success) {
    localStorage.setItem('token', result.data.data)
    return result.data
  }
}

export const logout = async (token: TTokenFetch['data']) => {
  const config = { headers: { Authorization: `Bearer ${token}` } }
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {}, config);

  if (response.status === 204) {
    localStorage.removeItem('token')
    return true
  }
}

export const register = async (userData: TAuthRegister) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, userData);
  const result = tokenSchema.safeParse(response.data)
  if (result.success) {
    localStorage.setItem('token', result.data.data)
    return result.data
  }
}