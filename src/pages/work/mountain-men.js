import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function MountainMen({ data }) {
  let mountain = data.contentfulMountainMen

  return (
    <Layout>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe src={mountain.hero} title='temp' />
        </div>
      </div>
      <div className='grid-2 centered-work'>
        <div className='work-title work-info'>
          <h1>{mountain.title}</h1>
          <div className='title-line'></div>
        </div>
        <div className='work-info'>
          {documentToReactComponents(mountain.description1.json)}
        </div>
      </div>
      <div className='centered-work'>
        <Img fluid={mountain.ansel01.fluid} alt='' />
      </div>
      <div className='grid-half centered-work'>
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

export const mm_query = graphql`
  query MM {
    contentfulMountainMen {
      title
      description1 {
        json
      }
      mmDesc {
        mmDesc
      }
      hero
      mmEmbed01
      mmEmbed02
      mmEmbed03
      mmEmbed04
      mmEmbed05
      ansel01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      ansel02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
