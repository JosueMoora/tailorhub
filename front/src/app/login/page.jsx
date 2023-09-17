'use client'
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'

export default function Login () {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const { setLogin, error } = useAuth()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLogin(user)
  }

  return (
    <div className="flex min-h-[90vh] justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-10 rounded gap-2 bg-[#8A945B]"
      >
        {error && <div className='bg-red-500 text-white p-2'>{error}</div>}
        <label>Usuario:</label>
        <input onChange={handleChange} name="username" type="text" />
        <label>Contraseña:</label>
        <input onChange={handleChange} name="password" type="password" />
        <button className="w-fit px-4 border border-black">Log-in</button>
      </form>
    </div>
  )
}
