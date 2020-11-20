import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../components/layout.scss'
import RVslider from '../components/RVslider'
import parse from 'html-react-parser'

const AboutPage = ({ data }) => {
  const about = data.contentfulAboutPage
  const slider = data.contentfulAboutPage.aboutImageSlider

  return (
    <Layout>
      <section className='centered'>
        <h1>{about.title}</h1>
      </section>

      <section className='centered'>
        <RVslider>
          {slider.map(images => (
            <Img fluid={images.fluid} key={images.id} width='100%' />
          ))}
        </RVslider>
      </section>

      <div className='centered type grid-thirds'>
        <section>{documentToReactComponents(about.section01.json)}</section>
      </div>

      <section className='centered grid-half'>
        <Img fluid={about.aboutImage01.fluid} alt='' />
        <Img fluid={about.aboutImage02.fluid} alt='' />
      </section>
      <section className='home-grey'>
        <div className='block'></div>
      </section>

      <section className='centered grid-half '>
        <div className='about-list' style={{ paddingRight: '30px' }}>
          {documentToReactComponents(about.section02Left.json)}
        </div>
        <div className='work-title'>
          <div className='title-line'></div>
          <div>{documentToReactComponents(about.section02Right.json)}</div>
        </div>
      </section>

      <section className='centered'>
        <Img fluid={about.aboutImage03.fluid} alt='' />
      </section>

      <section className='home-grey'>
        {/* Collaboration is King */}
        <div className='centered grid-half type'>
          <div>{documentToReactComponents(about.section04Left.json)}</div>
          <div className='grid-half home about-list'>
            {documentToReactComponents(about.section04Right.json)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='centered grid-3 team'>
        {about.team.map(team => (
          <div>
            <Img fluid={team.fluid} alt='' key={team.id} />
            <h2>{team.title}</h2>
            <div className='team-info'>{parse(team.description)}</div>
          </div>
        ))}
      </section>

      {/* Interested in joining? */}
      <section className='home-grey'>
        <div className='centered grid-half type'>
          <div>{documentToReactComponents(about.section05Left.json)}</div>
          <div>{documentToReactComponents(about.section05Right.json)}</div>
        </div>
      </section>

      <div className='centered grid-half'>
        <div className='type'>
          {documentToReactComponents(about.section03Left.json)}
        </div>
        <Img fluid={about.aboutImage04.fluid} alt='' />
      </div>
    </Layout>
  )
}

export default AboutPage

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
        id
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
      section05Right {
        json
      }
      team {
        id
        title
        description
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
