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

      {/* <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.hero} title='temp' />
        </div>
      </div>

      <WorkTitleSection
        title={work.shermansShowcaseTitle}
        client={work.shermansShowcaseClient}
        desc={sherman.descriptionMulti.json}
      />

      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={sherman.titleCard02} />
        <VimeoAutoplay link={sherman.titleCard01} />
      </div>

      <div className='centered-work'>
        <VimeoAutoplay link={sherman.spot01} />
      </div>

      <div className='grid-3 centered-work'>
        <div className='vimeo-body-square'>
          <iframe
            src={`${sherman.stingSocial01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-square'>
          <iframe
            src={`${sherman.endPageSocial01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-square'>
          <iframe
            src={`${sherman.stingSocial02}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>

      <div className='centered-work'>
        <Img fluid={sherman.billboard.fluid} alt='' />
      </div>

      <div className='grid-2 centered-work type'>
        <Img fluid={sherman.subwayAd.fluid} alt='' />
        <div>{documentToReactComponents(sherman.descriptionMulti02.json)}</div>
      </div>

      <div className='centered-work'>
        <VimeoAutoplay link={sherman.endPage03} />
      </div>

      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={sherman.lowerThird01} />
        <VimeoAutoplay link={sherman.lowerThird02} />
      </div>

      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={sherman.spot02} title='temp' />
        </div>
      </div>

      <div className='centered-work'>
        <VimeoAutoplay link={sherman.endPage02} />
      </div> */}
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
