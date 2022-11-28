import React from 'react'
import CV from "../../assests/cv.pdf"

const T = () => {
  return (
    <div className='t'>
      <a href={CV} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default T
