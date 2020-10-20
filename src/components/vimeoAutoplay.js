import React from 'react'

const VimeoAutoplay = props => {
  return (
    <div className='vimeo-body-full'>
      <iframe
        src={`${props.link}?autoplay=1&loop=1&background=1`}
        title='temp'
      />
    </div>
  )
}

export default VimeoAutoplay
