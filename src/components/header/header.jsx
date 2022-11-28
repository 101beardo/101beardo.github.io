import React from 'react'
import "./header.css"
import T from './T'
import pic from"../../assests/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hellio I'm</h5>
        <h1>Tarun Sharma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <T/>
        <HeaderSocials/>

        <div className="me">
          <img src={pic} alt="me" />
        </div>
        

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
