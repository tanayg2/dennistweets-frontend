import { ReactNode } from "react"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inset-0">
      <main className="w-[430px] mx-auto">{children}</main>
    </div>
  )
}
