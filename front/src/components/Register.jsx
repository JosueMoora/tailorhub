import Link from 'next/link'

export default function Register () {
  return (
    <div className='px-5 md:px-20 pt-10'>
      <div className='rounded-[120px] md:rounded-[243px] flex flex-col gap-5 md:gap-10 p-12 md:p-24 bg-white/25'>
        <p className='text-xl md:text-4xl md:w-[460px] italic leading-[60px] '>
        sign up for enjoy all the benefits of our app
        </p>
        <Link href="/signup" className='bg-[#FDE1CA] w-fit uppercase text-base md:text-lg ml-20 md:ml-60 px-7 py-3 text-black rounded-full'>Register</Link>
      </div>
      </div>
  )
}
