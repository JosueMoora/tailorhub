import { getRestaurants } from '@/hooks/useRestaurants'
import Card from '../components/Card'
import Banner from '@/components/Banner'
import Image from 'next/image'
import res1 from '../../public/res1.png'
import res2 from '../../public/res2.png'
import Register from '@/components/Register'
export default async function Home () {
  const restaurants = await getRestaurants()
  return (
    <div className="  flex flex-col">
      <div className='py-20 flex justify-center'>
      <Image src={res1} alt='restaurant' className='absolute max-md:w-16 left-0' />
      <h1 className="2xl:text-[160px] 2xl:leading-[160px] xl:text-[140px] xl:leading-[140px] lg:text-[120px] lg:leading-[120px] md:text-[100px] md:leading-[100px] sm:text-[80px] sm:leading-[80px] text-[35px] leading-[35px] uppercase   font-black text-center bg-[url('../../public/background.png')] bg-cover bg-center bg-clip-text text-[#00000050]  ">
        The Best <br /> Restaurants
      </h1>
      <Image src={res2} alt='restaurant' className='absolute max-md:w-16 right-0 top-32' />
      </div>
      <Banner />
      <div className="flex flex-col md:p-20 p-5 gap-10">{
        restaurants?.map((res) => (
        <Card
          key={res.id}
          id={res.id}
          name={res.name}
          image={res.image}
          cuisineType={res.cuisineType}
          cuisine_type={res.cuisine_type}
          address={res.address}
          neighborhood={res.neighborhood}
          operating_hours = {res.operating_hours}
        />
        ))
      }</div>
      <Register />
    </div>
  )
}
