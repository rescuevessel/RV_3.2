import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function HomePage({ data }) { 
  const home = data.contentfulHomePage
  const image = data.contentfulHomePage.homeImageSlider[0].fluid

  return (
  <Layout>
    <SEO title="Rescue Vessel" />
      <section className='centered grid-2'>
        <h1>{home.title}</h1>
        <h2>{home.subtitle}</h2>
      </section>

      <div className='home-hero'>
        <Img fluid={image} alt='' />
      </div> 

      <div className='centered'>
        <section>
          {documentToReactComponents(home.section01.json)}
          <button>About us</button>
        </section>
        
        <section>
          {documentToReactComponents(home.section02.json)}
          <button>See our work</button>
        </section>

        <section>
          {documentToReactComponents(home.section03.json)}
          <div className='client-logos'>
            {home.clientLogos.map((logo, index) => {
              return <img src={logo.file.url} alt='' key={logo.id}  />
            })}
          </div>
        </section>
    </div>

  </Layout>
)}


export const query = graphql`
query MyQuery {
  contentfulHomePage {
    title
    subtitle
    homeImageSlider {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    section01 {
      json
    }
    section02 {
      json
    }
    section03 {
      json
    }
    clientLogos {
      id
      file {
        url
      }
    }
  }
}
`
