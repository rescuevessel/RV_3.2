import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import WorkThumb from '../components/workThumb'

const WorkPage = ({ data }) => {
  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='grid-work centered'>
        <WorkThumb // Shermans Showcase
          className='hero'
          thumb={work.shermansShowcaseThumb.fluid}
          rollover={work.shermansShowcaseRollover.fluid}
          title={work.shermansShowcaseTitle}
          link='/work/shermans-showcase'
        />

        <WorkThumb // Dekalb Market Hall
          thumb={work.dekalbMarketHallThumb.fluid}
          rollover={work.dekalbMarketHallRollover.fluid}
          title={work.dekalbMarketHallTitle}
          link='/work/dekalb-market-hall'
        />

        <WorkThumb // Marco
          thumb={work.marcoThumb.fluid}
          rollover={work.marcoRollover.fluid}
          title={work.marcoTitle}
          link='/work/marco'
        />
        <WorkThumb // Shermans Showcase
          className='hero'
          thumb={work.themovieshowThumb.fluid}
          rollover={work.theMovieShowRollover.fluid}
          title={work.themovieshowTitle}
          link='/work/the-movie-show'
        />

        <WorkThumb // Mountain Men
          thumb={work.mountainMenThumb.fluid}
          rollover={work.mountainMenRollover.fluid}
          title={work.mountainMenTitle}
          link='/work/mountain-men'
        />

        <WorkThumb // A&E
          thumb={work.aeThumb.fluid}
          rollover={work.aeRollover.fluid}
          title={work.aeTitle}
          link='/work/ae'
        />

        <div className='work-blurb'>
          <h1>Want to see more work randomly?</h1>
          <Link to='/feed'>
            <button className='btn-1'>Yes, absolutely</button>
          </Link>
        </div>
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
      shermansShowcaseRollover {
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
      dekalbMarketHallRollover {
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
      marcoRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      themovieshowTitle
      theMovieShowRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      themovieshowThumb {
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
      aeRollover {
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
      mountainMenRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
