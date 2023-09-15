import { getRestaurant } from '@/hooks/useRestaurants'

export default async function Restaurant ({ params }) {
  const data = await getRestaurant(params.id)
  return (
    <div>
        <h1>Restaurant {data.id}: {data.name}</h1>
        <img src={data.image} />
    </div>
  )
}
