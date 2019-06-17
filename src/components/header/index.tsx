import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const Header = () => (
  <header>
    <nav className="nav">
      <li>
        <Link to="/">
          <div className="nav__logo">
            ✌️<span>tjinauyeung</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/" className="nav__link" activeClassName="is-active">
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
