// import React from 'react'
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'
// import Layout from '../../components/layout'
// import WorkTitleSection from '../../components/workTitleSection'
// import mixpanel from 'mixpanel-browser'

// mixpanel.track('Visited Marco')

// export default function Marco({ data }) {
//   let marco = data.contentfulMarco

//   return (
//     <Layout>
//       <div className='centered-work'>
//         <Img fluid={marco.hero.fluid} alt='' />
//       </div>
//       <WorkTitleSection title={marco.title} desc={marco.description.json} />
//       <div className='centered-work'>
//         <Img fluid={marco.logoAnimation.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.gridsystem.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.phones01.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.taglineImage01.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.phones02.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.iconSet.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.books.fluid} alt='' />
//       </div>

//       <div className='centered-work'>
//         <Img fluid={marco.typeSystem.fluid} alt='' />
//       </div>
//       <div className='centered-work'>
//         <Img fluid={marco.taglineImage02.fluid} alt='' />
//       </div>
//     </Layout>
//   )
// }

// export const marco_query = graphql`
//   query marco {
//     contentfulMarco {
//       title
//       hero {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       description {
//         json
//       }
//       gridsystem {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       iconSet {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       typeSystem {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       phones01 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       phones02 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       books {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       taglineImage01 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       taglineImage02 {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//       logoAnimation {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `
