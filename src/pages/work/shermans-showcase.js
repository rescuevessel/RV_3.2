import React from 'react'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

export default function ShermansShowcase({ data }) {
  let sherman = data.contentfulShermansShowcase
  console.log(sherman)

  return (
    <Layout>
      <div className='centered'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.hero} title='temp' />
        </div>
      </div>
      <div className='grid-2 centered'>
        <h1>{sherman.title}</h1>
        <p>{sherman.description01.description01}</p>
      </div>
      <div className='grid-2 centered'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.spot01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='grid-2 centered'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPage02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='centered'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.spot02} title='temp' />
        </div>
      </div>
      <div className='grid-2 centered'>
        <Img fluid={sherman.subwayAd.fluid} alt='' />
        <p>{sherman.description02.description02}</p>
      </div>
      <div className='centered'>
        <Img fluid={sherman.billboard.fluid} alt='' />
      </div>
      <div className='grid-2 centered'>
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
      <div className='grid-2 centered'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.titleCard03}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${sherman.endPageSocial01}?autoplay=1&loop=1&background=1`}
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
