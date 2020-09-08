import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function WorkPage({ data }) { 
  let work = data.contentfulWorkPage

  return (
  <Layout>

      <div className='centered grid-2 work'>
        <Link to="/work/mountain-men"><div>
            <Img fluid={work.shermansShowcaseThumb.fluid} alt='' />
            <h2><a>{work.shermansShowcaseTitle}</a></h2>
        </div></Link>
        <Link to="/work/mountain-men"><div>
            <Img fluid={work.dekalbMarketHallThumb.fluid} alt='' />
            <h2><a>{work.dekalbMarketHallTitle}</a></h2>
        </div></Link>
        <Link to="/work/mountain-men"><div>
            <Img fluid={work.marcoThumb.fluid} alt='' />
            <h2><a>{work.marcoTitle}</a></h2>
        </div></Link>
        <Link to="/work/mountain-men"><div>
            <Img fluid={work.ns8Thumb.fluid} alt='' />
            <h2><a>{work.ns8Title}</a></h2>
        </div></Link>
        <Link to="/work/mountain-men">
            <Img fluid={work.mountainMenThumb.fluid} alt='' />
            <h2><a>{work.mountainMenTitle}</a></h2></Link>
        
        <div>
            <Img fluid={work.aeThumb.fluid} alt='' />
            <h2><a>{work.aeTitle}</a></h2>
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
