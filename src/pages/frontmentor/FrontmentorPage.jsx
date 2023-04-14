import React from 'react'
import style from './FrontmentorPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { Card } from '../../components'
import { frontend } from '../../objects'

const FrontmentorPage = () => {
  return (
    <Container>
      <ProjectWrapper className={style.cards}>
        {
          frontend.map((item, index) => (
            <Card/>
          ))
        }
      </ProjectWrapper>
    </Container>
  )
}

export default FrontmentorPage