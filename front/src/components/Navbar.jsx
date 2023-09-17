'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Navbar () {
  const { isAuth, signout } = useAuth()
  return (
    <nav className="w-full bg-[#8A945B] fixed">
      <ul className="flex gap-4 justify-end py-2 px-6 text-xl ">
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
              <button onClick={signout}>Logout</button>
            </li>
          </>
            )
          : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/signup">Sign-up</Link>
            </li>
          </>
            )}
      </ul>
    </nav>
  )
}
