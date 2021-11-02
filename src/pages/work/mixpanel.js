import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import LottieRV from '../../components/lottieRV'
import WorkTitleSection from '../../components/workTitleSection'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import mixpanel from 'mixpanel-browser'
import VimeoAutoplay from '../../components/vimeoAutoplay'

import ScalableLottie from '../../lottie/scalable.json'
import securityWide from '../../lottie/securityWide.json'
import teamDashboards from '../../lottie/teamDashboards.json'
import interactiveReports from '../../lottie/interactiveReports.json'
import dataManagement from '../../lottie/dataManagementWhite.json'
import dataIntegration from '../../lottie/dataIntegrationWhite.json'
import segmentationWide from '../../lottie/segmentationWide.json'
import bg from '../../images/segmentationFrame.svg'

mixpanel.track('Visited Mixpanel')

export default function Mixpanel({ data }) {
  let mxp = data.contentfulMixpanel

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <div className='centered-work'>
        <LottieRV bg={bg} animationData={segmentationWide} />
      </div>
      {/* Section 2 - Title / Description */}
      <WorkTitleSection title={mxp.title} desc={mxp.description.json} />
      {/* Section 3 - Sales Video */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={mxp.salesVideo} title='temp' />
        </div>
      </div>
      {/* Section 4 - Build better products */}
      <div className='centered-work grid-thirds type'>
        <div>{documentToReactComponents(mxp.videoDesc.json)}</div>
      </div>
      {/* Section 5 - Site context */}
      <div className='centered-work'>
        <VimeoAutoplay link={mxp.siteContextVimeo} />
      </div>
      {/* Section 6 - Animating with code */}
      <div className='grid-2 centered-work type'>
        <LottieRV animationData={ScalableLottie} />
        <div>{documentToReactComponents(mxp.codeDesc.json)}</div>
      </div>
      {/* Section 7 - Code animation dump */}

      <div className='grid-2 centered-work'>
        <LottieRV animationData={dataManagement} />
        <LottieRV animationData={dataIntegration} />
      </div>
      <div className='centered-work'>
        <LottieRV animationData={securityWide} />
      </div>

      <div className='grid-2 centered-work'>
        <LottieRV animationData={interactiveReports} />
        <LottieRV animationData={teamDashboards} />
      </div>
    </Layout>
  )
}

export const mxp_query = graphql`
  query MXP {
    contentfulMixpanel {
      title
      hero {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      salesVideo
      siteContextVimeo
      description {
        json
      }
      codeDesc {
        json
      }
      btsDesc {
        json
      }
      videoDesc {
        json
      }
    }
  }
`
