import Image from 'next/image'
import React from 'react'
const IMG_URL = "https://images.unsplash.com/photo-1547823065-4cbbb2d4d185?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Footer = () => {
  return (
    <section className='relative py-16'>
        <div className='relative min-w-[300px] h-96'>
            <Image src={IMG_URL} alt="logo" layout='fill' objectFit='cover' className='rounded-xl'/>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl'></div>
        </div>
        
        <div className='absolute md:top-32 md:left-12 top-1/2 left-[3.5em]'>
            <h3 className='md:text-[2vw] text-white font-semibold text-center'>Graceful Japan Unveiled.</h3>
            <h4 className='text-white opacity-[50%] text-xs text-center md:text-left uppercase'>Made with ❤️ by Abhishek</h4>
        </div>
    </section>
  )
}

export default Footer