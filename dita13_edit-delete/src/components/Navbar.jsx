import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='navbar' style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000
        }}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}
