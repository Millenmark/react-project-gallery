import React from 'react'
import style from './Card.module.css'
import { htmlIcon, cssIcon, jsIcon, reactIcon, laravelIcon, mysqlIcon } from '../../assets/svg/techicons'

import { Button } from '../../ui'

const Card = ({imgURL, name, tags, link}) => {
  // const imageLink = `https://drive.google.com/uc?export=view&id=${imgURL}`

  return (
    <div className={style.card}>
      <div className={style['image-div']} style={{backgroundImage: `url(${imgURL})`}}>
        {/* <img src={imgURL} alt="" /> */}
        <div>
        {
          tags.split(",").map((tag, index) => { 
            let src = '';

            switch (tag) {
              case 'html':
                src = htmlIcon
                break
              case 'css':
                src = cssIcon
                break
              case 'javascript':
                src = jsIcon
                break
              case 'react':
                src = reactIcon
                break
              case 'laravel':
                src = laravelIcon
                break
              case 'mysql':
                src = mysqlIcon
                break
              default:
                src = '#'
                break
            }

            return (<img key={index} src={src}/>)
          })
        } 
        </div>
      </div>
      <div className={style['card-info']}>
        <h2>{name}</h2>
      </div>
      <div className={style.live}>
          <Button>Play Live View</Button>
        </div>
    </div>
  )
}

export default Card