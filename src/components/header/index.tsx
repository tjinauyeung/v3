import React from "react"
import { Link } from "gatsby"
import { Terminal } from "../../icons/terminal"
import "./styles.scss"

const Header = () => (
  <header>
    <nav className="navbar">
      <li>
        <Link to="/">
          <div className="navbar__logo">
            <Terminal />
            <span>tjinauyeung</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
    </nav>
  </header>
)

export default Header
