import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import './footer.scss'
import logo from '../images/rv_icon_orange.png'
import Mailchimp from 'react-mailchimp-form'
import mixpanel from 'mixpanel-browser'

function Footer() {
  useEffect(() => {
    mixpanel.track_links('.emailLink', 'Clicked Footer Email', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.emailInput button', 'Clicked Footer Subscribe', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.navbar-item', 'Clicked Footer Nav Item', {
      referrer: document.referrer,
    })
  }, [])
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
          <div className='type-pitch copyright'>
            <p>Copyright @ {new Date().getFullYear()} Rescue Vessel</p>
          </div>
        </div>

        <div className='footer-column'>
          <div className='newsletterSignUpWrapper'>
            <h2 className='type-ssno'>Our quarterly newsletter</h2>

            <Mailchimp
              className='input'
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
            />
          </div>
          <ul className='menu-list type-pitch'>
            <li>
              <Link className='navbar-item ' to='/work'>
                Work
              </Link>
            </li>
            <li>
              <Link className='navbar-item' to='/about'>
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
          <div className='type-pitch mobile-copyright'>
            <p>Copyright @ 2021 Rescue Vessel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

/*


    





     <div id="mc_embed_signup">
     <form action="https://rescuevessel.us13.list-manage.com/subscribe/post?u=b971537573d38b8a0d8e4ad30&amp;id=d93eebd82f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
         <div id="mc_embed_signup_scroll">
       
       <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
         
         <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b971537573d38b8a0d8e4ad30_d93eebd82f" tabindex="-1" value=""></div>
         <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
         </div>
     </form>
     </div>
     
     <!--End mc_embed_signup-->



 */
