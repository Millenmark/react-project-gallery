import React from 'react'
import style from './FrontmentorPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { Card } from '../../components'
import { frontend } from '../../objects'

const FrontmentorPage = () => {
  return (
    <Container className={style.frontend}>
      <ProjectWrapper>
        { frontend.length === 0 
          ? (<p>Nothing to show here at the moment</p>)
          : frontend.map((item, index) => (
            <Card 
              key={index} 
              imgURL={item.imgURL} 
              name={item.name} 
              tags={item.tags}
              link={item.link}
            />
          ))
        }
      </ProjectWrapper>
    </Container>
  )
}

export default FrontmentorPage