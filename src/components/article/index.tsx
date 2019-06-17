import React from "react";
import { Link } from "gatsby";
import { extendClassName } from "../../utils";
import "./styles.scss";

const Article = ({ className, title, date, description, path }) => (
  <div className={extendClassName("article", className)}>
    <Link to={path}>
      <p className="article__date">{date}</p>
      <h2 className="article__title">{title}</h2>
      <p className="article__description">{description}</p>
    </Link>
  </div>
);

export default Article;
