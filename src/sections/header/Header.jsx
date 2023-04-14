import React from 'react'
import style from './Header.module.css'

import { Container } from '../../ui'

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style['top-nav']}>
          <h1>Millen Mark's <br/>Project Gallery</h1>
        </div>
      </Container>
    </header>
  )
}

export default Header