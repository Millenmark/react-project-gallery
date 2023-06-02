import React from "react";
import style from "./FrontmentorPage.module.css";
import { Container, ProjectWrapper } from "../../ui";
import { Card } from "../../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FrontmentorPage = () => {
  const fetchProjects = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/projects/frontend"
    );
    return response.data;
  };

  const { data, isLoading, isError } = useQuery(
    ["frontendProjects"],
    fetchProjects
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching projects.</div>;
  }

  return (
    <Container className={style.frontend}>
      <ProjectWrapper>
        {data.map((item, index) => (
          <Card
            key={index}
            imgURL={item.img_link}
            name={item.name}
            tags={item.tags}
            link={item.live_link}
          />
        ))}
      </ProjectWrapper>
    </Container>
  );
};

export default FrontmentorPage;
