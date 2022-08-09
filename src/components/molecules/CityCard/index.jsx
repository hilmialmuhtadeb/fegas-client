import React from 'react'
import { Link } from 'react-router-dom'
import cityImage from '../../../assets/city.jpg'

const CityCard = () => {
  return (
    <Link to="/cities/jakarta-barat">
      <div className='group flex lg:h-64 hover:bg-gray-100 transition duration-200 rounded'>
        <div className="lg:w-2/3 px-8 my-auto">
          <p className='text-gray-400'>DKI Jakarta</p>
          <h3 className='text-xl font-bold mt-2 mb-8 group-hover:text-sky-600 transition duration-200'>Jakarta Barat</h3>
          <small>34 Cafe</small>
        </div>
        <div className="lg:w-1/3">
          <img src={cityImage} alt="city icons" className='h-full object-cover grayscale rounded group-hover:grayscale-0 transition duration-200' />
        </div>
      </div>
    </Link>
  )
}

export default CityCard