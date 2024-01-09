import Image from 'next/image'
import React from 'react'

const Nearby = ({img, distance, location}) => {
  return (
    <div className='flex m-2 items-center space-x-4 rounded-lg  hover:bg-gray-100 cursor-pointer hover:scale-105 transition duration-200 ease-out'>
        <div className='relative w-16 h-16 '>
            <Image src={img} alt='location-images' layout='fill' className='rounded-lg' />
        </div>
        <div>
            <p className='font-semibold'>{location}</p>
            <p className='text-gray-400'>{distance}</p>
        </div>
    </div>
  )
}

export default Nearby