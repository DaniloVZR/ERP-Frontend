import { useNavigate } from "react-router-dom";
import { useERPStore } from "../store/store";
import { ButtonHeader } from "./ui/ButtonHeader";

export const Header = () => {
  const { logout } = useERPStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token")?.toString()!;

    try {
      await logout(token);
      navigate("/login");
    } catch (error) {
      alert("Ocurrió un error");
    }
  };

  return (
    <div className="bg-white shadow-md h-16 flex justify-end items-center px-6">
      <div className="flex items-center gap-4">
        <ButtonHeader functionality={handleLogout}>Logout</ButtonHeader>
      </div>
    </div>
  );
};