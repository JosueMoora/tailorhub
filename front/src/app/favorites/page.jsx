'use client'
import Card from '@/components/Card'
import { useAuth } from '@/context/AuthContext'

export default function Favorites () {
  const { favorites } = useAuth()
  return (
    <div className="flex flex-col pt-20">
      {favorites?.length
        ? (
          <div className='flex flex-col px-5 md:px-20 gap-10'>
          <h1 className="md:text-[100px] md:leading-[100px] text-[35px] leading-[35px] uppercase   font-black text-center bg-[url('../../../public/background.png')] bg-cover bg-center bg-clip-text text-[#00000050]  ">
        Your Favorite <br /> Restaurants
      </h1>
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
        <div className="bg-red-500 text-white p-2">you don&apos;t have favorites 😔</div>
          )}
    </div>
  )
}
