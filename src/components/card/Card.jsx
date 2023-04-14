import React from 'react'
import style from './Card.module.css'

const Card = ({imgURL, name, description, tags}) => {
  return (
    <div className={style.card}>
      <div className={style['image-div']} style={{backgroundImage: `url(${imgURL})`}}>
        {/* <img src={imgURL} alt="" /> */}
      </div>
      <div className={style['card-info']}>
        <h2>{name}</h2>
        <div className={style.tags}>
          <ul>
            {
              tags.map((tag, index) => (
                <li key={index} style={{color:`${tag.color}`}}>{tag.name}</li>
              ))
            }
          </ul>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card