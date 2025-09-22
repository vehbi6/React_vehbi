import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <Home />
    </div>
     <div>
      <About />
    </div>
     <div>
      <Contact />
    </div>
    </>
  )
}

export default App
