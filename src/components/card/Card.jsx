import React from 'react'
import style from './Card.module.css'
import htmlIcon from '../../assets/svg/techicons/html.svg'

import { Button } from '../../ui'

const Card = ({imgURL, name, tags, link}) => {
  // const imageLink = `https://drive.google.com/uc?export=view&id=${imgURL}`

  return (
    <div className={style.card}>
      <div className={style['image-div']} style={{backgroundImage: `url(${imgURL})`}}>
        {/* <img src={imgURL} alt="" /> */}
        <div>
          <img src={htmlIcon} alt="" />
          <img src={htmlIcon} alt="" />
        </div>
      </div>
      <div className={style['card-info']}>
        <h2>{name}</h2>
        <div className={style.tags}>
          <ul>
            {
              tags.split(",").map((tag, index) => { 
                let color = '';

                switch (tag) {
                  case 'html':
                    color = '#ff753a'
                    break
                  case 'css':
                    color = '#4bb4f1'
                    break
                  case 'javascript':
                    color = '#f7df1e'
                    break
                  case 'laravel':
                    color = '#fd7765'
                    break
                  case 'mysql':
                    color = '#64ccf1'
                    break
                  case 'react':
                    color = '#00d8ff'
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
      </div>
      <Button link={link} className={style.button}>Visit Live Demo</Button>
    </div>
  )
}

export default Card