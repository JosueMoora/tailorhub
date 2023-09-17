'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Card ({ id, name, image, cuisineType, cuisine_type, address, neighborhood }) {
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
          cuisineType,
          cuisine_type
        }
      })
      setIsFav(true)
    }
  }
  useEffect(() => {
    if (Array.isArray(favorites)) {
      favorites?.forEach(fav => {
        if (fav.id === id) {
          setIsFav(true)
        }
      })
    }
  }, [favorites])
  return (
    <div
      key={id}
      className="h-fit bg-white rounded-xl shadow-md overflow-hidden "
    >
      {isAuth ? isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>) : ''}
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="object-cover h-full w-48"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <Link href={`/restaurants/${id}`} className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </Link>
          <p className="uppercase text-indigo-200">
            {cuisine_type || cuisineType }
          </p>
          <p className="mt-2 text-slate-500">{address}</p>
          <p className="mt-2 text-slate-500">{neighborhood}</p>
        </div>
      </div>
    </div>
  )
}
