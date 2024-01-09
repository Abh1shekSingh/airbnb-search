import Image from 'next/image'
import React from 'react'

const Anywhere = ({img, title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
        <div className='relative h-60 w-60'>
            <Image src={img} alt={title} layout='fill' objectFit='cover' className='rounded-xl' />
        </div>
        <h3 className='font-semibold'>{title}</h3>
    </div>
  )
}

export default Anywhere