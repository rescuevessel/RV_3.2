
import React from "react"
//import { Link } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
//import SEO from "../components/seo"

export default function MountainMen({ data }) { 
  let mountain = data.contentfulMountainMen
  console.log(data)

  return (
  <Layout>
    <div className='home-hero'>
        <iframe src={mountain.hero} title='temp' />
    </div> 
    <div className='centered'>
        <h1>{mountain.title}</h1>
        <p>{mountain.description.description}</p>
    </div>

      


  </Layout>
)}


export const mm_query = graphql`
query MM {
    contentfulMountainMen {
        title
        hero
        description {
          description
        }
    }
}
`
