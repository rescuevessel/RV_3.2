import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const WorkTitleSection = props => {
  return (
    <div className='grid-2 centered-work'>
      <div className='work-title work-info'>
        <div>
          <h1>{props.client}</h1>
          <h3>{props.title}</h3>
        </div>
        <div className='title-line'></div>
      </div>
      <div className='work-info'>{documentToReactComponents(props.desc)}</div>
    </div>
  )
}

export default WorkTitleSection
