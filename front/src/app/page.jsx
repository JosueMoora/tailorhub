import { getRestaurants } from '@/hooks/useRestaurants'
import Card from '../components/Card'
export default async function Home () {
  const restaurants = await getRestaurants()
  return (
    <div className="  flex flex-col">
      <h1 className="text-[170px] uppercase leading-[200px] font-black text-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-clip-text text-[#00000050]  ">
        Discorver <br /> The Best <br /> Restaurants
      </h1>
      <h1 className="text-[170px] animate-bounce uppercase leading-[200px] font-black text-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-bottom bg-clip-text text-[#00000050] py-14">
        ⇩
      </h1>
      <div className="flex flex-col gap-10">
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
                operating_hours={res.operating_hours}
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
