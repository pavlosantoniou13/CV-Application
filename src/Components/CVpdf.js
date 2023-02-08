import React from 'react'


export default function CVpdf(props) {
  return (
    <div className='CV'>
      <div className='leftSection'>
        <div className="Contact">
          <p> Name:{props.name} {props.lastName}</p>
          <ul >
            <li className='link'>
              <p>{props.phone}</p>
            </li>
            <li className='link'>
              <p>{props.email}</p>
            </li>
          </ul>
        </div>

        <div className="education">
          <h1>Education</h1>
          <ul>
            <li className='link'>
              <p>{props.school}</p>
            </li>
            <li className='link'>
              <p>{props.titleOfStudy}</p>
            </li>
            <li className='link'>
              <p>from - to</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
