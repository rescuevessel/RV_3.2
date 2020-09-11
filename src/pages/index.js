import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexPage = ({ data }) => {
  const home = data.contentfulHomePage
  const image = data.contentfulHomePage.homeHeroImage.fluid

  return (
    <Layout>
      <section className="centered grid-2">
        <h1>{home.title}</h1>
        <h2>{home.subtitle}</h2>
      </section>

      <section className="home-hero">
        <Img fluid={image} alt="" />
      </section>

      <div className="centered grid-2 homeSections">
        <section>
          {documentToReactComponents(home.section01.json)}
          <Link to="/about">
            <button className="btn-1">About us</button>
          </Link>
        </section>

        <section>
          {documentToReactComponents(home.section02.json)}
          <Link to="/work">
            <button className="btn-1">See our work</button>
          </Link>
        </section>
      </div>

      <section className="centered">
        {documentToReactComponents(home.section03.json)}
      </section>

      <section className="client-logos centered">
        {home.clientLogos.map(logo => (
          <img src={logo.file.url} alt="" key={logo.id} />
        ))}
      </section>
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
