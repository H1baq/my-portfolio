import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
        <About/>
      <Projects/>
      <Contact/>
    
      
      
    </div>
  )
}

export default App
