import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { LandingPage } from "./pages/LandingPage"
import { ToastContainer } from "react-toastify"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}