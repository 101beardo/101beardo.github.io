import React from 'react'
import Typewriter from 'typewriter-effect'
import pic from"../../assests/me.png"
import { Box, Text } from '@chakra-ui/react'
import CV from "../../assests/Tarun-Sharma-Resume.pdf"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiHackerrank} from "react-icons/si"

const Header = () => {
  return (
      <Box 
      id='header'  
      align="center" 
      className="container header_container"
      pt="150px">
      
        <Box 
        fontWeight="bold" 
        fontSize="30px" 
        >
          <Box fontSize="60px" display="flex" w="700px">
          <Text>Hello, I'm &nbsp;</Text>
          <Text color="blue.700" >Tarun Sharma</Text>
          </Box>
        
        <Typewriter
                options={{
                  strings: [
                      "A MERN Stack Developer.",
                      "A Problem Solver.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
            />
        </Box>



        <Box> 
          <a href={CV} download className='btn'>Download Resume</a>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </Box>

                

        <Box w="300px" align="center"  border="1px solid red" >
          <Box display="flex">
          <a href="https://www.linkedin.com/in/tarun-sharma-93008a190/" target="_blank"  rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/101beardo" target="_blank"  rel="noreferrer"><FaGithub/></a>
          <a href="https://www.hackerrank.com/_beardo_" target="_blank"  rel="noreferrer"><SiHackerrank/></a>
          </Box>
        </Box>



        <Box className="me">
          <img src={pic} alt="me" />
        </Box>



        <a href="#contact" className='scroll_down'>Scroll Down</a>



      </Box>
  )
}

export default Header
