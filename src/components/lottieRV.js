import React from 'react'
import Lottie from 'react-lottie'

const LottieRV = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default LottieRV
