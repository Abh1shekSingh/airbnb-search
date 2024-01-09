import React from 'react'
import banner from "../public/banner.jpg"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]'> 
        <Image src={banner} alt="banner" layout='fill' objectFit='cover' className=''/>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-2 flex items-center flex-col'>
            <h2 className='text-white text-[8vw] font-bold'>Japan.</h2>
        </div>
    </div>
  )
}

export default Banner