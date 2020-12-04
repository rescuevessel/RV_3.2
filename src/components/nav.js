import { Link } from 'gatsby'
import React, { useState } from 'react'
import logo from '../images/rv_icon_orange.png'
import './nav.scss'

const Nav = () => {
  const [showMobile, setShowMobile] = useState(false)
  const toggleMobile = () => setShowMobile(!showMobile)

  let mobileActive = showMobile ? 'mobile-nav-active' : ''
  let burgerX = showMobile ? 'nav-burger-active' : ''

  return (
    <nav>
      <div className='centered nav-wrap '>
        <div className='nav-logo'>
          <Link to='/' title='Logo'>
            <img
              className={`logo`}
              src={logo}
              alt='Rescue Vessel Logo'
              style={{ width: '70px' }}
            />
          </Link>
        </div>
        <div className='nav-menu'>
          <button className={`nav-burger ${burgerX}`} onClick={toggleMobile}>
            <div className='line1'></div>
            <div className='line2'></div>
          </button>
          <div
            className={`${mobileActive} mobile-nav`}
            style={{ display: showMobile ? 'flex' : 'none' }}
          >
            <Link className='m-navbar-li' to='/work'>
              Work
            </Link>
            <Link className='m-navbar-li' to='/about'>
              About
            </Link>
            <Link className='m-navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
          <div className='desk-nav underline'>
            <Link className='navbar-li' to='/work'>
              Work
            </Link>
            <Link className='navbar-li' to='/about'>
              About
            </Link>
            <Link className='navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
