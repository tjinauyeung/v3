const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const queryArticles = `
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`./src/templates/template.tsx`);

  return graphql(queryArticles).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const articles = result.data.allMarkdownRemark.edges;

    articles.forEach((article, i) => {
      const previous = i === articles.length - 1 ? null : articles[i + 1].node;
      const next = i === 0 ? null : articles[i - 1].node;

      createPage({
        path: article.node.fields.slug,
        component: articleTemplate,
        context: {
          slug: article.node.fields.slug,
          previous,
          next
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
