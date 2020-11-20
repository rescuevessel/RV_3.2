import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const WorkPage = ({ data }) => {
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='grid-work centered'>
        <Link className='hero' to='/work/shermans-showcase'>
          <div>
            <Img fluid={work.shermansShowcaseThumb.fluid} alt='' />
            <h2>{work.shermansShowcaseTitle}</h2>
          </div>
        </Link>

        <Link to='/work/dekalb-market-hall'>
          <div>
            <Img fluid={work.dekalbMarketHallThumb.fluid} alt='' />
            <h2>{work.dekalbMarketHallTitle}</h2>
          </div>
        </Link>

        <Link to='/work/marco'>
          <div>
            <Img fluid={work.marcoThumb.fluid} alt='' />
            <h2>{work.marcoTitle}</h2>
          </div>
        </Link>

        <Link to='/work/mountain-men'>
          <Img fluid={work.mountainMenThumb.fluid} alt='' />
          <h2>{work.mountainMenTitle}</h2>
        </Link>

        <Link to='/work/ae'>
          <Img fluid={work.aeThumb.fluid} alt='' />
          <h2>{work.aeTitle}</h2>
        </Link>
      </div>
    </Layout>
  )
}
export default WorkPage

export const WorkQuery = graphql`
  query WorkQuery {
    contentfulWorkPage {
      shermansShowcaseTitle
      shermansShowcaseThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      dekalbMarketHallTitle
      dekalbMarketHallThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      marcoTitle
      marcoThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      ns8Title
      ns8Thumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      aeTitle
      aeThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      mountainMenTitle
      mountainMenThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
