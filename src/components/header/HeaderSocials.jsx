import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiHackerrank} from "react-icons/si"


const HeaderSocials = () => {
  return (
    <div className='header_socials' >
        <a href="https://www.linkedin.com/in/tarun-sharma-93008a190/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/101beardo" target="_blank"><FaGithub/></a>
        <a href="https://www.hackerrank.com/_beardo_" target="_blank"><SiHackerrank/></a>
    </div>
  )
}

export default HeaderSocials
