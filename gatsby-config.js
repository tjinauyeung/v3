require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Tjin Au Yeung - Software Consultant at Xebia`,
    author: `Tjin Au Yeung`,
    description: "Personal blog of Tjin Au Yeung",
    host: 'https://tjinauyeung.com',
    social: {
      twitter: `tjinauyeung`
    },
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
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              wrapperStyle: `
                width: calc(100% + calc(var(--padding-container) * 2));
                margin: var(--spacer-xl) calc(var(--padding-container) * -1);
              `
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-143525874-1`
      }
    }
  ]
};
