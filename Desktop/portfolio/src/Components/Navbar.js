import React from 'react'


 const Navbar= () => {
  return (
    <div>
      <nav className='navbar'>
        <h1>Welcome to my space!</h1>
        <div className='links'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;