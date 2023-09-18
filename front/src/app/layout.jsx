import AuthProvider from '@/context/AuthContext'
import Navbar from '../components/Navbar'
// import Providers from './Providers'
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
        <main className="min-h-screen p-20">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
