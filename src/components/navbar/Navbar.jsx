import React from 'react'

import { Link } from 'react-router-dom'
import { Container } from '../../ui'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.border}>
      <Container>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to="/">Frontend Mentor</Link>
            </li>
            <li>
              <Link to="/github">Github</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar