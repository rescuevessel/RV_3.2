import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Nav from './nav'
import Footer from './footer'

//

const Layout = ({ children }) => {
  return (
    <>
      <SEO title='Rescue Vessel' />
      <Nav siteTitle='Rescue Vessel' />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
