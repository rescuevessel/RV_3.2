import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function HomePage({ data }) { 
  let home = data.contentfulHomePage
  let image = data.contentfulHomePage.homeImageSlider[0].file.url

  return (
  <Layout>
    <SEO title="Rescue Vessel" />
      <h1>{home.title}</h1>
      <p>{home.subtitle}</p>

      <img src={image} alt='' />

      <h1>{home.section01Title}</h1>
      <p>{home.section01Desc.section01Desc}</p>
      <button>About us</button>

      <h1>{home.section02Title}</h1>
      <p>{home.section02Desc.section02Desc}</p>
      <button>See our work</button>
      
      <h1>{home.section03Title}</h1>
      <p>{home.section03Desc.section03Desc}</p>

      <div className='client-logos'>
        {home.clientLogos.map((logo, index) => {
          return <img src={logo.file.url} alt='' key={logo.id}  />
        })}
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
      file {
        url
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
