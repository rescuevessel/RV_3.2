import React from "react"
//import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function AboutPage({ data }) { 
  let about = data.contentfulAboutPage
  console.log(about)

  return (
  <Layout>
      <div className='centered grid-2'>
        <h1>{about.title}</h1>
      </div>

      <div className='home-hero'>
        <Img fluid={about.heroImage.fluid} alt='' />
      </div> 

      <div className='centered'>
        <section>
          <h1>{about.section01Title}</h1>
          <p>{about.section01Desc.section01Desc}</p>
        </section>
      </div>
      <div className='centered grid-2'>
        <Img fluid={about.aboutImage01.fluid} alt='' />
        <Img fluid={about.aboutImage02.fluid} alt='' />
      </div>
      <div className='centered grid-2'>
        <div>
          <h1>{about.section02Title}</h1>
          <ul>{about.section02List}</ul>
        </div>
        <div>
          <h1>{about.section02Subtitle}</h1>
          <p>{about.section02Desc.section02Desc}</p>
        </div>
      </div>
      <div className='centered'>
        <Img fluid={about.aboutImage03.fluid} alt='' />
      </div> 
      <div className='centered grid-2'>
        <div>
          <h1>{about.section03Title}</h1>
        </div>
        <Img fluid={about.aboutImage04.fluid} alt='' />
      </div> 
        <section className='centered grid-2'>
          <div>
            <h1>{about.section04Title}</h1>
            <p>{about.section04Desc.section04Desc}</p>
          </div>
          <p>{about.collaborators}</p>
        </section>
        <section className='centered grid-3'>
          <Img fluid={about.team01.fluid} alt='' />
          <Img fluid={about.team02.fluid} alt='' />
          <Img fluid={about.team03.fluid} alt='' />
          <Img fluid={about.team04.fluid} alt='' />
          <Img fluid={about.team05.fluid} alt='' />
        </section>
        <section className='centered grid-2'>
          <div>
            <h1>{about.section05Title}</h1>
            <p>{about.section05Desc.section05Desc}</p>
          </div>
          <Img fluid={about.aboutImage04.fluid} alt='' />
        </section>
      

  </Layout>
)}


export const aboutquery = graphql`
query AboutPageQuery {
  contentfulAboutPage {
    heroImage {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    title
    section01Title
    section01Desc {
      section01Desc
    }
    section02Title
    section02Subtitle
    section02List
    section02Desc {
      section02Desc
    }
    section03Title
    section04Desc {
      section04Desc
    }
    section04Title
    section05Title
    section05Desc {
      section05Desc
    }
    team01 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team02 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team03 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team04 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team05 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    aboutImage01 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    aboutImage02 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    aboutImage03 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    aboutImage04 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    collaborators
  }
}

`
