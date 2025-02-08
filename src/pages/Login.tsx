import { ChangeEvent, FormEvent, useState } from "react";
import { TAuth } from "../types";
import { useERPStore } from "../store/store";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

  const { login } = useERPStore()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState<TAuth>({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(loginForm).includes('')) {
      alert('completa todos los campos')
      return
    }

    try {
      await login(loginForm)
      navigate("/home")
    } catch (error) {
      alert("Ha ocurrido un error")
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ERP Stilo
        </h1>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              value="Log In"
            />
          </div>
        </form>
        <div className="flex flex-col text-center mt-5 text-gray-600 text-sm">
          <span className="hover:underline">
            <Link
              to="/register"
            >
              Doesn't have an account? Register now!
            </Link>
          </span>
          <span className="hover:underline">
            <Link
              to="/forgot-password"
            >
              Forgot your password?
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};