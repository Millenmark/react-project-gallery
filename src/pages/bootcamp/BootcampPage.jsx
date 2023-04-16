import React from 'react'
import style from './BootcampPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { bootcamp } from '../../objects'


const BootcampPage = () => {
  return (
    <Container className={style.bootcamp}>
      <ProjectWrapper>
      { 
        bootcamp.length === 0 
          ? (<p>Nothing to show here at the moment</p>)
          : bootcamp.map((item, index) => (
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

export default BootcampPage