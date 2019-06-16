import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const Article = ({ title, date, description, path }) => (
  <div className="article">
    <p className="article__date">{date}</p>
    <h2 className="article__title">
      <Link to={path}>{title}</Link>
    </h2>
    <p className="article__description">{description}</p>
  </div>
);

export default Article;
