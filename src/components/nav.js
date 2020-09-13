import { Link } from 'gatsby'
import React, { useState } from 'react'
import logo from '../images/rv_icon.png'
import './nav.scss'

const Nav = () => {
  const [showMobile, setShowMobile] = useState(false)
  const toggleMobile = () => setShowMobile(!showMobile)

  // let msg = showMobile ? "Future mobile Nav" : "Fuck youuuuuuuu"

  let mobileActive
  let burgerX

  return (
    <nav>
      <div className='centered nav-wrap '>
        <div className='navbar-brand'>
          <Link to='/' title='Logo'>
            <img
              className={`logo`}
              src={logo}
              alt='Rescue Vessel Logo'
              style={{ width: '88px' }}
            />
          </Link>
        </div>
        <div className='nav-menu'>
          <div className='desk-nav'>
            <Link className='navbar-li' to='/about'>
              About
            </Link>
            <Link className='navbar-li' to='/work'>
              Work
            </Link>
            <Link className='navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
          <button className={`nav-burger ${burgerX}`} onClick={toggleMobile}>
            <div className='line1'></div>
            <div className='line2'></div>
          </button>
          <div className={`${mobileActive} mobile-nav`}>
            <Link className='m-navbar-li' to='/about'>
              About
            </Link>
            <Link className='m-navbar-li' to='/work'>
              Work
            </Link>
            <Link className='m-navbar-li' to='/feed'>
              Feed
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
