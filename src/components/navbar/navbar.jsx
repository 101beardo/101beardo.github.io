import React, { useState } from 'react'

import {AiOutlineHome} from"react-icons/ai"
import {FiUser} from "react-icons/fi"
import {AiOutlineProject} from "react-icons/ai"
import {RiContactsBook2Line} from "react-icons/ri"
import { Box } from '@chakra-ui/react'
const Navbar = () => {
  const [activeNav,setActive]=useState("#")
  return (
    <Box 
      w="100%" 
      h="100px" 
      color="cyan.300"
      bg="blue.900"
      p="20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderColor='gray.200'
      boxShadow='dark-lg'
      position="fixed"
      fontSize='20px'
      >
      <a href="#header" onClick={()=>setActive("#")} className={activeNav ==="#"?"active":""}><AiOutlineHome/><Box>Home</Box></a>
      <a href="#about" onClick={()=>setActive("#about")} className={activeNav ==="#about"?"active":""} ><FiUser/>About</a>
      <a href="#projects" onClick={()=>setActive("#projects")} className={activeNav ==="#projects"?"active":""} ><AiOutlineProject/>Projects</a>
      <a href="#contact" onClick={()=>setActive("#contact")} className={activeNav ==="#contact"?"active":""} ><RiContactsBook2Line/>Contact</a>
    </Box>
  )
}

export default Navbar
