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
    <div className="flex items-center  bg-[#0f0f0fda] " key={id}>
      <div className='flex'>
      <img
        className="object-cover w-[600px] h-[340px] "
        src={image}
        alt={name}
      />
      </div>
      <div className=" flex flex-col gap-6 p-8 w-full">
      {isAuth
        ? (
            isFav
              ? (
          <button className='text-right text-2xl' onClick={handleFavorite}>❤️</button>
                )
              : (
          <button className='text-right text-2xl' onClick={handleFavorite}>🤍</button>
                )
          )
        : (
            ''
          )}
        <Link
          href={`/restaurants/${id}`}
          className="uppercase text-xl text-center font-semibold hover:duration-500 hover:scale-105"
        >
          {name}
        </Link>
        <div className='flex  justify-evenly'>
        <div className='flex flex-col gap-4'>
        <p className="uppercase text-lg">
          {cuisine_type}
        </p>
        <p className="uppercase ">Address: {address}</p>
        <p className="uppercase ">Neighborhood: {neighborhood}</p>
        </div>
        <div className='flex flex-col gap-4 '>
        <p className="uppercase">hours:</p>
        <div className='flex gap-5'>
        <div className='flex flex-col gap-2'>
        <p className="uppercase ">Monday: {operating_hours?.Monday}</p>
        <p className="uppercase ">Tuesday: {operating_hours?.Tuesday}</p>
        <p className="uppercase ">Wednesday: {operating_hours?.Wednesday}</p>
        <p className="uppercase ">Thursday: {operating_hours?.Thursday}</p>
        </div>
        <div className='flex flex-col gap-2'>
        <p className="uppercase ">Friday: {operating_hours?.Friday}</p>
        <p className="uppercase ">Saturday: {operating_hours?.Saturday}</p>
        <p className="uppercase ">Sunday: {operating_hours?.Sunday}</p>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
