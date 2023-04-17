import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import WorkTitleSection from '../../components/workTitleSection'
import mixpanel from 'mixpanel-browser'

mixpanel.track('Visited Mountain Men')

export default function MountainMen({ data }) {
  let mountain = data.contentfulMountainMen

  return (
    <Layout>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={mountain.hero} title='temp' />
        </div>
      </div>
      <WorkTitleSection
        title={mountain.title}
        desc={mountain.description1.json}
      />
      <div className='centered-work'>
        <Img fluid={mountain.ansel01.fluid} alt='' />
      </div>
      <div className='grid-2 centered-work type'>
        <Img fluid={mountain.ansel02.fluid} alt='' />
        <p>{mountain.mmDesc.mmDesc}</p>
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={mountain.mmEmbed01} />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={mountain.mmEmbed02} />
      </div>
      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={mountain.mmEmbed03} />
        <VimeoAutoplay link={mountain.mmEmbed04} />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={mountain.mmEmbed05} />
      </div>
    </Layout>
  )
}

// export const
//mm_query =
//graphql`
//   query MM {
//     contentfulMountainMen {
//       title
//       description1 {
//         json
//       }
//       mmDesc {
//         mmDesc
//       }
//       hero
//       mmEmbed01
//       mmEmbed02
//       mmEmbed03
//       mmEmbed04
//       mmEmbed05
//       ansel01 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       ansel02 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `
