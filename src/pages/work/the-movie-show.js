import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import WorkTitleSection from '../../components/workTitleSection'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function TheMovieShow({ data }) {
  let tms = data.contentfulTheMovieShow
  console.log(tms)

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <div className='centered-work'>
        <VimeoAutoplay link={tms.hero} />
      </div>
      {/* Section 2 - Title / Description */}
      <WorkTitleSection title={tms.title} desc={tms.descriptionMulti.json} />

      {/* Section 4 - Spot 1 */}
      <div className='centered-work'>
        <VimeoAutoplay link={tms.hotTakes} />
      </div>
      {/* Section 3 - TC 1 / TC 2 */}
      <div className='grid-2 centered-work type'>
        <VimeoAutoplay link={tms.button01} />
        <div>{documentToReactComponents(tms.descriptionMulti02.json)}</div>
      </div>

      <div className='centered-work'>
        <VimeoAutoplay link={tms.butteredPopcorn} />
      </div>

      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={tms.fullTrailer} title='temp' />
        </div>
      </div>

      <div className='grid-2 centered-work type'>
        <Img fluid={tms.keyArt.fluid} alt='' />
        <div>{documentToReactComponents(tms.logoDevelopment.json)}</div>
      </div>

      <div className='centered-work'>
        <Img fluid={tms.logoExplore.fluid} alt='' />
      </div>

      <div className='centered-work'>
        <Img fluid={tms.finalLogo.fluid} alt='' />
      </div>
    </Layout>
  )
}

export const tms_query = graphql`
  query TMS {
    contentfulTheMovieShow {
      hero
      title
      descriptionMulti {
        json
      }
      button01
      hotTakes
      descriptionMulti02 {
        json
      }
      butteredPopcorn
      fullTrailer
      titleCard3D
      filmReel
      explodingPopcorn
      bumperTitlecard
      lowerThirdtease
      transitionTease
      keyArt {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      logoDevelopment {
        json
      }
      logoExplore {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      finalLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
