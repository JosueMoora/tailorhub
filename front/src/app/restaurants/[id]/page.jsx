import { getRestaurant } from '@/hooks/useRestaurants'

export default async function Restaurant ({ params }) {
  const { image, name, neighborhood, cuisine_type, address, operating_hours, reviews } = await getRestaurant(params.id)
  return (
    <div className='flex flex-col items-center py-5 md:py-20 gap-10 justify-center'>
        <h1 className='text-xl md:text-4xl font-bold'>{name}</h1>
        <img src={image} alt={name} className='rounded-[50px] w-64 md:w-[500px]' />
        <div className='md:flex max-md:px-5  gap-10'>
        <div className='max-md:text-sm'>
        <h1><strong>Neighborhood:</strong> {neighborhood}</h1>
        <h1><strong>Address:</strong> {address}</h1>
        <h1><strong>Cuisine type:</strong> {cuisine_type}</h1>
        </div>
        <div className='flex flex-col gap-4 max-md:py-5 '>
        <p className='font-bold max-md:text-center'>Hours:</p>
        <div className='flex gap-5 max-md:text-sm'>
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
        <h1 className='text-xl md:text-2xl font-bold'>Reviews</h1>
        {reviews?.map((r, i) => (
          <div key={i} className='md:px-60 px-5 max-md:text-sm' >
            <div className='bg-[#181717] rounded p-2 md:p-5'>
            <h2>Name: {r.name}</h2>
            <h2>Date: {r.date}</h2>
            <h2>Rating: {r.rating}</h2>
            <p>Comments: <br /> {r.comments}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
