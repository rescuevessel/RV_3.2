import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited DMH')

export default function DekalbMarketHall({ data }) {
  let dmh = data.contentfulDekalbMarketHall
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='centered-work'>
        <Img fluid={dmh.hero.fluid} alt='' />
      </div>
      <WorkTitleSection
        title={work.dekalbMarketHallTitle}
        client={work.dekalbMarketHallClient}
        desc={dmh.description.json}
      />
      <div className='centered-work'>
        <Img fluid={dmh.neonSign01.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.pattern.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={dmh.pizzaMan.fluid} alt='' />
        <Img fluid={dmh.deathBeforeDecaf.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.tees.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work type'>
        <Img fluid={dmh.paperBag01.fluid} alt='' />
        <div>{documentToReactComponents(dmh.description02.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.neonSign03.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.stageLogo.fluid} alt='' />
      </div>
      <div className='grid-9 centered-work'>
        <Img fluid={dmh.social01.fluid} alt='' />
        <Img fluid={dmh.social02.fluid} alt='' />
        <Img fluid={dmh.social03.fluid} alt='' />
        <Img fluid={dmh.social04.fluid} alt='' />
        <Img fluid={dmh.social05.fluid} alt='' />
        <Img fluid={dmh.social06.fluid} alt='' />
        <Img fluid={dmh.social07.fluid} alt='' />
        <Img fluid={dmh.social08.fluid} alt='' />
        <Img fluid={dmh.social09.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.paperBag02.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={dmh.toteBag01.fluid} alt='' />
        <Img fluid={dmh.ledSign01.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={dmh.wheatPaste01.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={dmh.phockingSoup.fluid} alt='' />
        <Img fluid={dmh.neonSign02.fluid} alt='' />
      </div>
      <div className='centered credits'>
        <div>{documentToReactComponents(dmh.credits.json)}</div>
      </div>
    </Layout>
  )
}

export const dmh_query = graphql`
  query DMH {
    contentfulWorkPage {
      dekalbMarketHallClient
      dekalbMarketHallTitle
    }
    contentfulDekalbMarketHall {
      hero {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      description {
        json
      }
      credits {
        json
      }
      neonSign01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      pattern {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      pizzaMan {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      deathBeforeDecaf {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tees {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      paperBag01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description02 {
        json
      }
      stageLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social03 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social04 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social05 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social06 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social07 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social08 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      social09 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      paperBag02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      toteBag01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      ledSign01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      wheatPaste01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      phockingSoup {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      neonSign02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      neonSign03 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
