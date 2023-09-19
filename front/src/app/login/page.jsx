'use client'
import Loading from '@/components/Loading'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useState } from 'react'

export default function Login () {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const { setLogin, error, loading, setLoading } = useAuth()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setLogin(user)
  }

  return (
    <div className="flex min-h-[90vh] justify-center items-center">
      {loading
        ? <Loading />
        : <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 rounded items-center text-center gap-4 bg-[#0f0f0fda]"
    >
      {error && <div className='bg-red-500 text-white p-2'>{error}</div>}
      <input onChange={handleChange} className='rounded w-64 p-2 bg-[#181717] placeholder:text-white' placeholder='Username' name="username" type="text" />
      <input onChange={handleChange} placeholder='Password' className='rounded w-64 p-2 placeholder:text-white bg-[#181717] ' name="password" type="password" />
      <button className="w-fit px-4 py-2 border rounded bg-[#181717]">Start</button>
      <h1>
      don&apos;t have an account ? <br />
      <Link href="/signup" className='underline'> create one here</Link>
      </h1>
    </form>
      }
    </div>
  )
}
