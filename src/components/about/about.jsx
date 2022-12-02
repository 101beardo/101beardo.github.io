import React from 'react'
import {BiTimeFive} from "react-icons/bi"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      
      <div className="container about_container">
        
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card' >
              <BiTimeFive className='about_icon' />
              <h5>Projects</h5>
              <small>3600+ Hours Of Coding</small>
            </article>
            <article className='about_card' >
              <BiTimeFive className='about_icon' />
              <h5>Projects</h5>
              <small>3600+ Hours Of Coding</small>
            </article>
            <article className='about_card' >
              <BiTimeFive className='about_icon' />
              <h5>Projects</h5>
              <small>3600+ Hours Of Coding</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
