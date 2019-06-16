import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hexagon } from "../icons/hexagon";
import "./projects.scss";

export const pageQuery = graphql`
  query {
    allGithubPinnedrepositories {
      nodes {
        id
        name
        url
        description
      }
    }
  }
`;

const Projects = ({ data }) => {
  const repos = data.allGithubPinnedrepositories.nodes;
  return (
    <Layout>
      <SEO title="Articles" />
      <ul className="projects">
        {repos.map(repo => (
          <li key={repo.id} className="project">
            <a href={repo.url} target="_blank">
              <h1 className="project__title">
                <Hexagon />
                {repo.name}
              </h1>
            </a>
            <p className="project__description">{repo.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
