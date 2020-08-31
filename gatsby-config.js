module.exports = {
  siteMetadata: {
    title: `Rescue Vessel 3.2`,
    description: `We're here to help.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/rv_icon.png',
      },
    },  
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i5mxz0zh67lx`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: '1kR_mZyBhpsxpr769RRBkfTeYjsFf42ZjPyz334ZEkI',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
