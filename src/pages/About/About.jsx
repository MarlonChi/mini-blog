import React from "react";
import { Link } from "react-router-dom";

import "./About.scss";

export const About = () => {
  return (
    <div className="About">
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};
