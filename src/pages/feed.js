import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/layout.scss"
import "../components/feed.scss"

const FeedPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <section className="centered">
          <div className="feedContainer">
            <h1>Feed me!</h1>

            {data.allDropboxNode.edges.map(({ node }, index) => {
              let num = Math.floor(Math.random() * 800) + 1 //random value 0-800
              num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1 //include negative numbers

              if (node.localFile.extension === "md") {
                const iframe = node.localFile.childMarkdownRemark.frontmatter
                //console.log(iframe)
                return (
                  <li className="feed-item" style={{ marginLeft: num }}>
                    <iframe
                      key={index}
                      frameBorder="0"
                      title={iframe.templateKey}
                      src={iframe.content}
                      width="600px"
                      height="600px"
                    ></iframe>
                  </li>
                )
              } else {
                return (
                  <li className="feed-item" style={{ marginLeft: num }}>
                    <img
                      src={node.localFile.publicURL}
                      alt={"feed images"}
                      key={index}
                    />
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

export const feedquery = graphql`
  query feedQuery {
    allDropboxNode {
      edges {
        node {
          localFile {
            publicURL
            extension
            childMarkdownRemark {
              frontmatter {
                content
                templateKey
              }
            }
          }
        }
      }
    }
  }
`
