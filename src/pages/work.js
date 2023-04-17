import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import WorkThumb from '../components/workThumb'
import WorkThumbLottie from '../components/workThumbLottie'
import mixpanel from 'mixpanel-browser'
import upwardLogo from '../lottie/upwardHeroAnimation.json'
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
        <WorkThumb // Gem
          className='hero'
          thumb={work.gemThumb.fluid}
          rollover={work.gemRollover.fluid}
          title={work.gemType}
          client={work.gemTitle}
          link='/work/gem'
        />

        <WorkThumbLottie // Upward
          // className='hero'
          lottie={upwardLogo}
          // rollover={work.upwardRollover.fluid}
          title={work.upwardTitle}
          client={work.upwardClient}
          link='/work/upward'
        />
        <WorkThumb // Pop Culture Toolkit
          thumb={work.popCultureThumb.fluid}
          rollover={work.popCultureRollover.fluid}
          title={work.popCultureTitle}
          client={work.popCultureClient}
          link='/work/pop-culture-toolkit'
        />
        <WorkThumb // Dekalb Market Hall
          thumb={work.dekalbMarketHallThumb.fluid}
          rollover={work.dekalbMarketHallRollover.fluid}
          title={work.dekalbMarketHallTitle}
          client={work.dekalbMarketHallClient}
          link='/work/dekalb-market-hall'
        />

        <WorkThumb // Mixpanel Conversion
          // className='hero'
          thumb={work.conversionThumb.fluid}
          rollover={work.conversionRollover.fluid}
          title={work.conversionTitle}
          client={work.conversionClient}
          link='/work/conversion'
        />

        <WorkThumb // Broken Palate
          className='hero'
          thumb={work.bpThumb.fluid}
          rollover={work.bpRollover.fluid}
          title={work.bpClient}
          client={work.bpTitle}
          link='/work/broken-palate'
        />
        <WorkThumbLottie // Mixpanel Web Animations
          lottie={dataIntegration}
          title={work.mixpanelTitle}
          client={work.mixpanelClient}
          link='/work/mixpanel'
        />
        <WorkThumb // Shermans Showcase
          thumb={work.shermansShowcaseThumb.fluid}
          rollover={work.shermansShowcaseRollover.fluid}
          title={work.shermansShowcaseTitle}
          client={work.shermansShowcaseClient}
          link='/work/shermans-showcase'
        />
        <WorkThumb // The Movie Show
          thumb={work.themovieshowThumb.fluid}
          rollover={work.theMovieShowRollover.fluid}
          title={work.themovieshowTitle}
          client={work.theMovieShowClient}
          link='/work/the-movie-show'
        />

        <WorkThumb // A&E
          // className='hero'
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
      bpClient
      bpTitle
      bpRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      bpThumb {
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
      popCultureRollover {
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

      conversionTitle
      conversionClient
      conversionThumb {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversionRollover {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      gemTitle
      gemType
      gemThumb {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      gemRollover {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      upwardTitle
      upwardClient
      upwardThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      upwardRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
