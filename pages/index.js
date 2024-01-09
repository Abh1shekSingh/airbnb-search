import Banner from '@/components/Banner'
import Header from '@/components/Header'
import React from 'react'
import { nearby, liveAnywhere } from '@/data'
import Nearby from '@/components/Nearby'
import Anywhere from '@/components/Anywhere'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              nearby.map((item, index) => (
                <Nearby key={index} img = {item.img} location = {item.location} distance = {item.distance} />
              ))
            }
          </div>
        </section>

        <section>
          
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex overflow-scroll space-x-4 scrollbar-hide py-4'>
          {
            liveAnywhere.map((item, index) => (
              <Anywhere key={index} img={item.img} title={item.title} />
            ))
          }
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Home