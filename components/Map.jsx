"use client"
import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

const Map = ({hotels}) => {

  
  const coordinates = hotels.map((hotel) => ({
    longitude: hotel.long,
    latitude: hotel.lat,
  }))

  console.log(coordinates)
  
  
  
  const center = getCenter(coordinates);
  console.log(center)
  
  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/craftingbugs/clr7j5p9301lo01qw2yb94d1j'
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewState}
      style={{width: 600, height: 600}}
      onMove={evt => setViewState(evt.viewState)}
    >

    </ReactMapGL>
  )
}

export default Map