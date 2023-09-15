import Link from 'next/link'
export default function Navbar () {
  return (
    <nav className="w-full bg-[#8A945B] fixed">
      <ul className="flex gap-4 justify-end py-2 px-6 text-xl ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
            <Link href="/signin">Sign-up</Link>
          </li>

      </ul>
    </nav>
  )
}
