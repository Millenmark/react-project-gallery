import React from "react";
import style from "./GithubPage.module.css";
import { Container, ProjectWrapper } from "../../ui";
import { Card, Loader } from "../../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GithubPage = () => {
  const fetchProjects = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND}/projects/personal`
    );
    return response.data;
  };

  const { data, isLoading, isError } = useQuery(
    ["frontendProjects"],
    fetchProjects
  );

  if (isError) {
    return (
      <div style={{ textAlign: "center" }}>
        Error occurred while fetching projects.
      </div>
    );
  }

  console.log(data);

  return (
    <Container className={style.personal}>
      <ProjectWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Card
              key={index}
              imgURL={item.img_link}
              name={item.name}
              tags={item.tags}
              link={item.live_link}
            />
          ))
        )}
      </ProjectWrapper>
    </Container>
  );
};

export default GithubPage;
