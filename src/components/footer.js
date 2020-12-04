import React from 'react'
import { Link } from 'gatsby'
import './footer.scss'
import logo from '../images/rv_icon_orange.png'
import Mailchimp from 'react-mailchimp-form'

const Footer = () => {
  return (
    <footer>
      <div className='centered'>
        <img
          className='footer-logo'
          src={logo}
          style={{ width: '70px' }}
          alt='Rescue Vessel Logo'
        />
      </div>
      <div className='footer-columns'>
        <div className='footer-column'>
          <div>
            <h2 className='type-ssno'>Let's work together</h2>
            <a
              href='mailto:hello@rescuevessel.com'
              className='type-pitch emailLink'
            >
              hello@rescuevessel.com
            </a>
          </div>
          <div className='address type-pitch'>
            <p>126 13th Street</p>
            <p>Suite 4L-7</p>
            <p>Brooklyn, NY 11215</p>
          </div>
          <div className='address type-pitch'>
            <p>Copyright @ 2020 Rescue Vessel</p>
          </div>
        </div>

        <div className='footer-column'>
          <div className='newsletterSignUpWrapper'>
            <h2 className='type-ssno'>Our quarterly newsletter</h2>
            <Mailchimp
              action='https://rescuevessel.us13.list-manage.com/subscribe/post?u=b971537573d38b8a0d8e4ad30&amp;id=d93eebd82f'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Your email',
                  type: 'email',
                  required: true,
                  className: 'input emailInput',
                },
              ]}
              messages={{
                sending: 'Sending...',
                success: 'Thank you for subscribing!',
                error: 'An unexpected internal error has occurred.',
                empty: 'You must write an e-mail.',
                duplicate: "You're already subscribed!",
                button: 'Subscribe',
              }}
              className='input emailInput'
            />
            {/* <input
              action='https://rescuevessel.us13.list-manage.com/subscribe/post?u=b971537573d38b8a0d8e4ad30&amp;id=d93eebd82f'
              className='input emailInput'
              type='text'
              placeholder='Your Email'
            />
            <button className='button emailSubmitBtn btn-1'>Submit</button> */}
          </div>
          <ul className='menu-list type-pitch'>
            <li>
              <Link className='navbar-item ' to='/work'>
                Work
              </Link>
            </li>
            <li>
              <Link to='/about' className='navbar-item'>
                About
              </Link>
            </li>
            <li>
              <Link className='navbar-item' to='/feed'>
                Feed
              </Link>
            </li>
            <li>
              <a
                className='navbar-item'
                href='https://www.instagram.com/rescuevessel/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className='navbar-item'
                href='https://vimeo.com/rescuevessel'
                target='_blank'
                rel='noopener noreferrer'
              >
                Vimeo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

//import moment from 'moment-timezone'

//<span className='type-pitch currentTime'>{moment().tz('America/New_York').format('hh:mm:ss A z')}</span>
//<span className='type-pitch copyright'>Copyright &copy; {new Date().getFullYear()} Rescue Vessel</span>
