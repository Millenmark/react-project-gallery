import React from 'react'
import { button } from './Button.module.css'
import { Link } from 'react-router-dom'
import playBtn from '../../assets/svg/icon_playbtn.svg'

const Button = ({link, type, children, className}) => {
  return (
    <Link to={link || '#'} target='_blank'>
      <button 
        className={`${button} ${className}`}
        type={type || 'button'}
      >{children} <img src={playBtn} alt="" /></button>
    </Link>
  )
}

export default Button