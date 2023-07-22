import './styles/style.css';
import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from './components/AboutMe';
import { Contact } from "./components/Contact";
import {Home} from "./components/Home"
import togglerBar from "./assets/bars-staggered1.png"
import home from "./assets/house-chimney-blank.png"
import { useState } from 'react';




function App() {
  const [toggle, setToggle] = useState('')
  const TooglerBar = "./assets/barres-decalees.png"
  const handleChange = () => {
    toggle === 'openDropdown' ? setToggle("") : setToggle("openDropdown")
  }


    return (  
      <div>
        <header className='h-16 w-screen fixed top-0 left-0 right-0'>
          <nav className='flex justify-between p-1 pr-5 pl-2 align-center'>
            <Link to="/" className='nav-link'> <img src={home}/></Link>
            <img src={togglerBar} onClick={handleChange}/>
          </nav>
          <div className={`dropDown-menu flex flex-col absolute text-center ${toggle}`}>
            <li>< Link to="/" className='nav-link text-xl'>Home</Link></li>
            <li>< Link to="/about" className='nav-link text-xl'>About</Link></li>
            <li>< Link to="/contact" className='nav-link text-xl'>Contact</Link></li>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
  )
}

export default App

