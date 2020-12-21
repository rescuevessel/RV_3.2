import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ReactGA from 'react-ga'
import mixpanel from 'mixpanel-browser'

mixpanel.init('2431abc4b243b95f0f2983ba8a75dff2')
mixpanel.track('Tracking after mixpanel.init')

ReactGA.initialize('UA-81279213-1')
ReactGA.pageview('/')
ReactGA.pageview('/about')
ReactGA.pageview('/work')
ReactGA.pageview('/feed')
ReactGA.pageview('/work/shermans-showcase')
ReactGA.pageview('/work/marco')
ReactGA.pageview('/work/dekalb-market-hall')
ReactGA.pageview('/work/the-movie-show')
ReactGA.pageview('/work/mountain-men')
ReactGA.pageview('/work/ae')

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
