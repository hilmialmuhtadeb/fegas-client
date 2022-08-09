import React from 'react'
import InfoBoard from '../../components/atoms/InfoBoard'
import CafeCard from '../../components/molecules/CafeCard'

const City = () => {
  return (
    <div className='relative'>
      <div className="container absolute -top-48 left-0 right-0">
        <input type="text" className="w-full lg:w-1/2 mb-8 px-4 py-2 rounded" placeholder="Cari cafe" />
        <div className="bg-white p-4 rounded grid grid-cols-4 gap-x-2 gap-y-4 mb-16">
          <InfoBoard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
          <CafeCard />
        </div>
      </div>
    </div>
  )
}

export default City