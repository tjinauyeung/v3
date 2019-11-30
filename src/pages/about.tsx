import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./about.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>Hi, I'm Tjin.</h1>
      <p>
        I'm a software engineer specialised in writing modern Javascript, currently at{" "}
        <a href="https://www.xebia.com" target="_blank">
          Xebia
        </a>
        , a software consultancy based in the Netherlands .
      </p>
      <p>
        Previously, I've worked at companies i.e.{" "}
        <a href="https://www.usabilla.com" target="_blank">
          Usabilla
        </a>{" "}
        and{" "}
        <a href="https://www.nxchange.com" target="_blank">
          Nxchange
        </a>
        .
      </p>
      <p>
        Before transitioning into software I graduated with a degree <i>(B.Eng.)</i> in the built
        environment. After a short gig as a{" "}
        <a href="https://www.behance.net/tjinauyeung" target="_blank">
          graphic designer
        </a>{" "}
        I quicky grew towards the front-end web development because of my affinity with design.
      </p>
      <p>
        In recent period, I've been building more back-end services and APIs moving towards a full
        stack engineer who can work across the stack.
      </p>
      <img className="about__avatar" src={require("../assets/avatar.png")} />
    </div>
  </Layout>
);

export default About;
