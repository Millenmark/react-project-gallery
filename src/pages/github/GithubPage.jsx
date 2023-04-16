import React from 'react'
import style from './GithubPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { personal } from '../../objects'

const GithubPage = () => {
  return (
    <Container className={style.personal}>
      <ProjectWrapper>
      { 
        personal.length === 0 
          ? (<p>Nothing to show here at the moment</p>)
          : personal.map((item, index) => (
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

export default GithubPage