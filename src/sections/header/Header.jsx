import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

import facebook from "../../assets/svg/facebook.svg";
import github from "../../assets/svg/github.svg";
import linkedIn from "../../assets/svg/linkedin.svg";
import front from "../../assets/svg/frontendmentor.svg";

import { Container } from "../../ui";

const Header = () => {
  const icons = [
    {
      name: "facebook",
      logo: facebook,
      link: "https://www.facebook.com/aquino.millenmark",
    },
    {
      name: "github",
      logo: github,
      link: "https://github.com/Millenmark",
    },
    {
      name: "linkedIn",
      logo: linkedIn,
      link: "https://www.linkedin.com/in/millen-mark-aquino/",
    },
    {
      name: "frontend mentor",
      logo: front,
      link: "https://www.frontendmentor.io/profile/Millenmark",
    },
  ];

  return (
    <header className={style.header}>
      <Container>
        <div className={style["top-nav"]}>
          <h1>Millen Mark's Project Gallery</h1>
          <div className={style.socials}>
            {icons.map((icon, index) => (
              <Link to={icon.link} target="_blank" key={index}>
                <div className={style.icon}>
                  <img src={icon.logo} alt={`${icon.name} icons`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
