import { useState } from "react";
import style from "./FrontmentorPage.module.css";
import { Container, ProjectWrapper } from "../../ui";
import { Card, Loader } from "../../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { mentor } from "../../services/mentor";

const FrontmentorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const fetchProjects = async () => {
  //   const response = await axios.get(
  //     `${import.meta.env.VITE_BACKEND}/projects/frontend`
  //   );
  //   return response.data;
  // };

  // const { data, isLoading, isError } = useQuery(
  //   ["frontendProjects"],
  //   fetchProjects
  // );

  // if (isError) {
  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       Error occurred while fetching projects.
  //     </div>
  //   );
  // }

  if (mentor.length === 0) {
    setIsLoading(true);
  }

  return (
    <Container className={style.frontend}>
      <ProjectWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          mentor
            .map((item, index) => (
              <Card
                key={index}
                imgURL={item.img_link}
                name={item.name}
                tags={item.tags}
                link={item.live_link}
              />
            ))
            .reverse()
        )}
      </ProjectWrapper>
    </Container>
  );
};

export default FrontmentorPage;
