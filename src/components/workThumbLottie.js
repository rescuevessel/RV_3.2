import React from 'react'
import { Link } from 'gatsby'
import LottieRV from '../components/lottieRV'

const WorkThumb = props => {
  return (
    <div className={`underline ${props.className}`}>
      <Link to={props.link}>
        <div>
          <LottieRV animationData={props.lottie} />

          <h2>{props.title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default WorkThumb
