import React from 'react'
import style from './FrontmentorPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { Card } from '../../components'
import { frontend } from '../../frontProjects'

const FrontmentorPage = () => {
  const desc = frontend.sort((a, b) => b.id - a.id)

  return (
    <Container className={style.frontend}>
      <ProjectWrapper>
        { desc.length === 0 
          ? (<p>Loading... Please wait.</p>)
          : desc.map((item, index) => (
            <Card 
              key={index} 
              imgURL={item.img_link} 
              name={item.name} 
              tags={item.tags}
              link={item.live_link}
            />
          ))
        }
      </ProjectWrapper>
    </Container>
  )
}

export default FrontmentorPage