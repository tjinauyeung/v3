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
        languages {
          edges {
            node {
              name
              color
            }
          }
        }
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
        <h1 className="projects__title">
          <a href="https://github.com/tjinauyeung" target="_blank">
            Pinned repos
          </a>
        </h1>
        <ul className="projects__list">
          {repos.map(repo => {
            const langNodes = repo.languages.edges;
            return (
              <li key={repo.id} className="project">
                <a href={repo.url} target="_blank">
                  <h3 className="project__title">{repo.name}</h3>
                  <p className="project__description">{repo.description}</p>
                  <ul className="project__languages">
                    {langNodes.map(({ node }) => (
                      <li className="project__language" key={node.name}>
                        <span
                          className="project__language__dot"
                          style={{ background: node.color }}
                        ></span>
                        <span>{node.name}</span>
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
