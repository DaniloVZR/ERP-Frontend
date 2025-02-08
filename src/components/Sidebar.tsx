import { Link } from "react-router-dom"

const menuOptions = [
  { id: 1, navName: "Value 1", link: "navLink1" },
  { id: 2, navName: "Value 2", link: "navLink2" },
  { id: 3, navName: "Value 3", link: "navLink3" },
  { id: 4, navName: "Value 4", link: "navLink4" }
]


export const Sidebar = () => {
  return (
    <div className="bg-gray-900 row-span-5 h-screen">
      <h1 className="font-bold text-2xl text-white h-16 text-center">ERP STILO</h1>
      <nav className="flex flex-col text-white">
        {menuOptions.map(option => (
          <Link key={option.id} to={`/${option.link}`}>
            {option.navName}
          </Link>
        ))}
      </nav>
    </div>
  )
}