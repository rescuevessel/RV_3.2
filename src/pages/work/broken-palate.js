import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited BP')

export default function BrokenPalate({ data }) {
  let bp = data.contentfulBrokenPalate
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='centered-work'>
        <Img fluid={bp.hero.fluid} alt='' />
      </div>
      <WorkTitleSection
        title={work.bpClient}
        client={work.bpTitle}
        desc={bp.description.json}
      />
      <div className='grid-2 centered-work'>
        <Img fluid={bp.monogram.fluid} alt='' />
        <Img fluid={bp.turkeyHead.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={bp.loungeMan.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.spilledCoffee.fluid} alt='' />
        <Img fluid={bp.spilledCoffee.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={bp.videoBumpers} />
      </div>
      <div className='centered type full'>
        <div>{documentToReactComponents(bp.description02.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={bp.deconstructedwordmark.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={bp.rollerSkater.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.burgerMan.fluid} alt='' />
        <Img fluid={bp.cubanoMan.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.brokenEgg.fluid} alt='' />
        <Img fluid={bp.onionTears.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={bp.spilledWine.fluid} alt='' />
      </div>
      <div className='centered-work grid-thirds type full'>
        <div>{documentToReactComponents(bp.description03.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={bp.cocktailGals.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.artichokeLady.fluid} alt='' />
        <Img fluid={bp.playlistLady.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.runningMan.fluid} alt='' />
        <Img fluid={bp.cakeEater.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={bp.foodCollage.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.pizzaChiller.fluid} alt='' />
        <Img fluid={bp.burgerSofa.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={bp.beatnicks.fluid} alt='' />
        <Img fluid={bp.shoppingLady.fluid} alt='' />
      </div>
    </Layout>
  )
}

export const bp_query = graphql`
  query BP {
    contentfulWorkPage {
      bpClient
      bpTitle
    }
    contentfulBrokenPalate {
      hero {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      description {
        json
      }
      description02 {
        json
      }
      description03 {
        json
      }
      monogram {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      turkeyHead {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      loungeMan {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      deconstructedwordmark {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      rollerSkater {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      pizzaChiller {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      burgerMan {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      burgerSofa {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      artichokeLady {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      beatnicks {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      brokenEgg {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      cakeEater {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      cocktailGals {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      cubanoMan {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      foodCollage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      onionTears {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      playlistLady {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      runningMan {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      shoppingLady {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      spilledCoffee {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      spilledWine {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      videoBumpers
    }
  }
`
