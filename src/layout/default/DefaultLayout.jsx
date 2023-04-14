import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../../sections'

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <Header/>
        <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default DefaultLayout