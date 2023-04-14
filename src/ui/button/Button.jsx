import React from 'react'
import { button } from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({link, type, children, className}) => {
  return (
    <Link to={link || '#'} target='_blank'>
      <button 
        className={`${button} ${className}`}
        type={type || 'button'}
      >{children}</button>
    </Link>
  )
}

export default Button