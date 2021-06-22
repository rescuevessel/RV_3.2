module.exports = {
  siteMetadata: {
    title: `Rescue Vessel 3.2`,
    description: `We're here to help.`,
    author: `@rescuevessel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-lottie',
            options: {
              // Whether or not to generate static SVG placeholders.
              // If this is false, an empty div will render until
              // the lottie script starts the animation.
              generatePlaceholders: true,

              // lottie-web is loaded from CDN to start the animations.
              // This controls which version of the script is loaded.
              lottieVersion: '5.7.1',

              // The renderer to use (html, canvas, or svg). The static
              // placeholder will always be an SVG despite this value.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              renderer: 'svg',

              // Whether or not to loop the animation.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              loop: true,

              // Whether or not to autoplay the animation on load.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              autoplay: true,
            },
          },
        ],
      },
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
