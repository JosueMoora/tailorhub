import AuthProvider from '@/context/AuthContext'
import Navbar from '../components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Restaurant-app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <AuthProvider>
        <Navbar />
        <main className="min-h-screen py-20 md:py-40">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
