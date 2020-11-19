import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const WorkTitleSection = props => {
  return (
    <div className='grid-half centered-work'>
      <div className='work-title work-info'>
        <h1>{props.title}</h1>
        <div className='title-line'></div>
      </div>
      <div className='work-info'>{documentToReactComponents(props.desc)}</div>
    </div>
  )
}

export default WorkTitleSection
