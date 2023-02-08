import GeneralInfo from './Components/GeneralInfo'
import Education from './Components/Education'
import Jobs from './Components/Jobs'

import React from 'react'

export default function HomePage(props) {

  return (
    <div>
        <GeneralInfo handleChange={props.handleChange} />
        <Education handleChange={props.handleChange} />
        <Jobs handleChange={props.handleChange} />
    </div>
  )
}
