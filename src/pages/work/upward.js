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
import LoadingMockup from '../../lottie/upwardLoadingMockup.json'
import RefreshMockup from '../../lottie/upwardRefreshMockup.json'
import bg from '../../images/upwardHeroBG.svg'
import Parent from '../../images/Parent_Screens.svg'
import Families from '../../images/Color_Families.svg'
import Palette from '../../images/Color_Palette.svg'
import IconSet from '../../images/Icon_Set.svg'
import Icon from '../../images/Icon.svg'
import Illustration01 from '../../images/Illustration_01.svg'
import Illustration02 from '../../images/Illustration_02.svg'
import Illustration03 from '../../images/Illustration_03.svg'
import Illustration04 from '../../images/Illustration_04.svg'
import Tagline from '../../images/Tagline_01.svg'

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
        <img src={Icon} alt='svg of Upward icon' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.phoneMockup.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={upward.marketingMockupSubway.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <LottieRV bg={bg} animationData={LoadingMockup} autoplay />
      </div>
      <div className='centered-work'>
        <img src={Parent} alt='svg of Upward parents screens' />
      </div>
      <div className='centered-work'>
        <img src={IconSet} alt='svg of Upward color palette' />
      </div>
      <div className='centered-work'>
        <img src={Tagline} alt='svg of Upward tagline mockup' />
      </div>
      <div className='centered type full'>
        <div>{documentToReactComponents(upward.description02.json)}</div>
      </div>
      <div className='grid-2 centered-work'>
        <img src={Illustration01} alt='svg of Upward illustration in purple' />
        <img src={Illustration02} alt='svg of Upward illustration in greeb' />
      </div>
      <div className='centered-work'>
        <LottieRV bg={bg} animationData={RefreshMockup} autoplay />
      </div>
      <div className='grid-2 centered-work'>
        <img src={Illustration03} alt='svg of Upward illustration in red' />
        <img src={Illustration04} alt='svg of Upward illustration in blue' />
      </div>
      <div className='centered-work'>
        <img src={Families} alt='svg of Upward color families' />
      </div>
      <div className='centered-work'>
        <img src={Palette} alt='svg of Upward color palette' />
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
      logoAnimation
      title
    }
  }
`
