import React, { useState } from 'react'

export default function GeneralInfo() {
    const [name, Setname] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const person = { name, lastName, email, phone }
        
        console.log(person)
    }


  return (
    <header>
        
        <div className="form">
        <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="upper">
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='First Name...' required value={name}
                        onChange={(e) => Setname(e.target.value)} />   
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder='Last Name...' required value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div> 
                <div className="lower">  
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email...' required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" placeholder='(00)+ 123-456-789' required value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
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
