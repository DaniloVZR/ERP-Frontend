export const ButtonHeader = ({ children, functionality }: { children: React.ReactNode, functionality: any }) => {
  return (
    <button
      type="button"
      className="bg-white p-2 rounded-md cursor-pointer"
      onClick={functionality}
    >
      {children}
    </button>
  )
}
