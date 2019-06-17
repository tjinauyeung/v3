import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Box } from "../icons/box";
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
      <div className="projects">
        <h1 className="projects__title">Pinned</h1>
        <ul className="projects__list">
          {repos.map(repo => (
            <li key={repo.id} className="project">
              <a href={repo.url} target="_blank">
                <Box />
                <h3 className="project__title">{repo.name}</h3>
                <p className="project__description">{repo.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
