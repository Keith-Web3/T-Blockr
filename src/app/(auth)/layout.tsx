import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = function ({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen grid place-items-center">{children}</main>
  )
}

export default AuthLayout
