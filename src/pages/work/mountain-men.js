
import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
//import SEO from "../components/seo"

export default function MountainMen({ data }) { 
  let mountain = data.contentfulMountainMen
  console.log(data)

  return (
    <Layout>
        <div className='vimeo-full'>
            <iframe src={mountain.hero} allowfullscreen title='temp' />
        </div> 
        <div className='grid-2 centered'>
            <h1>{mountain.title}</h1>
            <p>{mountain.description.description}</p>
        </div>
        <div className='centered'>
            <Img fluid={mountain.ansel01.fluid} alt='' />
        </div>
        <div className='grid-2 centered'>
            <Img fluid={mountain.ansel02.fluid} alt='' />
            <p>{mountain.mmDesc.mmDesc}</p>
        </div>
        <div className='centered'>
            <div className='vimeo-body-full'>
                <iframe src={mountain.mmEmbed01} allowfullscreen title='temp' />
            </div>
        </div>
        <div className='centered'>
            <div className='vimeo-body-full'>
                <iframe src={mountain.mmEmbed02} allowfullscreen title='temp' />
            </div>
        </div>
        <div className='grid-2 centered'>
            <div className='vimeo-body-full'>
                <iframe src={mountain.mmEmbed03} allowfullscreen allow="autoplay" title='temp' />
            </div>
            <div className='vimeo-body-full'>
                <iframe src={mountain.mmEmbed04} allowfullscreen title='temp' />
            </div>
        </div>
        <div className='centered'>
            <div className='vimeo-body-full'>
                <iframe src={mountain.mmEmbed05} allowfullscreen title='temp' />
            </div>
        </div>
    </Layout>
)}


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
