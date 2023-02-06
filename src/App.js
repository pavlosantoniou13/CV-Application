import Navbar from './Components/Navbar'
import GeneralInfo from './Components/GeneralInfo'
import Education from './Components/Education'
import Jobs from './Components/Jobs'
import './styles.css'
import CVpdf from './Components/CVpdf'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
  <div>
    <Navbar />
    <GeneralInfo />
    <Education />
    <Jobs />
   
  </div>
  );
}

export default App;