import Link from 'next/link'

export default function Card ({ id, name, image, cuisineType, cuisine_type, address, neighborhood }) {
  return (
    <Link
      key={id}
      href={`/restaurants/${id}`}
      className="h-fit bg-white rounded-xl shadow-md overflow-hidden "
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="object-cover h-full w-48"
            src={image}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <p className="uppercase text-indigo-200">
            {cuisine_type || cuisineType }
          </p>
          <p className="mt-2 text-slate-500">{address}</p>
          <p className="mt-2 text-slate-500">{neighborhood}</p>
        </div>
      </div>
    </Link>
  )
}
