import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const WorkThumb = props => {
  //console.log(props)
  const [hovering, isHovering] = useState(true)
  const toggle = () => isHovering(!hovering)

  let thumbOption = hovering ? (
    <Img fluid={props.thumb} alt='' />
  ) : (
    <Img fluid={props.rollover} alt='' />
  )

  return (
    <Link
      className={props.className}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      to={props.link}
    >
      <div>
        {thumbOption}
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
}

export default WorkThumb
