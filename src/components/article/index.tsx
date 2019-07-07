import React from "react";
import { Link } from "gatsby";
import { extendClassName } from "../../utils";
import "./styles.scss";

const Article = ({ className, title, date, description, path }) => (
  <div className={extendClassName("article", className)}>
    <p className="article__date">{date}</p>
    <Link to={path}>
      <h2 className="article__title">{title}</h2>
    </Link>
    <p className="article__description">{description}</p>
  </div>
);

export default Article;
