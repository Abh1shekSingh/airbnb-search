"use client";
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib';
const Map = ({AllHotels}) => {

  const coordinates = AllHotels.map(hotel => ({
    longitude: hotel.long,
    latitude: hotel.lat
  }))

  const center = getCenter(coordinates)
  console.log(center)

  const [viewPort, setViewPort] = useState({
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
     { AllHotels.map(hotel => (
        <div key={hotel.long}>
          <Marker longitude={hotel.long} latitude={hotel.lat} offsetLeft={-20} offsetTop={-10}>
            <p className='cursor-pointer text-2xl animate-bounce' aria-label='push-pin'>📌</p>
          </Marker>
        </div>
      ))
}
    </ReactMapGL>
  )
}

export default Map