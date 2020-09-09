module.exports = {
  siteMetadata: {
    title: `Rescue Vessel 3.2`,
    description: `We're here to help.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        icon: 'src/images/favicon.png',
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
    {
      resolve: `gatsby-source-dropbox`,
      options: {
        accessToken: `9OB_98L2OKEAAAAAAABqFmrGZRoQJVmxLYeuozKKEbf4pBK_jr0HtD5cAB8sIQPI`,
        extensions: ['.pdf', '.jpg', '.png', '.gif', '.md'],
        path: '',
        recursive: false,
        createFolderNodes: false,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
