import React, { useState } from 'react'
import "./navbar.css"
import {AiOutlineHome} from"react-icons/ai"
import {FiUser} from "react-icons/fi"
import {AiOutlineProject} from "react-icons/ai"
import {RiContactsBook2Line} from "react-icons/ri"
const Navbar = () => {
  const [activeNav,setActive]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActive("#")} className={activeNav ==="#"?"active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive("#about")} className={activeNav ==="#about"?"active":""} ><FiUser/></a>
      <a href="#projects" onClick={()=>setActive("#projects")} className={activeNav ==="#projects"?"active":""} ><AiOutlineProject/></a>
      <a href="#contact" onClick={()=>setActive("#contact")} className={activeNav ==="#contact"?"active":""} ><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Navbar
