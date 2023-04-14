import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../../sections'
import { Navbar } from '../../components'

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <Header/>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default DefaultLayout