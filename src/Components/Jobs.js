import React from 'react'

export default function Jobs(props) {
  return (
    <header>
        
        <div className="form">
        <h1>Exprerience</h1>
            <form>
                <div className="upper">
                    <div className="company">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" placeholder='Company Name...' required
                        onChange={props.handleChange} id="company" />   
                    </div>
                    <div className="position">
                        <label htmlFor="position">Position</label>
                        <input type="text" placeholder='Position...' required
                        onChange={props.handleChange} id="position"  />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="from">
                        <label htmlFor="from">From</label>
                        <input type="date"  required 
                        onChange={props.handleChange} id="fromDateJob" />
                    </div>
                    <div className="to">
                        <label htmlFor="to">To</label>
                        <input type="date"  required  
                        onChange={props.handleChange} id="ToDateJob"  />
                    </div>
                </div>
                <div className="tasksContainer">
                    <div className="tasks">
                        <textarea type="text" placeholder='Enter Tasks here...' 
                        onChange={props.handleChange} id="Tasks"/>
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
