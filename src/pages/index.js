import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
//import Img from 'gatsby-image'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//import VimeoAutoplay from '../components/vimeoAutoplay'
import mixpanel from 'mixpanel-browser'
import WorkThumb from '../components/workThumb'
import WorkThumbLottie from '../components/workThumbLottie'
import upwardLogo from '../lottie/upwardHeroAnimation.json'

function IndexPage({ data }) {
  useEffect(() => {
    mixpanel.track_links('.mp-home-about', 'Clicked Home About Us', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.mp-home-wecan a', 'Clicked Home We Can', {
      referrer: document.referrer,
    })
    mixpanel.track_links('.mp-home-work', 'Clicked Home See Our Work', {
      referrer: document.referrer,
    })
  }, [])

  const renderOptions = {
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  const home = data.contentfulHomePage
  //const image = data.contentfulHomePage.homeHeroImage.fluid
  //console.log(home.homeHeroImage.description)
  let work = data.contentfulWorkPage

  return (
    <Layout>
      {/* We're here to help. */}
      <section className='centered grid-2'>
        <h1>{home.title}</h1>
        <h2>{home.subtitle}</h2>
      </section>

      {/* <section className='home-hero'>
        <VimeoAutoplay link={home.homeHeroImage.description} />
        <Img fluid={image} alt='' />
      </section> */}

      <div className='grid-work centered'>
        <WorkThumb // Reel
          className='hero'
          thumb={work.reelThumb.fluid}
          rollover={work.reelThumb.fluid}
          title={work.reelSubtitle}
          client={work.reelTitle}
          link='/reel'
        />

        <WorkThumbLottie // Upward
          // className='hero'
          lottie={upwardLogo}
          // rollover={work.upwardRollover.fluid}
          title={work.upwardTitle}
          client={work.upwardClient}
          link='/work/upward'
        />
        <WorkThumb // Gem
          // className='hero'
          thumb={work.gemThumb.fluid}
          rollover={work.gemRollover.fluid}
          title={work.gemType}
          client={work.gemTitle}
          link='/work/gem'
        />

        <WorkThumb // Mixpanel Conversion
          className='hero'
          thumb={work.conversionThumb.fluid}
          rollover={work.conversionRollover.fluid}
          title={work.conversionTitle}
          client={work.conversionClient}
          link='/work/conversion'
        />
      </div>
      {/* Meet your new collaborators */}
      {/* <div className='centered grid-2 type full'>
        <div>{documentToReactComponents(home.section01.json)}</div>
        <div>
          {documentToReactComponents(home.section01Body.json)}
          <Link className='mp-home-about' to='/about'>
            <button className='btn-1'>About us</button>
          </Link>
        </div>
      </div> */}
      {/* Design, Branding & Motion */}
      {/* <section className='home-grey'>
        <div className='centered grid-2 type full'>
          <div>{documentToReactComponents(home.section02.json)}</div>
          <div>
            <div className='mp-home-wecan home-ul underline'>
              {documentToReactComponents(home.section02Body.json)}
            </div>
            <Link className='mp-home-work' to='/work'>
              <button className='btn-1'>See our work</button>
            </Link>
          </div>
        </div>
      </section> */}

      <section className='centered type'>
        <div className='grid-2 full'>
          <div>{documentToReactComponents(home.section03.json)}</div>
          <div>
            {documentToReactComponents(home.section03Body.json, renderOptions)}
          </div>
        </div>
        <div className='client-logos centered'>
          {home.clientLogos.map(logo => (
            <img src={logo.file.url} alt='' key={logo.id} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const indexquery = graphql`
  query indexquery {
    contentfulWorkPage {
      reelSubtitle
      reelTitle
      reelThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      gemTitle
      gemType
      gemThumb {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      gemRollover {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      upwardTitle
      upwardClient
      upwardThumb {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      upwardRollover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      conversionTitle
      conversionClient
      conversionThumb {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      conversionRollover {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulHomePage {
      title
      subtitle
      homeHeroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
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
