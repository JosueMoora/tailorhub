'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Card ({
  id,
  name,
  image,
  cuisine_type,
  address,
  neighborhood,
  operating_hours
}) {
  const [isFav, setIsFav] = useState(false)
  const { isAuth, favorites, deleteFav, postFav } = useAuth()
  const handleFavorite = (e) => {
    e.preventDefault()
    if (isFav) {
      deleteFav(id)
      setIsFav(false)
    } else {
      postFav({
        favorite: {
          id,
          name,
          neighborhood,
          address,
          image,
          cuisine_type,
          operating_hours
        }
      })
      setIsFav(true)
    }
  }
  useEffect(() => {
    if (Array.isArray(favorites)) {
      favorites?.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true)
        }
      })
    }
  }, [favorites])
  return (
    <div className='md:flex items-center' key={id}>
      <div className={`flex justify-center ${id % 2 !== 0 && 'order-last'}`}>
        <img
          className="object-cover rounded-[50px] w-[300px]  lg:w-[600px] lg:h-[340px] "
          src={image}
          alt={name}
        />
      </div>
      <div className=" flex flex-col gap-6 p-4 md:p-8 w-full">
        {isAuth && (
          <div className={`flex ${id % 2 === 0 && 'justify-end'}`}>
            <button
              className="w-fit text-xl md:text-2xl"
              onClick={handleFavorite}
            >
              {isFav ? '❤️' : '🤍'}
            </button>
          </div>
        )}
        <Link
          href={`/restaurants/${id}`}
          className="uppercase text-sm md:text-xl text-[#FDE1CA] text-center font-semibold hover:duration-500 hover:scale-105"
        >
          {name}
        </Link>
        <div className="flex text-sm md:text-lg flex-col gap-4">
          <p className="uppercase text-sm max-md:text-center md:text-lg">
            Cussine Type: {cuisine_type}
          </p>
          <div className="flex md:flex-col">
            <p className="uppercase ">Address: {address}</p>
            <p className="uppercase ">Neighborhood: {neighborhood}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
