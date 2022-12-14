import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'
import LottieRV from '../../components/lottieRV'
import UpwardHero from '../../lottie/upwardHeroAnimation.json'
import bg from '../../images/upwardHeroBG.svg'

mixpanel.track('Visited Upward')

export default function Upward({ data }) {
  let upward = data.contentfulUpward
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='centered-work'>
        <LottieRV bg={bg} animationData={UpwardHero} />
      </div>
      <WorkTitleSection
        title={work.upwardTitle}
        client={work.upwardClient}
        desc={upward.description.json}
      />
      <div className='centered-work'>
        <VimeoAutoplay link={upward.logoAnimation} />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.icon.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.phoneMockup.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.marketingMockupSubway.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={upward.loadingAnimation} />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.parentScreens.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.iconSet.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.tagline.fluid} alt='' />
      </div>
      <div className='centered type full'>
        <div>{documentToReactComponents(upward.description02.json)}</div>
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.illustrationPurple.fluid} alt='' />
        <Img fluid={upward.illustrationGreen.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={upward.refreshAnimation} />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.illustrationRed.fluid} alt='' />
        <Img fluid={upward.illustrationBlue.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.colorFamilies.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.colorPalette.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.marketingMockupBusStop.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.typographyLeft.fluid} alt='' />
        <Img fluid={upward.typographyRight.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.marketingMockupStreet.fluid} alt='' />
      </div>
      {/* <div className='grid-2 centered-work'>
        <Img fluid={upward.monogram.fluid} alt='' />
        <Img fluid={upward.turkeyHead.fluid} alt='' />
      </div>
      
     
      <div className='centered-work'>
        <VimeoAutoplay link={upward.videoBumpers} />
      </div>
      <div className='centered type full'>
        <div>{documentToReactComponents(upward.description02.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={upward.deconstructedwordmark.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.rollerSkater.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.burgerMan.fluid} alt='' />
        <Img fluid={upward.cubanoMan.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.brokenEgg.fluid} alt='' />
        <Img fluid={upward.onionTears.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.spilledWine.fluid} alt='' />
      </div>
      <div className='centered-work grid-thirds type full'>
        <div>{documentToReactComponents(upward.description03.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={upward.cocktailGals.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.artichokeLady.fluid} alt='' />
        <Img fluid={upward.playlistLady.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.runningMan.fluid} alt='' />
        <Img fluid={upward.cakeEater.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.foodCollage.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.pizzaChiller.fluid} alt='' />
        <Img fluid={upward.burgerSofa.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={upward.beatnicks.fluid} alt='' />
        <Img fluid={upward.shoppingLady.fluid} alt='' />
      </div> */}
    </Layout>
  )
}

export const upward_query = graphql`
  query Upward {
    contentfulWorkPage {
      upwardClient
      upwardTitle
    }
    contentfulUpward {
      title
      description {
        json
      }
      description02 {
        json
      }
      colorFamilies {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      colorPalette {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      icon {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      iconSet {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      illustrationBlue {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      illustrationGreen {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      illustrationPurple {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      illustrationRed {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      marketingMockupBusStop {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      marketingMockupStreet {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      marketingMockupSubway {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      parentScreens {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      phoneMockup {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      typographyLeft {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      typographyRight {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tagline {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      loadingAnimation
      logoAnimation
      refreshAnimation
      title
    }
  }
`
