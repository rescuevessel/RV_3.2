import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function WorkPage({ data }) { 
  let work = data.contentfulWorkPage

  return (
  <Layout>

      <div className='centered grid-2'>
        <div>
            <Img fluid={work.shermansShowcaseThumb.fluid} alt='' />
            <h1>{work.shermansShowcaseTitle}</h1>
        </div>
        <div>
            <Img fluid={work.dekalbMarketHallThumb.fluid} alt='' />
            <h1>{work.dekalbMarketHallTitle}</h1>
        </div>
        <div>
            <Img fluid={work.marcoThumb.fluid} alt='' />
            <h1>{work.marcoTitle}</h1>
        </div>
        <div>
            <Img fluid={work.ns8Thumb.fluid} alt='' />
            <h1>{work.ns8Title}</h1>
        </div>
        <Link to="/work/mountain-men">
            <Img fluid={work.mountainMenThumb.fluid} alt='' />
            <h1>{work.mountainMenTitle}</h1>
        </Link>
        <div>
            <Img fluid={work.aeThumb.fluid} alt='' />
            <h1>{work.aeTitle}</h1>
        </div>
      </div>

  </Layout>
)}


export const workquery = graphql`
query WorkPageQuery {
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
