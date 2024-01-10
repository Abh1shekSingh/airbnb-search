/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getHotels } from './api/hotels'
import Hotelinfo from '@/components/Hotelinfo'
import Map from '@/components/Map'
import { hotelsData } from '@/data'

const listing = () => {
    const router = useRouter();
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        setHotels(hotelsData);
    }, [])

    // console.log(router.query)
    const { location, startDate, endDate } = router.query;
    const formattedStartDate = new Date(startDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    const formattedEndDate = new Date(endDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
        {/* KRAFTBASE HIRING TEAM, WE CAN ALSO RENDER HEADER IN LAYOUT RATHER THAN RENDERING TO EVERYSINGLE PAGE, 
            BUT FOR THIS APP (as it has small code base) I AM RENDERING IT THIS WAY */}
        <Header placeholder = {`${location} | ${range}`} /> 

        <main className='flex'>
            <section>
                <p className='text-xs'>Greetings</p>
                <h1 className='font-semibold text-3xl mt-2 mb-6'>Stays in {location}</h1>
                <div className='flex flex-col'>
                {
                    hotels.map((hotel, index) => (
                        <Hotelinfo 
                            key={index} 
                            img={hotel.img}
                            location={hotel.location}
                            title={hotel.title}
                            description={hotel.description}
                            star={hotel.star}
                            price={hotel.price}
                            total={hotel.total}
                        />
                    ))
                }
                </div>
            </section>
            <section className='inline-flex xl:min-w-[600px]'>
                <Map hotels = {hotels}/>
            </section>
        </main>
    </div>
  )
}

export default listing