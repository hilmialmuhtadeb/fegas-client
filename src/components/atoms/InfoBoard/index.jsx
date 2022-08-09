import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMosque, faWifi, faSackDollar, faSmoking, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const InfoBoard = () => {
  return (
    <div className='border bg-orange-50 border-gray-100 rounded'>
      <h4 className='text-center font-bold my-6'>Informasi</h4>
      <div className='flex w-full my-4 items-center'>
        <FontAwesomeIcon icon={faMosque} className='mr-3 w-1/5 text-xl' />
        <p className='text-sm'>tersedia musholla</p>
      </div>
      <div className='flex w-full my-4 items-center'>
        <FontAwesomeIcon icon={faWifi} className='mr-3 w-1/5 text-xl' />
        <p className='text-sm'>free wifi</p>
      </div>
      <div className='flex w-full my-4 items-center'>
        <FontAwesomeIcon icon={faSackDollar} className='mr-3 w-1/5 text-xl' />
        <p className='text-sm'>tersedia menu di bawah 15k</p>
      </div>
      <div className='flex w-full my-4 items-center'>
        <FontAwesomeIcon icon={faSmoking} className='mr-3 w-1/5 text-xl' />
        <p className='text-sm'>area merokok</p>
      </div>
      <div className='flex w-full my-4 items-center'>
        <FontAwesomeIcon icon={faThumbsUp} className='mr-3 w-1/5 text-xl' />
        <p className='text-sm'>rekomendasi pribadi</p>
      </div>
    </div>
  )
}

export default InfoBoard