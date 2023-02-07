import Navbar from './Components/Navbar'
import GeneralInfo from './Components/GeneralInfo'
import Education from './Components/Education'
import Jobs from './Components/Jobs'
import HomePage from './HomePage'
import './styles.css'
import CVpdf from './Components/CVpdf'
import { BrowserRouter , Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

function App() {

  

  return (
    
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/CVpdf' element={<CVpdf />} />
    </Routes>


    {/*<GeneralInfo />
    <Education />
    <Jobs />
  <CVpdf /> */}
   
  </div>
  );
}

export default App;
