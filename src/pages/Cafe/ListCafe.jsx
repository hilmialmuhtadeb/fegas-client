import React from 'react'
import { Link } from 'react-router-dom'

const ListCafe = () => {
  return (
    <>
      <div className='text-3xl'>ini halaman ListCafe</div>
      <Link to="/cafes/1">Detail Cafe</Link>
    </>
  )
}

export default ListCafe