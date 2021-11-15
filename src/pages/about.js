import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../components/layout.scss'
import RVslider from '../components/RVslider'
import parse from 'html-react-parser'
import { INLINES } from '@contentful/rich-text-types'

const AboutPage = ({ data }) => {
  const about = data.contentfulAboutPage
  const slider = data.contentfulAboutPage.aboutImageSlider

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target='_blank' rel='noreferrer'>
            {node.content[0].value}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      {/* <section className='centered'>
        <h1>{about.title}</h1>
      </section> */}

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

      <section className='centered grid-2'>
        <Img fluid={about.aboutImage01.fluid} alt='' />
        <Img fluid={about.aboutImage02.fluid} alt='' />
      </section>
      <section className='home-grey'>
        <div className='block'></div>
      </section>

      <section className='centered grid-2 '>
        <div className='about-list' style={{ paddingRight: '30px' }}>
          {documentToReactComponents(about.section02Left.json)}
        </div>
        <div className='about-help'>
          <div className='title-line'></div>
          <div>{documentToReactComponents(about.section02Right.json)}</div>
        </div>
      </section>

      <section className='centered'>
        <Img fluid={about.aboutImage03.fluid} alt='' />
      </section>

      <section className='home-grey'>
        {/* Collaboration is King */}
        <div className='centered grid-2 type'>
          <div>{documentToReactComponents(about.section04Left.json)}</div>
          <div className='grid-2 home about-list underline'>
            {documentToReactComponents(about.section04Right.json, options)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='centered'>
        {documentToReactComponents(about.teamTitle.json)}
        <div className='grid-3 team'>
          {about.team.map(team => (
            <div key={team.id}>
              <Img fluid={team.fluid} />
              <h2>{team.title}</h2>
              <div className='team-info'>{parse(team.description)}</div>
            </div>
          ))}
          <div className='space-between full'>
            <div>
              {documentToReactComponents(about.section05Left.json)}
              {documentToReactComponents(about.section05Right.json)}
            </div>
            {/* <div className='title-line'></div> */}
          </div>
        </div>
      </section>
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
      teamTitle {
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
