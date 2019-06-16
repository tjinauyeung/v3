module.exports = {
  siteMetadata: {
    title: `tjinauyeung`,
    author: `Tjin Au Yeung`,
    description: "Foo",
    social: {
      twitter: `tjinauyeung`
    }
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`
      }
    },
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer  9b0d82fc0bffae954c8da6a6e78fbf25c37f5a61`
        },
        queries: [
          `{
            repositoryOwner(login:"tjinauyeung"){
              pinnedRepositories(first: 6) {
                edges {
                  node {
                    name,
                    description,
                    url,
                  }
                }
              }
            }
          }`
        ]
      }
    }
  ]
};
