import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited Conversion')

export default function Conversion({ data }) {
  let conv = data.contentfulConversion
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='centered-work full'>
        <div className='vimeo-body-full'>
          <iframe src={conv.hero} title='temp' />
        </div>
      </div>
      <WorkTitleSection
        client={work.conversionClient}
        title={work.conversionTitle}
        desc={conv.description.json}
      />
      <div className='centered-work'>
        <Img fluid={conv.conversion01.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work type'>
        <Img fluid={conv.conversion02.fluid} alt='' />
        <Img fluid={conv.conversion03.fluid} alt='' />
      </div>
      <div className='centered-work'>
        <Img fluid={conv.conversion04.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work type'>
        <Img fluid={conv.conversion05.fluid} alt='' />
        <Img fluid={conv.conversion06.fluid} alt='' />
      </div>
    </Layout>
  )
}

export const conv_query = graphql`
  query CONV {
    contentfulWorkPage {
      conversionTitle
      conversionClient
    }
    contentfulConversion {
      title
      description {
        json
      }
      hero
      conversion01 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversion02 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversion03 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversion04 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversion05 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversion06 {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
