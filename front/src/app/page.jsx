import { getRestaurants } from '@/hooks/useRestaurants'
import Card from '../components/Card'

export default async function Home () {
  const restaurants = await getRestaurants()
  return (
    <div className=" flex flex-col">
      <h1 className="text-[200px] my-6">Best-Restaurants</h1>
      <div className=" grid grid-cols-4 gap-4">
        {restaurants
          ? (
              restaurants?.map((res) => {
                return (
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
                )
              })
            )
          : (
          <h1>Loading...</h1>
            )}
      </div>
    </div>
  )
}
