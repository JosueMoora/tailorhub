'use client'
import Card from '@/components/Card'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Favorite () {
  const [user, setUser] = useState()
  const [error, setError] = useState('')
  const router = useRouter()
  const getFavorite = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/favorite', {
        withCredentials: true
      })
      setUser(data)
    } catch (error) {
      setError(error.response.data.msg)
    }
  }
  const Logout = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/log-out', { withCredentials: true })
      alert(data)
      return router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFavorite()
  }, [!user])

  return (
    <div className="flex flex-col gap-4 pt-20 items-center min-h-[90vh]">
      {user
        ? (
          <div className='flex flex-col gap-4 justify-center items-center'>
          <h1>Bienvenido {user?.name}</h1>
          <h2>Estos son tus restaurantes favoritos:</h2>
          <div className=" grid grid-cols-4 gap-8">
            {user?.favorite?.map((res) => (
              <Card
                key={res.id}
                id={res.id}
                name={res.name}
                image={res.image}
                cuisineType={res.cuisineType}
                cuisine_type={res.cuisine_type}
                address={res.address}
                neighborhood={res.neighborhood}
              />
            ))}
          </div>
        </div>
          )
        : (
        <div className="bg-red-500 text-white p-2">{error}</div>
          )}

          <button className='border-black' onClick={() => Logout()}>Logout</button>
    </div>
  )
}
