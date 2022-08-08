import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetailCafe from '../pages/Cafe/DetailCafe'
import ListCafe from '../pages/Cafe/ListCafe'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cafes' element={<ListCafe />} />
      <Route path='/cafes/:id' element={<DetailCafe />} />
    </Routes>
  )
}

export default AppRoutes