import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar y Header */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="ml-64 p-6  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout