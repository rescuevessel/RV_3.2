import React from 'react'
import { Link } from 'gatsby'
import LottieRV from '../components/lottieRV'
import bg from '../images/segmentationFrame.svg'

const WorkThumb = props => {
  return (
    <div className={`underline ${props.className}`}>
      <Link to={props.link}>
        <div>
          <LottieRV bg={bg} animationData={props.lottie} />

          <h2>{props.client}</h2>
          <h3>{props.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default WorkThumb
