"use client"
import Image from 'next/image'
import React from 'react'
import {CiHeart, CiStar} from "react-icons/ci"
import dummy from "../public/banner.jpg"
import { Lato, Saira } from 'next/font/google'

 
const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
})

const saira = Saira({
    weight: [ '700'],
    subsets: ['latin'],
})


const Hotelinfo = ({img, title, location,description, star, price, total}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 transition duration-300 ease-out hover:shadow-lg first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img || dummy} alt='hotel_img' layout='fill' objectFit='cover' className='rounded-2xl' />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between items-center'>
          <p className={`text-xs text-gray-400 ${lato.className}`}>{location}</p>
          <CiHeart />
        </div>

        <h4 className={`${saira.className} text-xl font-semibold`}>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className={`${lato.className} text-gray-400 text-xs`}>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className={`${lato.className} flex items-center space-x-2`}>
            <CiStar />
            <p>{star}</p>
          </p>
          <div className={`${lato.className}`}>
            <p className='font-semibold'>{price}</p>
            <p className='text-sm flex justify-end'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotelinfo