import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../components/layout.scss"
import RVslider from '../components/RVslider'


export default function AboutPage({ data }) { 
  const about = data.contentfulAboutPage
  const slider = data.contentfulAboutPage.aboutImageSlider
  
return (
  <Layout>
      <section className='centered'>
        <h1>{about.title}</h1>
      </section>

      <section className='centered'>
        <RVslider>
            {slider.map((images, i) => <Img fluid={images.fluid} key={i} width='100%' />)}
        </RVslider>
      </section> 

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

      <section className='centered grid-3 team'>
        {about.team.map((team, index) => 
              <div><Img fluid={team.fluid} alt='' key={index} />
              <h2>{team.title}</h2></div>
        )}
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
    aboutImageSlider {
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
    team {
      title
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
