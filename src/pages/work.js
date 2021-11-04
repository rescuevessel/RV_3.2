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
        <WorkThumb // Shermans Showcase
          className='hero'
          thumb={work.conversionThumb.fluid}
          rollover={work.conversionRollover.fluid}
          title={work.conversionTitle}
          client={work.conversionClient}
          link='/work/conversion'
        />
        <WorkThumb // Shermans Showcase
          thumb={work.themovieshowThumb.fluid}
          rollover={work.theMovieShowRollover.fluid}
          title={work.themovieshowTitle}
          client={work.theMovieShowClient}
          link='/work/the-movie-show'
        />
        <WorkThumbLottie // Mixpanel
          lottie={dataIntegration}
          title={work.mixpanelTitle}
          client={work.mixpanelClient}
          link='/work/mixpanel'
        />
        {/* <WorkThumb // Marco
          className='hero'
          thumb={work.marcoThumb.fluid}
          rollover={work.marcoRollover.fluid}
          title={work.marcoTitle}
          client={work.marcoClient}
          link='/work/marco'
        /> */}

        <WorkThumb // Shermans Showcase
          className='hero'
          thumb={work.popCultureThumb.fluid}
          rollover={work.popCultureThumb.fluid}
          title={work.popCultureTitle}
          client={work.popCultureClient}
          link='/work/pop-culture-toolkit'
        />

        <WorkThumb // Shermans Showcase
          thumb={work.shermansShowcaseThumb.fluid}
          rollover={work.shermansShowcaseRollover.fluid}
          title={work.shermansShowcaseTitle}
          client={work.shermansShowcaseClient}
          link='/work/shermans-showcase'
        />

        <WorkThumb // Dekalb Market Hall
          thumb={work.dekalbMarketHallThumb.fluid}
          rollover={work.dekalbMarketHallRollover.fluid}
          title={work.dekalbMarketHallTitle}
          client={work.dekalbMarketHallClient}
          link='/work/dekalb-market-hall'
        />

        {/* <WorkThumb // Mountain Men
          thumb={work.mountainMenThumb.fluid}
          rollover={work.mountainMenRollover.fluid}
          title={work.mountainMenTitle}
          client={work.mountainMenClient}
          link='/work/mountain-men'
        /> */}

        <WorkThumb // A&E
          className='hero'
          thumb={work.aeThumb.fluid}
          rollover={work.aeRollover.fluid}
          title={work.aeTitle}
          client={work.aeClient}
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
      popCultureClient
      popCultureTitle
      popCultureThumb {
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
      theMovieShowClient
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
      conversionTitle
      conversionClient
      conversionThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      conversionRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
