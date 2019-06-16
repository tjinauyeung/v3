import React from "react"
import { Link, graphql } from "gatsby"
import Profile from "../components/profile"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
`

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Articles" />
      <Profile />
      {posts.map(({ node }) => (
        <div key={node.fields.slug}>
          <h3>
            <Link to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p>{node.frontmatter.description || node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Home
