import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>CV Creator</h1>
        <div className="links">
         
          <Link to="/Components/CVpdf">Preview mode</Link>
        </div>
    </nav>
  )
}
