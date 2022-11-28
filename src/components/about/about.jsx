import React from 'react'
import "./about.css"
import me from "../../assests/me-about.jpg"
import {BiTimeFive} from "react-icons/bi"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <p>https://course.masaischool.com/lectures/41471</p>
      <div className="container about_container">
        {/* <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="" />
          </div>
        </div> */}
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
