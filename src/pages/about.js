import React from 'react'
//import { Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function AboutPage({ data }) { 
  const about = data.contentfulAboutPage
  console.log(about)

  return (
  <Layout>
      <section className='centered grid-2'>
        <h1>{about.title}</h1>
      </section>
      <div className='home-hero'>
        <Img fluid={about.heroImage.fluid} alt='' />
      </div> 
      <div className='centered'>
        <section>
          {documentToReactComponents(about.section01.json)}
        </section>
      </div>
      <section className='centered grid-2'>
        <Img fluid={about.aboutImage01.fluid} alt='' />
        <Img fluid={about.aboutImage02.fluid} alt='' />
      </section>
      <section className='centered grid-2'>
        <div>{documentToReactComponents(about.section02Left.json)}</div>
        <div>{documentToReactComponents(about.section02Right.json)}</div>
      </section>
      <section className='centered'>
        <Img fluid={about.aboutImage03.fluid} alt='' />
      </section> 
      <section className='centered grid-2'>
        <div>{documentToReactComponents(about.section03Left.json)}</div>
        <Img fluid={about.aboutImage04.fluid} alt='' />
      </section> 
        <section className='centered grid-2'>
          <div>{documentToReactComponents(about.section04Left.json)}</div>
          <div>{documentToReactComponents(about.section04Right.json)}</div>
        </section>
        <section className='centered grid-3'>
          <div><Img fluid={about.team01.fluid} alt='' /><h2>{about.team01Name}</h2></div>
          <div><Img fluid={about.team02.fluid} alt='' /><h2>{about.team02Name}</h2></div>
          <div><Img fluid={about.team03.fluid} alt='' /><h2>{about.team03Name}</h2></div>
          <div><Img fluid={about.team04.fluid} alt='' /><h2>{about.team04Name}</h2></div>
          <div><Img fluid={about.team05.fluid} alt='' /><h2>{about.team05Name}</h2></div>
        </section>
        <section className='centered grid-2'>
          <div>{documentToReactComponents(about.section05Left.json)}</div>
          <Img fluid={about.aboutImage04.fluid} alt='' />
        </section>
      

  </Layout>
)}


export const aboutquery = graphql`
query AboutPageQuery {
  contentfulAboutPage {
    title
    heroImage {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    section01 {
      json
    }
    section02Left {
      json
    }
    section02Right {
      json
    }
    section03Left {
      json
    }
    section04Left {
      json
    }
    section04Right {
      json
    }
    section05Left {
      json
    }
    team01Name
    team01 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team02Name
    team02 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team03Name
    team03 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team04Name
    team04 {
      fluid {
        ...GatsbyContentfulFluid
     } 
    }
    team05Name
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
  }
}

`
