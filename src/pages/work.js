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
  console.log(work.mixpanelThumb.fluid)
  console.log(work.shermansShowcaseRollover.fluid)

  return (
    <Layout>
      <div className='grid-work centered'>
        <WorkThumbLottie // Mixpanel
          className='hero'
          lottie={dataIntegration}
          title={work.mixpanelClient}
          link='/work/mixpanel'
        />

        <WorkThumb // Shermans Showcase
          thumb={work.shermansShowcaseThumb.fluid}
          rollover={work.shermansShowcaseRollover.fluid}
          title={work.shermansShowcaseTitle}
          link='/work/shermans-showcase'
        />

        <WorkThumb // Dekalb Market Hall
          thumb={work.dekalbMarketHallThumb.fluid}
          rollover={work.dekalbMarketHallRollover.fluid}
          title={work.dekalbMarketHallClient}
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
          title={work.aeClient}
          link='/work/ae'
        />
        <WorkThumb // Marco
          className='hero'
          thumb={work.marcoThumb.fluid}
          rollover={work.marcoRollover.fluid}
          title={work.marcoClient}
          link='/work/marco'
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
      mixpanelClient
      mixpanelThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      shermansShowcaseTitle
      shermansShowcaseClient
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
      dekalbMarketHallClient
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
      marcoClient
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
      aeClient
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
      mountainMenClient
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
