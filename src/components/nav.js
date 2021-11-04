import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import logo from '../images/rv_icon_orange.png'
import './nav.scss'
import mixpanel from 'mixpanel-browser'

function Nav() {
  useEffect(() => {
    mixpanel.track_links('.mp-reel', 'Clicked Nav Reel', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.mp-work', 'Clicked Nav Work', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.mp-about', 'Clicked Nav About', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.mp-feed', 'Clicked Nav Feed', {
      referrer: document.referrer,
    })
  }, [])
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
            <Link className='mp-reel m-navbar-li' to='/reel'>
              Reel
            </Link>
            <Link className='mp-work m-navbar-li' to='/work'>
              Work
            </Link>
            <Link className='mp-about m-navbar-li' to='/about'>
              About
            </Link>
            <Link className='mp-feed m-navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
          <div className='desk-nav underline'>
            <Link className='mp-reel navbar-li' to='/reel'>
              Reel
            </Link>
            <Link className='mp-work navbar-li' to='/work'>
              Work
            </Link>
            <Link className='mp-about navbar-li' to='/about'>
              About
            </Link>
            <Link className='mp-feed navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
