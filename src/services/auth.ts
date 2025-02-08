import { tokenSchema } from "../schemas/auth-schemas";
import { TAuth } from "../types";
import axios from "axios";

export const login = async (userData: TAuth) => {
  const response = await axios.post("http://localhost:8000/api/auth/login", userData);
  const { data } = response.data
  const result = tokenSchema.safeParse(data)

  if (result.success) {
    localStorage.setItem('token', result.data.data)
    return result.data
  }
}