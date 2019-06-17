import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./about.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>Hi, I'm Tjin.</h1>
      <p>I'm a software engineer specialised in writing modern Javascript.</p>
      <p>
        Before transitioning into software development I graduated with a degree in Building
        Engineering. Because of my affinity with design I quicky grew towards the front-end.
      </p>
      <p>
        Recently I've been building more back-end services and APIs moving towards a full stack
        engineer so that I can work across the stack.
      </p>
      <img className="about__avatar" src={require("../assets/avatar.png")} />
    </div>
  </Layout>
);

export default About;
