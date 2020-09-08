import React from 'react'
import { Link } from 'gatsby'
//import moment from 'moment-timezone'
import './layout.scss'
import logo from '../images/rv_icon.png'
import './footer.scss'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-columns centered'>
          <div>
            <img src={logo} alt="Rescue Vessel Logo" />
          </div>
          <div className='footer-wrapper'>
            <ul className="menu-list">
              <li>
                <Link to="/about" className="navbar-item type-pitch">
                  About
                </Link>
              </li>
              <li>
                <Link className="navbar-item type-pitch" to="/work">
                  Work
                </Link>
              </li>
              <li>
                <Link className="navbar-item type-pitch" to="/feed">
                  Feed
                </Link>
              </li>
              <li>
                <a className="navbar-item type-pitch" href="https://www.instagram.com/rescuevessel/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="navbar-item type-pitch"
                  href="https://vimeo.com/rescuevessel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a className="navbar-item type-pitch" href="https://www.google.com/maps/place/Brooklyn,+NY/@40.6452228,-74.0150371,12z/data=!3m1!4b1!4m5!3m4!1s0x89c24416947c2109:0x82765c7404007886!8m2!3d40.6781784!4d-73.9441579">
                  Brooklyn, NY
                </a>
              </li>
              <li>
                <a className="navbar-item type-pitch" href="https://earth.google.com/web/@0,0,-24018.82718741a,36750128.22569847d,35y,0h,0t,0r/data=KAE">
                  Planet Earth
                </a>
              </li>
          </ul>
          </div>
          <div>
            <h2 className='type-ssno'>Let's work together</h2>
            <a href="mailto:hello@rescuevessel.com" className='type-pitch emailLink'>hello@rescuevessel.com</a>
            <div className='newsletterSignUpWrapper'>
              <h2 className='type-ssno'>Our quarterly newsletter</h2>
              <div className='isFlex'>
              <input className='input emailInput' type="text" placeholder="Your Email" /> <button className='button emailSubmitBtn'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

/*
  <span className='type-pitch currentTime'>{moment().tz('America/New_York').format('hh:mm:ss A z')}</span>
  
  <span className='type-pitch copyright'>Copyright &copy; {new Date().getFullYear()} Rescue Vessel</span>
*/