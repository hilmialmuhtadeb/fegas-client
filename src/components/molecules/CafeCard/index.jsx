import React from 'react'
import cafeImage from '../../../assets/cafe.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMosque, faWifi, faSackDollar, faSmoking, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const CafeCard = () => {
  return (
    <div className='lg:h-96 hover:bg-gray-100 transition duration-200 rounded'>
      <div className='h-1/2'>
        <img src={cafeImage} alt="city icons" className='w-full h-full object-cover rounded' />
      </div>
      <div className='py-4 px-2'>
        <p className='font-bold'>XXX3 Brew</p>
        <small>Jl. Raya Jemursari No.167, Kendangsari, Kec. Tenggilis Mejoyo. 60239</small>
        <div className="flex my-4">
          <FontAwesomeIcon icon={faMosque} className='mr-2 text-sm' />
          <FontAwesomeIcon icon={faWifi} className='mr-2 text-sm' />
          <FontAwesomeIcon icon={faSackDollar} className='mr-2 text-sm' />
          <FontAwesomeIcon icon={faSmoking} className='mr-2 text-sm' />
          <FontAwesomeIcon icon={faThumbsUp} className='mr-2 text-sm' />
        </div>
        <a href="https://g.page/thirty3brew?share" className='underline decoration-solid text-blue-400'>open in map</a>
      </div>
    </div>
  )
}

export default CafeCard