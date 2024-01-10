"use client";
import React, { useState } from 'react';
import logo from "../public/airbnb.svg";
import logoMobile from "../public/airbnb-1.svg";
import Image from 'next/image';
import { CiSearch, CiGlobe, CiMenuBurger, CiUser } from "react-icons/ci";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, DateRangePicker } from 'react-date-range';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { hotelsData } from '@/data/hotelData';


const Header = ({placeholder}) => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries, setCountries] = useState(
      hotelsData.map((hotel) => hotel.country)
    );
  
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    const handleReset = () => {
      setSearch("");
      setSelectedCountry(null);
    };
  
    const handleChange = (e) => {
      setStartDate(e.selection.startDate);
      setEndDate(e.selection.endDate);
    };
  
    const handleSearch = () => {
      router.push({
        pathname: "/listing",
        query: {
          location: selectedCountry || search,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      });
    };
  
   
    const selectionRanges = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    };

    return (
      <>
        <div className='bg-red-400 flex items-center justify-center p-2'>
          <p className='text-center text-white italic'>Available Countries - France, Italy, United Kingdom and Spain!</p>
        </div>
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
          <div className='relative flex items-center cursor-pointer my-auto'>
                <Image onClick={() => router.push("/")} className='hidden md:block' src={logo} alt="logo" width={100} />
                <Image src={logoMobile} alt="logoMobile" width={30} className='md:hidden' />
          </div>
          <div className='flex items-center justify-center rounded-full py-2 md:border-2 md:shadow-sm relative'>
            <input
              value={selectedCountry || search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setCountries(hotelsData.map((hotel) => hotel.country))}
              className='flex-grow pl-5 bg-transparent outline-none'
              type="text"
              placeholder={placeholder || 'Start your search'}
            />
          
            <span className='hidden md:inline-flex text-white flex justify-center items-center bg-red-400 cursor-pointer rounded-full p-2 md:mx-2'>
              <CiSearch />
            </span>
          </div>
          <div className='flex items-center justify-end space-x-4 text-gray-500'>
            <p className='hidden md:inline'>Become a host</p>
            <CiGlobe />
            <div className='flex border-2 p-2 rounded-full space-x-2'>
              <CiMenuBurger />
              <CiUser />
            </div>
          </div>
          {(selectedCountry || search) && (
            <div className='flex flex-col col-span-3 mx-auto'>
              {isMobile ? (
                <DateRange ranges={[selectionRanges]} minDate={new Date()} rangeColors={["#fd5b61"]} onChange={handleChange} />
              ): (
                <div className='your-component-wrapper'>
                  <DateRangePicker ranges={[selectionRanges]} minDate={new Date()} rangeColors={["#fd5b61"]} onChange={handleChange} />
                </div>
              )}
              <div className='flex justify-around'>
                <button className='bg-black text-white py-2 px-4 cursor-pointer hover:shadow-lg transition duration-300 ease-out rounded-full' onClick={handleReset}>Cancel</button>
                <button className='bg-red-400 text-white py-2 px-4 cursor-pointer hover:shadow-lg transition duration-300 ease-out rounded-full' onClick={handleSearch}>Submit</button>
              </div>
            </div>
          )}
        </header>
        </>
      );
}

export default Header;
