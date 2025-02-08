import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"

const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5">
        <Sidebar />
        <Header />
        <main className="col-span-4 row-span-4 col-start-2 row-start-2">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout