'use client'
import Card from '@/components/Card'
import { useAuth } from '@/context/AuthContext'

export default function Favorites () {
  const { favorites } = useAuth()
  console.log(favorites)
  return (
    <div className="flex flex-col gap-4 pt-20 items-center min-h-[90vh]">
      {favorites.length
        ? (
          <div className='flex flex-col gap-4 justify-center items-center'>
          <h2>Estos son tus restaurantes favoritos:</h2>
          <div className=" grid grid-cols-4 gap-8">
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
