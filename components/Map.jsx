"use client";
import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { getCenter } from 'geolib';
const Map = ({AllHotels}) => {
  

  const coordinates = AllHotels.map(hotel => ({
    longitude: hotel.long,
    latitude: hotel.lat
  }))

  const center = getCenter(coordinates)
  console.log(center)

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100vh',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/craftingbugs/clr7j5p9301lo01qw2yb94d1j'
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewPort}
      onMove={evt => setViewPort(evt.viewPort)}
    >
      <Marker
        longitude={center.longitude}
        latitude={center.latitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        
        <p className='text-2xl cursor-pointer animate-bounce'>📍</p>

      </Marker>

    </ReactMapGL>
  )
}

export default Map