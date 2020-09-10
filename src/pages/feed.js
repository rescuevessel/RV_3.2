import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/layout.scss"
import "../components/feed.scss"

export default function FeedPage({ data }) {
  return (
    <Layout>
      <div>
        <section className="centered">
          <div className="feedContainer">
            <h1>Feed me!</h1>

            {data.allDropboxNode.edges.map(({ node }, index) => {
              const iframe = node.localFile.childMarkdownRemark.frontmatter

              let num = Math.floor(Math.random() * 800) + 1 //random value 0-800
              num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1 //include negative numbers

              if (node.localFile.extension === "md") {
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

export const feedquery = graphql`
  query feedQuery {
    allDropboxNode {
      edges {
        node {
          id
          localFile {
            childMarkdownRemark {
              frontmatter {
                templateKey
                content
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  }
`
