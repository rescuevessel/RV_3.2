import React from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/layout.scss"
import '../components/feed.scss'




export default function FeedPage({ data }) {
  return (
  <Layout>
      <div>
        <section className='centered'>
          <div className='feedContainer'>
              <h1>Feed me!</h1>
              
              {data.allDropboxNode.edges.map(({ node }, index) => {

                let num = Math.floor(Math.random()*800) + 1; 
                num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
                
                console.log(num);

                if (node.localFile.extension === 'md') {
                return (<li className='feed-item' style={{ marginLeft: num }}><iframe key={index} title={node.localFile.childMarkdownRemark.frontmatter.templateKey} width='600px' height='600px' src={node.localFile.childMarkdownRemark.frontmatter.content} frameBorder="0">
                </iframe></li>)
                } else 
                {return (<li className='feed-item' style={{ marginLeft: num }}><img src={node.localFile.publicURL} alt={""} key={index}/></li>)}
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