import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from '../../ui'

const Header = () => {
  return (
    <header>
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
    </header>
  )
}

export default Header