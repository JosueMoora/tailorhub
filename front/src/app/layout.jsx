import Navbar from '../components/Navbar'
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
        <Navbar />
        <main className='min-h-screen p-8'>
        {children}
        </main>
      </body>
    </html>
  )
}
