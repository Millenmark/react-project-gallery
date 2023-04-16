import React from 'react'

import { NavLink } from 'react-router-dom'
import { Container } from '../../ui'
import style from './Navbar.module.css'

const Navbar = () => {
  const menus = [
    {
      linkTo: '/',
      linkName: 'FrontendMentor'
    },
    {
      linkTo: '/personal',
      linkName: 'Personal'
    }

  ]
  return (
    <div className={style.border}>
      <Container>
        <nav className={style.nav}>
          <ul>
            {
              menus.map((menu, index) => (
                <li key={index}>
                  <NavLink to={menu.linkTo} className={`${style.hover}`}>{menu.linkName}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar