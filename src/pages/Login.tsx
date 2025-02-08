import { TAuth } from "../types";
import { useERPStore } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

export const Login = () => {

  const { login } = useERPStore()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuth>()

  const onSubmit: SubmitHandler<TAuth> = async (data) => {
    try {
      await login(data);
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message); // Muestra un mensaje de error
      } else {
        toast.error("Unexpected error"); // Muestra un mensaje de error
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          ERP Stilo
        </h1>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
          Login
        </h3>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              {...register("email", { required: "You must write your email" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              {...register("password", { required: "You must write your password" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
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