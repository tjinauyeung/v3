import React from "react";
import { Link } from "gatsby";
import "./styles.scss";

const Header = () => (
  <header>
    <nav className="nav">
      <li>
        <Link to="/">
          <div className="nav__logo">
            <img src={require("../../assets/logo.png")} />
            <span>Tjin Au Yeung</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/articles" className="nav__link" activeClassName="is-active" partiallyActive>
          <span>Articles</span>
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav__link" activeClassName="is-active" partiallyActive>
          <span>About</span>
        </Link>
      </li>
    </nav>
  </header>
);

export default Header;
