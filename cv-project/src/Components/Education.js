import React from 'react'

export default function Education(props) {
  return (
    <header>
        
        <div className="form">
        <h1>Education</h1>
            <form>
                <div className="upper">
                    <div className="schoolName">
                        <label htmlFor="schoolName">School Name</label>
                        <input type="text" placeholder='School Name...' required
                        onChange={props.handleChange} id='school'  />   
                    </div>
                    <div className="titleOfStudy">
                        <label htmlFor="titleOfStudy">Title of study</label>
                        <input type="text" placeholder='Title of study...' required
                        onChange={props.handleChange} id='studyTitle'   />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="from">
                        <label htmlFor="from">From</label>
                        <input type="date"  required  
                         onChange={props.handleChange} id='fromDate'  />
                    </div>
                    <div className="to">
                        <label htmlFor="to">To</label>
                        <input type="date"  required  
                         onChange={props.handleChange} id='toDate'  />
                    </div>
                </div>  
                <div className="btnContainer">
                    <button type='submit' className='submitBtn'>Save</button>
                </div>   
            </form>
        </div>
    </header>
  )
}
