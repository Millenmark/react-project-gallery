import React from 'react'

import { Link } from 'react-router-dom'
import { Container } from '../../ui'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.border}>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar