import { useNavigate } from "react-router-dom"
import { useERPStore } from "../store/store"
import { ButtonHeader } from "./ui/ButtonHeader"

export const Header = () => {

  const { logout } = useERPStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const token = localStorage.getItem('token')?.toString()!

    try {
      await logout(token)
      navigate('/login')
    } catch (error) {
      alert('ocurrió un error')
    }
  }

  return (
    <div className="col-span-4 bg-gray-900 h-16 flex justify-end pr-3">
      <div className="flex justify-end items-center gap-4">
        <ButtonHeader
          functionality={handleLogout}
        >
          Logout
        </ButtonHeader>
      </div>
    </div>
  )
}