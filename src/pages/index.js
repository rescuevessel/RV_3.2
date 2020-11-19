import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const IndexPage = ({ data }) => {
  const home = data.contentfulHomePage
  const image = data.contentfulHomePage.homeHeroImage.fluid

  return (
    <Layout>
      <section className='centered grid-2'>
        <h1>{home.title}</h1>
        <h2>{home.subtitle}</h2>
      </section>

      <section className='home-hero'>
        <Img fluid={image} alt='' />
      </section>

      <div className='centered grid-half home'>
        <div>{documentToReactComponents(home.section01.json)}</div>
        <div>
          {documentToReactComponents(home.section01Body.json)}
          <Link to='/about'>
            <button className='btn-1'>About us</button>
          </Link>
        </div>
      </div>

      <section className='home-grey'>
        <div className='centered grid-half home'>
          <div>{documentToReactComponents(home.section02.json)}</div>
          <div className='home-ul'>
            {documentToReactComponents(home.section02Body.json)}
            <Link to='/work'>
              <button className='btn-1'>See our work</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='centered grid-half home'>
        <div>{documentToReactComponents(home.section03.json)}</div>
        <div>{documentToReactComponents(home.section03Body.json)}</div>
      </section>

      <div className='client-logos-wrap'>
        <section className='client-logos centered'>
          {home.clientLogos.map(logo => (
            <img src={logo.file.url} alt='' key={logo.id} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexquery = graphql`
  query indexquery {
    contentfulHomePage {
      title
      subtitle
      homeHeroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      section01 {
        json
      }
      section01Body {
        json
      }
      section02 {
        json
      }
      section02Body {
        json
      }
      section03 {
        json
      }
      section03Body {
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
