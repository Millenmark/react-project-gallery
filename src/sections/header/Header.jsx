import React from 'react'
import style from './Header.module.css'

import { Container } from '../../ui'
import { Navbar } from '../../components'

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style['top-nav']}>
          <h1>Millen Mark's Project Gallery</h1>
        </div>
      </Container>

      <Navbar/>
    </header>
  )
}

export default Header