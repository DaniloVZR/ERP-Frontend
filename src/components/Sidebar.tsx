import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useERPStore } from "../store/store";
import { toast } from "react-toastify";

const menuOptions = [
  { id: 1, navName: "Dashboard", link: "home" },
  { id: 2, navName: "Ventas", link: "sales" },
  { id: 3, navName: "Inventario", link: "inventory" },
  // { id: 4, navName: "Reportes", link: "reports" },
];

export const Sidebar = () => {
  const { logout } = useERPStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token")?.toString()!;

    try {
      await logout(token);
      navigate("/login");
      toast.success("Session Finished")
    } catch (error) {
      alert("Ocurrió un error");
    }
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col fixed">
      {/* Logo y nombre del ERP */}
      <h1 className="font-bold text-2xl text-center p-6 border-b border-gray-700">
        ERP STILO
      </h1>

      {/* Menú de navegación */}
      <nav className="flex-1 p-4">
        {menuOptions.map((option) => (
          <Link
            key={option.id}
            to={`/${option.link}`}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            {option.navName}
          </Link>
        ))}
      </nav>

      {/* Botón de Logout */}
      <div className="flex flex-col gap-4 p-4 border-t border-gray-700">
        <button
          className="w-full py-2.5 px-4 rounded bg-white text-black hover:bg-gray-200 transition duration-200 cursor-pointer"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="w-full py-2.5 px-4 rounded bg-red-600 text-white hover:bg-red-700 transition duration-200 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};