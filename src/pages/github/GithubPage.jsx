import React, {useState, useEffect} from 'react'
import style from './GithubPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { Card } from '../../components'
import { personal } from '../../objects'

const GithubPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}/api/v1/${import.meta.env.VITE_DATABASE_KEY}?sheet=personal&sort_by=id&sort_order=desc`);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <Container className={style.personal}>
      <ProjectWrapper>
      { 
        data.length === 0 
          ? (<p>Loading... Please wait.</p>)
          : data.map((item, index) => (
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

export default GithubPage