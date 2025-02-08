import { ButtonHeader } from "./ui/ButtonHeader"

export const Header = () => {
  return (
    <div className="col-span-4 bg-gray-900 h-16">
      <div className="flex justify-end items-center gap-4">
        <ButtonHeader>Login</ButtonHeader>
        <ButtonHeader>Register</ButtonHeader>
      </div>
    </div>
  )
}