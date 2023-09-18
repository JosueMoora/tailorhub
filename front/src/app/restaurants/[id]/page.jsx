import { getRestaurant } from '@/hooks/useRestaurants'

export default async function Restaurant ({ params }) {
  const { image, name, neighborhood, cuisine_type, address, operating_hours, reviews } = await getRestaurant(params.id)
  return (
    <div className='flex flex-col items-center py-20 gap-10 justify-center'>
        <h1 className='text-4xl font-bold'>{name}</h1>
        <img src={image} alt={name} width={500} />
        <div className='flex  gap-10'>
        <div>
        <h1>Neighborhood: {neighborhood}</h1>
        <h1>Address: <br /> {address}</h1>
        <h1>Cuisine type: {cuisine_type}</h1>
        </div>
        <div className='flex flex-col gap-4 '>
        <p>Hours:</p>
        <div className='flex gap-5'>
        <div className='flex flex-col gap-2'>
        <p>Monday: {operating_hours?.Monday}</p>
        <p>Tuesday: {operating_hours?.Tuesday}</p>
        <p>Wednesday: {operating_hours?.Wednesday}</p>
        <p>Thursday: {operating_hours?.Thursday}</p>
        </div>
        <div className='flex flex-col gap-2'>
        <p>Friday: {operating_hours?.Friday}</p>
        <p>Saturday: {operating_hours?.Saturday}</p>
        <p>Sunday: {operating_hours?.Sunday}</p>
        </div>
        </div>
        </div>
        </div>
        <h1 className='text-2xl font-bold'>Reviews</h1>
        {reviews?.map((r, i) => (
          <div key={i} className='px-60' >
            <h2>Name: {r.name}</h2>
            <h2>Date: {r.date}</h2>
            <h2>Rating: {r.rating}</h2>
            <p>Comments: <br /> {r.comments}</p>
          </div>
        ))}
    </div>
  )
}
