import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import WorkThumb from '../components/workThumb'
import WorkThumbLottie from '../components/workThumbLottie'
import mixpanel from 'mixpanel-browser'

import dataIntegration from '../lottie/segmentationWide.json'

mixpanel.track('Made it to Work page')

const WorkPage = ({ data }) => {
  useEffect(() => {
    mixpanel.track_links('.feed-button', 'Clicked Random button', {
      referrer: document.referrer,
    })
  }, [])

  let work = data.contentfulWorkPage

  return (
    <Layout>
      <div className='grid-work centered'>
        <WorkThumbLottie // Mixpanel
          className='hero'
          lottie={dataIntegration}
          thumb={work.mixpanelThumb.fluid}
          title={work.mixpanelTitle}
          link='/work/mixpanel'
        />
        <WorkThumb // Shermans Showcase
          className='hero'
          thumb={work.shermansShowcaseThumb.fluid}
          rollover={work.shermansShowcaseRollover.fluid}
          title={work.shermansShowcaseTitle}
          link='/work/shermans-showcase'
        />
        <WorkThumb // Marco
          thumb={work.marcoThumb.fluid}
          rollover={work.marcoRollover.fluid}
          title={work.marcoTitle}
          link='/work/marco'
        />
        <WorkThumb // Dekalb Market Hall
          thumb={work.dekalbMarketHallThumb.fluid}
          rollover={work.dekalbMarketHallRollover.fluid}
          title={work.dekalbMarketHallTitle}
          link='/work/dekalb-market-hall'
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
          <Link className='feed-button' to='/feed'>
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
      mixpanelTitle
      mixpanelThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
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
