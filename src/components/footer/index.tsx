import React from "react"
import { LinkedIn } from "../../icons/linkedin"
import { Instagram } from "../../icons/instagram"
import { Github } from "../../icons/github"
import { Send } from "../../icons/send"
import { AngelList } from "../../icons/angellist"
import "./styles.scss"

const links = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tjin-au-yeung-b8748985",
    icon: <LinkedIn />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/tjinauyeung",
    icon: <Instagram />,
  },
  {
    label: "Github",
    url: "https://github.com/tjinauyeung",
    icon: <Github />,
  },
  {
    label: "Email",
    url: "mailto:tjinauyeung@gmail.com",
    icon: <Send />,
  },
  {
    label: "Angellist",
    url: "https://angel.co/tjin-au-yeung",
    icon: <AngelList />,
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        {links.map(link => (
          <li key={link.url}>
            <a href={link.url} target="_blank" className="footer__link">
              {link.icon}
              <label className="footer__link__label">{link.label}</label>
            </a>
          </li>
        ))}
      </ul>
      <p>Built in Amsterdam 2019</p>
    </footer>
  )
}

export default Footer
