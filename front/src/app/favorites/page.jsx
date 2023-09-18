'use client'
import Card from '@/components/Card'
import { useAuth } from '@/context/AuthContext'

export default function Favorites () {
  const { favorites } = useAuth()
  return (
    <div className="flex flex-col gap-4 pt-20 items-center">
      {favorites?.length
        ? (
          <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-4xl font-bold'>Estos son tus restaurantes favoritos:</h1>
          <div className='flex flex-col gap-10'>
            {
            favorites?.map((res) => (
              <Card
                key={res.id}
                id={res.id}
                name={res.name}
                image={res.image}
                cuisineType={res.cuisineType}
                cuisine_type={res.cuisine_type}
                address={res.address}
                neighborhood={res.neighborhood}
                operating_hours={res.operating_hours}
              />
            ))}
          </div>
        </div>
          )
        : (
        <div className="bg-red-500 text-white p-2">No tienes restaurantes favoritos 😔</div>
          )}
    </div>
  )
}
