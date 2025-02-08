export const ButtonHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="bg-white p-2 rounded-2xl">
      {children}
    </button>
  )
}
