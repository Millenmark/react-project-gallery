import React from 'react'
import style from './Card.module.css'

const Card = ({imgURL, name, description}) => {
  return (
    <div className={style.card}>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <div className={style['card-info']}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card