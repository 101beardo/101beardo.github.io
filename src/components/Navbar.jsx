import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"



const Navbar = () => {

  const { isOpen, onToggle } = useDisclosure()

  return (
   <Box data-testid="nav-menu" >
      <Box 
          
          w="100%" 
          h="70px" 
          color="cyan.300"
          bg="blue.900"
          p="20px"
          display={["none","flex","flex"]}
          
          boxShadow='dark-lg'
          position={"fixed"}
          fontSize={['10px','13px','20px']}
          zIndex={1}
          >
          <Box w="50%" >
          <Link className='nav-link home' style={{ textDecoration: 'none' }}  href='#header'>Home</Link>
          </Box>
          <Box w="70%" display="flex" justifyContent="space-evenly"  >
          
          <Link className='nav-link about' style={{ textDecoration: 'none' }}  href="#about">About Me</Link>
          <Link className='nav-link skills' style={{ textDecoration: 'none' }}  href="#skills">Skills</Link>
          <Link className='nav-link projects' style={{ textDecoration: 'none' }}  href="#projects">Projects</Link>
          <Link className='nav-link contact' style={{ textDecoration: 'none' }}  href="#contact">Contact</Link>
          <Link data-testid="resume-link-1" className='nav-link resume' onClick={()=> window.open("https://drive.google.com/file/d/1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a/view?usp=sharing","_blank")} style={{ textDecoration: 'none' }}  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a"> ⤓ Resume</Link>
          </Box>
          
      </Box>

      <Box w="100%" 
          h="70px" 
          color="cyan.300"
          bg="blue.900"
          p="20px"
          display={["flex","none","none"]}
          boxShadow='dark-lg'
          position={"fixed"}
          fontSize='20px'
          zIndex={1}
          align="right"
          
      >
        <Box w="100%">
        {isOpen ? <Button _focus={{ bgColor: "blue.900" }} onClick={onToggle} bgColor="blue.900"  p="10px" href="https://github.com/101beardo"><Icon boxSize="25px" as={CgClose}/></Button> : <Button _focus={{ bgColor: "blue.900" }} onClick={onToggle} bgColor="blue.900"  p="10px" href="https://github.com/101beardo"><Icon boxSize="25px" as={GiHamburgerMenu}/></Button> } 
       
          <Collapse in={isOpen} animateOpacity>
          <Box
            p='90px'
            color='cyan.300'
            mt='4'
            bg='blue.900'
            rounded='md'
            shadow='dark-lg'
            zIndex={2}
            display="flex"
            flexDirection="column"
            align="center"
            >
              
              <Link className='nav-link home' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href='#header'>Home</Link>
            
              <Link className='nav-link about' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="#about">About Me</Link>
              
              <Link className='nav-link skills' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#skills">Skills</Link>
              
              <Link className='nav-link projects' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#projects">Projects</Link>
              
              <Link className='nav-link contact' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="#contact">Contact</Link>
              
              <Link className='nav-link resume' m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a"> ⤓ Resume</Link>
              
            </Box>
            </Collapse>
          </Box>
      </Box>
   </Box>
  )
}

export default Navbar
