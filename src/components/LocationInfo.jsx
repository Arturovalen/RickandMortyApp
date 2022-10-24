import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {

    console.log(location)

  return (
    <article className='article__location'>
    <ul className='lu__location'>
        <li className='li__location'><span className='span__location'>Name: </span>{location?.name}</li>
        <li className='li__location'><span className='span__location'>Type: </span>{location?.type}</li>
        <li className='li__location'><span className='span__location'>Dimension: </span>{location?.dimension}</li>
        <li className='li__location'><span className='span__location'>Population: </span>{location?.residents.length}</li>
    </ul>
    </article>
  )
}

export default LocationInfo