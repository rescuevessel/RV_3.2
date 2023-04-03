import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
// import VimeoAutoplay from '../../components/vimeoAutoplay'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited Gem')

export default function Gem({ data }) {
  let gem = data.contentfulGem
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={gem.hero} title='temp' />
        </div>
      </div>

      <WorkTitleSection
        title={work.gemType}
        client={work.gemTitle}
        desc={gem.descriptionMulti.json}
      />

      <div className='centered-work'>
        <Img fluid={gem.gemFrame01.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-square'>
          <iframe
            src={`${gem.vimUrl01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-square'>
          <iframe
            src={`${gem.vimUrl02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='centered-work'>
        <Img fluid={gem.gemFrame02.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={gem.gemFrame03.fluid} alt='' />
        <Img fluid={gem.gemFrame04.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-square'>
          <iframe
            src={`${gem.vimUrl03}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-square'>
          <iframe
            src={`${gem.vimUrl04}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={gem.gemFrame05.fluid} alt='' />
        <Img fluid={gem.gemFrame06.fluid} alt='' />
      </div>

      <div className='grid-2 centered-work'>
        <Img fluid={gem.gemFrame07.fluid} alt='' />
        <Img fluid={gem.gemFrame08.fluid} alt='' />
      </div>
    </Layout>
  )
}

export const gem_query = graphql`
  query Gem {
    contentfulWorkPage {
      gemTitle
      gemType
    }
    contentfulGem {
      hero
      title
      descriptionMulti {
        json
      }
      gemFrame01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame03 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame04 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame05 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame06 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame07 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemFrame08 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      vimUrl01
      vimUrl02
      vimUrl03
      vimUrl04
    }
  }
`
