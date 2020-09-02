import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/rv_icon.png'


const Header = ({ siteTitle }) => (
  <nav>
    <div className="centered nav-wrap ">
        <div className="navbar-brand">
          <Link to="/" title="Logo">
            <img className={`logo`} src={logo} alt="Rescue Vessel Logo" style={{width: '88px'}}/>
          </Link>
        </div>
      <div className="nav-menu">
        <div className="desk-nav">
          <Link className="navbar-li" to="/about">About</Link>
          <Link className="navbar-li" to="/work">Work</Link>
          <Link className="navbar-li" to="/feed">Feed</Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
