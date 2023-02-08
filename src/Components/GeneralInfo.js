import React, { useState } from 'react'

export default function GeneralInfo(props) {
   


  return (
    <header>
        
        <div className="form">
        <h1>General Information</h1>
            <form >
                <div className="upper">
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='First Name...' required
                         onChange={props.handleChange} id="name" />   
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Last Name...' required 
                       onChange={props.handleChange} id="lastName" />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email...' required 
                       onChange={props.handleChange} id="email" />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" placeholder='(00)+ 123-456-789' required
                        onChange={props.handleChange} id="phone" />
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
