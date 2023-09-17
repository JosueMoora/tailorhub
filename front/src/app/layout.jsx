import AuthProvider from '@/context/AuthContext'
import Navbar from '../components/Navbar'
// import Providers from './Providers'
import './globals.css'
import { Abyssinica_SIL } from 'next/font/google'

const aby = Abyssinica_SIL({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Restaurant-app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={aby.className}>
        <AuthProvider>
        <Navbar />
        <main className="min-h-screen p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
