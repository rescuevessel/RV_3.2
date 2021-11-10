import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import WorkTitleSection from '../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited Reel')

export default function Reel({ data }) {
  let reel = data.contentfulReel2021

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={reel.vimeoEmbed} title='temp' />
        </div>
      </div>
    </Layout>
  )
}

export const reel_query = graphql`
  query reel {
    contentfulReel2021 {
      title
      client
      vimeoEmbed
      desc {
        json
      }
    }
  }
`
