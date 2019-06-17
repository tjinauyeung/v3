import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const Header = () => (
  <header>
    <nav className="nav">
      <li>
        <Link to="/articles">
          <div className="nav__logo">
            <img src={require("../../../static/favicon.png")} />
            <span>tjinauyeung</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/articles" className="nav__link" activeClassName="is-active" partiallyActive>
          articles
        </Link>
      </li>
      <li>
        <Link to="/projects" className="nav__link" activeClassName="is-active">
          projects
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav__link" activeClassName="is-active">
          about
        </Link>
      </li>
    </nav>
  </header>
);

export default Header;
