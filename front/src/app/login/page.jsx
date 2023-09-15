'use client'
import { User } from '@/hooks/useUsers'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login () {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await User(user)
      console.log(data)
      if (data) {
        router.push('/favorite')
      }
    } catch (error) {
      setError(error.response.data.msg)
    }
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
