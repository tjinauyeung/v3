import React from "react";
import { graphql } from "gatsby";
import Profile from "../components/profile";
import Layout from "../components/layout";
import Article from "../components/article";
import SEO from "../components/seo";
import "./articles.scss";

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

const Index = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" description="Home page of blog by Tjin Au Yeung, software engineering consultant at Xebia" />
      <Profile className="articles__profile" />
      {articles.map(({ node }) => (
        <Article
          className="articles__item"
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

export default Index;
