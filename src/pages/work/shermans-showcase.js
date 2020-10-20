import React from 'react'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function ShermansShowcase({ data }) {
  let sherman = data.contentfulShermansShowcase
  console.log(sherman)

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.hero} title='temp' />
        </div>
      </div>
      {/* Section 2 - Title / Description */}
      <div className='grid-2 centered-work'>
        <div className='work-title work-info'>
          <h1>{sherman.title}</h1>
          <div className='title-line'></div>
        </div>
        <div className='work-info'>
          {documentToReactComponents(sherman.descriptionMulti.json)}
        </div>
      </div>
      {/* Section 3 - TC 1 / TC 2 */}
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      {/* Section 4 - Spot 1 */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.spot01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      {/* Section 5 - Triple Social Assets  */}
      <div className='grid-3 centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.stingSocial01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPageSocial01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.stingSocial02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      {/* Section 6 - Full Billboard  */}
      <div className='centered-work'>
        <Img fluid={sherman.billboard.fluid} alt='' />
      </div>
      {/* Section 7 - Subway Ad / Description */}
      <div className='grid-half centered-work'>
        <Img fluid={sherman.subwayAd.fluid} alt='' />
        <div>{documentToReactComponents(sherman.descriptionMulti02.json)}</div>
      </div>
      {/* Section 8 - Looping EP 03 */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPage03}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      {/* Section 9 - Lowerthird 01 / Lowerthird 02 */}
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.lowerThird01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.lowerThird02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      {/* Section 10 - Full Embed Karaoke */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.spot02} title='temp' />
        </div>
      </div>
      {/* Section 11 - TC 03 / EP 02 */}
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard03}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPage02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPage02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
    </Layout>
  )
}

export const ss_query = graphql`
  query SS {
    contentfulShermansShowcase {
      title
      description01 {
        description01
      }
      description02 {
        description02
      }
      hero
      titleCard01
      titleCard02
      titleCard03
      stingSocial01
      stingSocial02
      spot01
      spot02
      lowerThird01
      lowerThird02
      endPage02
      endPage03
      endPageSocial01
      descriptionMulti {
        json
      }
      descriptionMulti02 {
        json
      }
      billboard {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      subwayAd {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
