import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function HomePage({ data }) { 
  let home = data.contentfulHomePage
  let image = data.contentfulHomePage.homeImageSlider[0].fluid
  console.log(image)

  return (
  <Layout>
    <SEO title="Rescue Vessel" />
      <div className='centered'>
        <h1>{home.title}</h1>
        <p>{home.subtitle}</p>
      </div>

      <div className='home-hero'>
        <Img fluid={image} alt='' />
      </div> 

      <div className='centered'>
        <section>
          <h1>{home.section01Title}</h1>
          <p>{home.section01Desc.section01Desc}</p>
          <button>About us</button>
        </section>
        
        <section>
          <h1>{home.section02Title}</h1>
          <p>{home.section02Desc.section02Desc}</p>
          <button>See our work</button>
        </section>

        <section>
          <h1>{home.section03Title}</h1>
          <p>{home.section03Desc.section03Desc}</p>
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
    subtitle
    title
    section01Desc {
      section01Desc
    }
    section01Title
    homeImageSlider {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    section02Title
    section03Title
    section02Desc {
      section02Desc
    }
    section03Desc {
      section03Desc
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
