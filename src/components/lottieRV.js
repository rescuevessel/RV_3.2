import React from 'react'
import Lottie from 'react-lottie'

const LottieRV = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const divStyle = {
    background: `url(${props.bg})`,
    backgroundSize: 'contain',
  }

  return (
    <div id='test' style={divStyle}>
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  )
}

export default LottieRV

/*    

*/
