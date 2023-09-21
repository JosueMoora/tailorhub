import Image from 'next/image'
import img1 from '../../../public/about/img1.png'
import img2 from '../../../public/about/img2.png'
import img3 from '../../../public/about/img3.png'
import img4 from '../../../public/about/img4.png'
import img5 from '../../../public/about/img5.png'
import img6 from '../../../public/about/img6.png'
import img7 from '../../../public/about/img7.png'
import Banner from '@/components/Banner'
import Register from '@/components/Register'
import Title from '@/components/Title'
function About () {
  return (
    <>
      <div className="flex flex-col items-center px-10  md:px-60 gap-10 overflow-hidden">
        <Title title1={'The'} title2={'Restaurants'} />
        <div className="flex gap-5 md:gap-10">
          <div>
            <Image src={img1} alt="image" />
          </div>
          <div>
            <Image src={img2} alt="image" />
          </div>
          <div>
            <Image src={img3} alt="image" />
          </div>
        </div>
        <Banner about={'ABOUT US'} />
        <div className="flex flex-col gap-10">
          <div className="flex">
            <div className="w-2/4 md:pl-60 md:pt-44 pt-10 pl-10 z-10">
              <h1 className="md:text-8xl text-xl font-semibold">PHILOSOPHY</h1>
              <p className="md:text-lg w-[120%]  text-xs">
                Our service offers you a complete experience to explore and
                manage your list of favorite restaurants. We have created this
                platform with a focus on simplicity and convenience so you can
                fully enjoy your dining experiences.
              </p>
            </div>
            <div>
              <Image src={img4} alt="image" />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image src={img5} alt="image" />
            </div>
            <div className="md:text-8xl text-xl md:pt-52 pt-16 z-10 w-2/4 font-semibold">
              <h1>FEATURES</h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center gap-4 md:gap-10 md:text-lg text-xs">
              <p className=" md:w-2/4 w-3/4">
                1. 🍽️ Discover Restaurants: Quickly find a variety of
                restaurants. Filter by cuisine, location, and more for your next
                meal.
              </p>
              <p className=" md:w-2/4 w-3/4">
                2. 🏙️ Restaurant Details: Get info on each restaurant - address,
                cuisine, and more. Easy access for informed choices.
              </p>
              <p className=" md:w-2/4 w-3/4">
                3. 🔒 Secure Authentication: Your safety matters. We use JWT
                tokens to safeguard your data and favorites.
              </p>
            </div>
            <div>
              <Image src={img6} alt="image" />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image src={img7} alt="image" />
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-10 md:text-lg text-xs">
              <p className="md:w-2/4 w-3/4">
                4.🔐 Manage Sessions: Sign in and out securely. Your info is
                always protected.
              </p>
              <p className="md:w-2/4 w-3/4">
                5 ❤️️ Add/Remove Favorites: Keep your list updated. Add new
                favorites or remove the ones you no longer love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Register />
    </>
  )
}

export default About
