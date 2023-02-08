import React from 'react'


export default function CVpdf(props) {
  return (
    <div className='CV'>
      <div className='leftSection'>
        <h1>{props.name} {props.lastName}</h1>
        <div className="about">
          <p>{props.about}</p>
        </div>

        <div className="education">
          <h1>Education</h1>
          <ul>
            <li className='link'>
              <h3>{props.school}</h3>
            </li>
            <li className='link'>
              <h3>{props.titleOfStudy}</h3>
            </li>
            <li className='link'>
              <p>{props.fromDate} - {props.toDate}</p>
            </li>
          </ul>
        </div>
        <div className="experience">
          <h1>Work exprerience</h1>
          <h3> {props.company} </h3>
          <h4> {props.position} </h4>
          <h4> {props.fromJobDate}-{props.toJobDate} </h4>
          <div className="tasks">
            <div className="p"> {props.tasks} </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
