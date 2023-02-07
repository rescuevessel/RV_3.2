import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import '../components/feed.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const FeedPage = ({ data }) => {
  const feed = data.contentfulFeed.feed3
  // const title = data.contentfulFeed.title
  const header = data.contentfulFeed.header

  return (
    <Layout>
      <div>
        <section className='centered grid-2'>
          {documentToReactComponents(header.json)}
        </section>
        <section className='centered'>
          <div className='feedContainer'>
            <ul className='feed-ul'>
              {feed.map(images => {
                // let number = Math.floor(Math.random() * 300) + 1 //random value 0-800
                // number *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
                // let numberH = number / 3 //include negative numbers
                if (images.description === '') {
                  return (
                    <li
                      className='feed-item'
                      key={images.id}
                      // style={{
                      //   marginLeft: number,
                      //   marginTop: numberH,
                      // }}
                    >
                      <Img
                        className='center-feed'
                        fluid={images.fluid}
                        alt=''
                      />
                    </li>
                  )
                } else {
                  return (
                    <li
                      className='feed-item'
                      key={images.id}
                      // style={{ marginLeft: number, marginTop: numberH }}
                    >
                      <iframe
                        className='center-feed'
                        frameBorder='0'
                        title={images.title}
                        src={images.description}
                        width='960px'
                        height='600px'
                      ></iframe>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FeedPage

export const feed2query = graphql`
  query feed2query {
    contentfulFeed {
      title
      header {
        json
      }
      feed3 {
        id
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
