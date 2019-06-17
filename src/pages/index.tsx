import React from "react";
import { graphql } from "gatsby";
import Profile from "../components/profile";
import Layout from "../components/layout";
import Article from "../components/article";
import SEO from "../components/seo";
import "./index.scss";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Articles" />
      <Profile className="home__profile" />
      {articles.map(({ node }) => (
        <Article
          className="home__article"
          key={node.fields.slug}
          path={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
        />
      ))}
    </Layout>
  );
};

export default Home;
