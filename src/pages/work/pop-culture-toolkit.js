import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

mixpanel.track('Visited Pop Culture Toolkit')

export default function PopCultureToolkit({ data }) {
  let pc = data.contentfulPopCultureToolkit
  let work = data.contentfulWorkPage

  return (
    <Layout>
      {/* Section 1 - Hero */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={pc.heroVimeo} title='temp' />
        </div>
      </div>
      {/* Section 2 - Title / Description */}
      <WorkTitleSection
        title={work.popCultureTitle}
        client={work.popCultureClient}
        desc={pc.desc.json}
      />

      {/* Section 3 - Double Vimeos */}
      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={pc.vimeoAuto01} />
        <VimeoAutoplay link={pc.vimeoAuto02} />
      </div>
      {/* Section 4 - Full Width Image */}
      <div className='centered-work'>
        <Img fluid={pc.bold.fluid} alt='' />
      </div>
      {/* Section 4 - Double Vimeos */}
      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={pc.vimeoAuto03} />
        <VimeoAutoplay link={pc.vimeoAuto04} />
      </div>
      <div className='centered-work grid-thirds type full'>
        <div>{documentToReactComponents(pc.desc02.json)}</div>
      </div>
      {/* Section 10  Full Embed Tuskegee */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={pc.vimeoEmbed01} title='temp' />
        </div>
      </div>

      {/* Section 10  Full Embed More to History */}
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={pc.vimeoEmbed02} title='temp' />
        </div>
      </div>
    </Layout>
  )
}

export const PC_query = graphql`
  query PC {
    contentfulWorkPage {
      popCultureTitle
      popCultureClient
    }
    contentfulPopCultureToolkit {
      heroVimeo
      vimeoAuto01
      vimeoAuto02
      vimeoAuto03
      vimeoAuto04
      vimeoEmbed01
      vimeoEmbed02
      desc {
        json
      }
      desc02 {
        json
      }
      bold {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
