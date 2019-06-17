require("dotenv").config();

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
        path: `${__dirname}/content`,
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
          Authorization: `Bearer  ${process.env.GITHUB_API_KEY}`
        },
        queries: [
          `{
            repositoryOwner(login:"tjinauyeung"){
              pinnedRepositories(first: 10) {
                edges {
                  node {
                    name,
                    description,
                    url,
                    languages(first:10) {
                      edges {
                        node {
                          name,
                          color
                        }
                      }
                    }
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
