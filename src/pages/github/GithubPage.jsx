import React, {useState, useEffect} from 'react'
import style from './GithubPage.module.css'
import { Container, ProjectWrapper } from '../../ui'
import { Card } from '../../components'

const GithubPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const sortedData = data.personal.sort((a, b) => b.id - a.id);
        setData(sortedData);
      } catch (error) {
        console.error(error);
      }
    };
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