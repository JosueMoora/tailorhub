import React from 'react'

export default function Title ({ title1, title2 }) {
  return (
    <h1 className="2xl:text-[160px] 2xl:leading-[160px] xl:text-[140px] xl:leading-[140px] lg:text-[120px] lg:leading-[120px] md:text-[100px] md:leading-[100px] sm:text-[80px] sm:leading-[80px] text-[35px] leading-[35px] uppercase   font-black text-center bg-[url('../../public/background.png')] bg-cover bg-center bg-clip-text text-[#00000050]  ">
    {title1} <br /> {title2}
  </h1>
  )
}
