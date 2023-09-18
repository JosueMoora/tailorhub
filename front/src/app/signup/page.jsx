'use client'
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'

export default function Signup () {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: ''
  })
  const { register, error } = useAuth()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    register(user)
  }

  return (
    <div className="flex min-h-[90vh] justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-10 rounded items-center gap-4 bg-[#0f0f0fda]"
      >
        {error && <div className='bg-red-500 text-white p-2'>{error}</div>}
        <input onChange={handleChange} name="name" type="text" className='rounded w-64 p-2 bg-[#181717] placeholder:text-white' placeholder='Name' />
        <input onChange={handleChange} name="username" type="text" className='rounded w-64 p-2 bg-[#181717] placeholder:text-white' placeholder='Username' />
        <input onChange={handleChange} name="password" type="password" className='rounded w-64 p-2 bg-[#181717] placeholder:text-white' placeholder='Password' />
        <button className="w-fit px-4 py-2 border rounded bg-[#181717]">Create account</button>
      </form>
    </div>
  )
}
