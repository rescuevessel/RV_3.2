import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import '../components/layout.scss'
import '../components/feed.scss'

const FeedPage = ({ data }) => {
  const feed = data.contentfulFeed.feed3

  const divStyle = {
    width: '400px',
  }

  return (
    <Layout>
      <div>
        <section className='centered'>
          <div className='feedContainer'>
            <h1>Feed me!</h1>
            {feed.map(images => {
              if (images.description === '') {
                return (
                  <li className='feed-item' style={divStyle} key={images.id}>
                    <Img fluid={images.fluid} alt='' width='600px' />
                  </li>
                )
              } else {
                return (
                  <li className='feed-item' key={images.id}>
                    <iframe
                      frameBorder='0'
                      title={images.title}
                      src={images.description}
                      width='600px'
                      height='600px'
                    ></iframe>
                  </li>
                )
              }
            })}
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
      feed3 {
        title
        id
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
/*
<Img fluid={images.fluid} key={images.id} width='100%' />
{data.allDropboxNode.edges.map(({ node }, index) => {
              let num = Math.floor(Math.random() * 800) + 1 //random value 0-800
              num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1 //include negative numbers

              if (node.localFile.extension === 'md') {
                const iframe = node.localFile.childMarkdownRemark.frontmatter
                //console.log(iframe)
                return (
                  <li className='feed-item' style={{ marginLeft: num }}>
                    <iframe
                      key={index}
                      frameBorder='0'
                      title={iframe.templateKey}
                      src={iframe.content}
                      width='600px'
                      height='600px'
                    ></iframe>
                  </li>
                )
              } else {
                return (
                  <li className='feed-item' style={{ marginLeft: num }}>
                    <img
                      src={node.localFile.publicURL}
                      alt={'feed images'}
                      key={index}
                    />
                  </li>
                )
              }
            })}
*/
