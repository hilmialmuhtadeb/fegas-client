import React from 'react'
import CityCard from '../../components/molecules/CityCard'

const Home = () => {
  return (
    <div className='relative'>
      <div className="container absolute -top-48 left-0 right-0">
        <input type="text" className="w-full lg:w-1/2 mb-8 px-4 py-2 rounded" placeholder="Cari kotamu" />
        <div className="bg-white p-4 rounded grid grid-cols-3 gap-4 mb-16">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </div>
      </div>
    </div>
  )
}

export default Home