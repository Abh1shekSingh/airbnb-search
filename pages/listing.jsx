/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Hotelinfo from '@/components/Hotelinfo'
import Map from '@/components/Map'
import { hotelsData } from '@/data/hotelData'

const Listing = () => {
    const router = useRouter();
    
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


        const hotelsForSelectedCountry = hotelsData.find(hotel => hotel.country.toLowerCase() === location?.toLowerCase());
        console.log(hotelsForSelectedCountry)


        if(!hotelsForSelectedCountry) {
            return <div>
                <Header />
                <h1 className='text-3xl italic text-center font-semibold py-5'>No hotels found for {location}</h1>
            </div>
                
        }

    return (
        <div>
            {/* KRAFTBASE HIRING TEAM, WE CAN ALSO RENDER HEADER IN LAYOUT RATHER THAN RENDERING TO EVERYSINGLE PAGE, 
                BUT FOR THIS APP (as it has small code base) I AM RENDERING IT THIS WAY */}
            <Header placeholder={`${router.query.location} | ${range}`} />

            <main className='flex flex-col xl:flex-row'>
                <section>
                    {/* <p className='text-xs py-7 px-4'>Greetings</p> */}
                    <h1 className='font-semibold text-3xl mt-2 ml-2 mb-6'>Stays in {router.query.location}</h1>
                    <div className='flex flex-col'>
                        {
                            hotelsForSelectedCountry.hotels.map((hotel, index) => (
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
                <section className='inline-flex xl:min-w-[800px] overflow-hidden'>
                    <Map AllHotels={hotelsForSelectedCountry.hotels} />
                </section>
            </main>
        </div>
    )
}

export default Listing;
