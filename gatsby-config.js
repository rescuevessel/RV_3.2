module.exports = {
  siteMetadata: {
    title: `Rescue Vessel 3.3`,
    description: `We're here to help.`,
    author: `@rescuevessel`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lottie`,
        path: `${__dirname}/src/lottieTest`,
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
  ],
}
