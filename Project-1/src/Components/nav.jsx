import React from 'react'

const Nav = () => {
  return (
      <nav>
      <div className="logo">
        <img src='/images/brand_logo.png' alt="logo"/>
      </div>
       <div className="hamBurg">
       <ul>
        <li herf='#'>Menu</li>
        <li herf='#'>Location</li>
        <li herf='#'>About</li>
        <li herf='#'>Contact</li>
      </ul>
      <button>Login</button>
       </div>
      </nav>
  )
}

export default Nav