import React from "react";
import style from "./Card.module.css";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  laravelIcon,
  mysqlIcon,
  postgresqlIcon,
  muiIcon,
  expressIcon,
  nodejsIcon,
  tailwindIcon,
  mongodbIcon,
  typescriptIcon,
} from "../../assets/svg/techicons";

import { Button } from "../../ui";

const Card = ({ imgURL, name, tags, link }) => {
  // const imageLink = `https://drive.google.com/uc?export=view&id=${imgURL}`

  return (
    <div className={style.card}>
      <div
        className={style["image-div"]}
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        {/* <img src={imgURL} alt="" /> */}
        <div>
          {tags.split(",").map((tag, index) => {
            let src = "";

            switch (tag) {
              case "html":
                src = htmlIcon;
                break;
              case "css":
                src = cssIcon;
                break;
              case "javascript":
                src = jsIcon;
                break;
              case "react":
                src = reactIcon;
                break;
              case "laravel":
                src = laravelIcon;
                break;
              case "mysql":
                src = mysqlIcon;
                break;
              case "postgresql":
                src = postgresqlIcon;
                break;
              case "nodejs":
                src = nodejsIcon;
                break;
              case "mui":
                src = muiIcon;
                break;
              case "express":
                src = expressIcon;
                break;
              case "tailwind":
                src = tailwindIcon;
                break;
              case "mongodb":
                src = mongodbIcon;
                break;
              case "typescript":
                src = typescriptIcon;
                break;
              default:
                src = "#";
                break;
            }

            return <img key={index} src={src} />;
          })}
        </div>
      </div>
      <div className={style["card-info"]}>
        <h2>{name}</h2>
      </div>
      <div className={style.live}>
        <Button link={link}>Play Live View</Button>
      </div>
    </div>
  );
};

export default Card;
