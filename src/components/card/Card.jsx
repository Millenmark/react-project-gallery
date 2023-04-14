import React from 'react'
import style from './Card.module.css'

import { Button } from '../../ui'

const Card = ({imgURL, name, tags, link}) => {
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
              tags.map((tag, index) => { 
                let color = '';

                switch (tag) {
                  case 'html':
                    color = '#f16529'
                    break
                  case 'css':
                    color = '#0277bd'
                    break
                  case 'javascript':
                    color = '#e8d21c'
                    break
                  default:
                    color = 'black'
                    break
                }

                return (<li key={index} style={{color}}>{tag}</li>)
              })
            }
          </ul>
        </div>
        <Button link={link}>Visit Live Demo</Button>
      </div>
    </div>
  )
}

export default Card