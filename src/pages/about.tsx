import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./about.scss";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>Hi, I'm Tjin. I like to build things.</h1>
      <p>I'm a front end developer with an eye for UI / UX</p>
      <img className="about__avatar" src={require("../assets/avatar.png")} />
    </div>
  </Layout>
);

export default About;
