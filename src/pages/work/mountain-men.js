import React from 'react'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

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
        <h1>{mountain.title}</h1>
        <p>{mountain.description.description}</p>
      </div>
      <div className='centered-work'>
        <Img fluid={mountain.ansel01.fluid} alt='' />
      </div>
      <div className='grid-half centered-work'>
        <Img fluid={mountain.ansel02.fluid} alt='' />
        <p>{mountain.mmDesc.mmDesc}</p>
      </div>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${mountain.mmEmbed01}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${mountain.mmEmbed02}?autoplay=1&loop=1&background=1`}
            allowfullscreen
            title='temp'
          />
        </div>
      </div>
      <div className='grid-2 centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${mountain.mmEmbed03}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
        <div className='vimeo-body-full'>
          <iframe
            src={`${mountain.mmEmbed04}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
      <div className='centered-work'>
        <div className='vimeo-body-full'>
          <iframe
            src={`${mountain.mmEmbed05}?autoplay=1&loop=1&background=1`}
            title='temp'
          />
        </div>
      </div>
    </Layout>
  )
}

export const mm_query = graphql`
  query MM {
    contentfulMountainMen {
      title
      description {
        description
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
