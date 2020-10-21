import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import VimeoAutoplay from '../../components/vimeoAutoplay'
import WorkTitleSection from '../../components/workTitleSection'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function AE({ data }) {
  let ae = data.contentfulAe

  return (
    <Layout>
      <div className='centered-work'>
        <VimeoAutoplay link={ae.hero} />
      </div>
      <WorkTitleSection title={ae.title} desc={ae.description01.json} />
      <div className='centered-work'>
        <div>{documentToReactComponents(ae.description02.json)}</div>
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={ae.ep_grid.fluid} />
        <VimeoAutoplay link={ae.endPage01} />
      </div>
      <div className='grid-2 centered-work'>
        <Img fluid={ae.lineup_grid.fluid} />
        <Img fluid={ae.lineup01.fluid} />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={ae.lineup_02} />
      </div>
      <div className='centered-work'>
        <Img fluid={ae.snipe01.fluid} />
      </div>
      <div className='centered-work'>
        <div>{documentToReactComponents(ae.typeDesc.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={ae.typeSystem.fluid} />
      </div>
      <div className='centered-work'>
        <div>{documentToReactComponents(ae.designPrinciplesDesc.json)}</div>
      </div>
      <div className='centered-work'>
        <Img fluid={ae.handcrafted01.fluid} />
      </div>
      <div className='grid-half centered-work'>
        <Img fluid={ae.handcrafted02.fluid} />
        <div>{documentToReactComponents(ae.handcraftedDesc.json)}</div>
      </div>
      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={ae.handcrafted03} />
        <Img fluid={ae.handcrafted04.fluid} />
      </div>
      <div className='grid-half centered-work'>
        <div>{documentToReactComponents(ae.premiumDesc.json)}</div>
        <Img fluid={ae.premium01.fluid} />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={ae.premium02} />
      </div>
      <div className='grid-half centered-work'>
        <div>{documentToReactComponents(ae.intentionalDesc.json)}</div>
        <VimeoAutoplay link={ae.intentional01} />
      </div>
      <div className='centered-work'>
        <VimeoAutoplay link={ae.intentional02} />
      </div>
      <div className='grid-2 centered-work'>
        <VimeoAutoplay link={ae.intentional03} />
        <Img fluid={ae.intentional04.fluid} />
      </div>
    </Layout>
  )
}

export const ae_query = graphql`
  query AE {
    contentfulAe {
      hero
      title
      description01 {
        json
      }
      description02 {
        json
      }
      ep_grid {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      endPage01
      lineup_grid {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      lineup01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      lineup_02
      snipe01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      typeDesc {
        json
      }
      typeSystem {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      designPrinciplesDesc {
        json
      }
      handcrafted01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      handcrafted02 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      handcraftedDesc {
        json
      }
      handcrafted03
      handcrafted04 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      premium01 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      premiumDesc {
        json
      }
      premium02
      intentionalDesc {
        json
      }
      intentional01
      intentional02
      intentional03
      intentional04 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
