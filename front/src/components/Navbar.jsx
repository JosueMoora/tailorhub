'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Navbar () {
  const { isAuth, signout } = useAuth()
  return (
    <nav className="w-full border-b  z-10 bg-[#181717] border-[#292626]  py-4 fixed">
      <ul className="flex gap-4 justify-end items-center py-1 px-6 text-xl ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {isAuth
          ? (
          <>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <button className='border rounded px-4 py-2' onClick={signout}>Logout</button>
            </li>
          </>
            )
          : (
          <>
            <li className='border rounded px-4 py-2'>
              <Link href="/login">Login</Link>
            </li>
          </>
            )}
      </ul>
    </nav>
  )
}
