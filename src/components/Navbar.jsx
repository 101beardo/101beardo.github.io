import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"



const Navbar = () => {

  const { isOpen, onToggle } = useDisclosure()

  return (
   <Box>
      <Box 
          w="100%" 
          h="70px" 
          color="cyan.300"
          bg="blue.900"
          p="20px"
          display={["none","flex","flex"]}
          justifyContent="space-between"
          boxShadow='dark-lg'
          position={"fixed"}
          fontSize='20px'
          zIndex={1}
          >
          <Link style={{ textDecoration: 'none' }}  href='#header'>Home</Link>
          <Link style={{ textDecoration: 'none' }}  href="#about">About Me</Link>
          <Link style={{ textDecoration: 'none' }}  href="#skills">Skills</Link>
          <Link style={{ textDecoration: 'none' }}  href="#projects">Projects</Link>
          <Link style={{ textDecoration: 'none' }}  href="#contact">Contact</Link>
          <Link style={{ textDecoration: 'none' }}  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a"> ⤓ Resume</Link>
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
              
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href='#header'>Home</Link>
            
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="#about">About Me</Link>
              
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#skills">Skills</Link>
              
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#projects">Projects</Link>
              
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="#contact">Contact</Link>
              
              <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a"> ⤓ Resume</Link>
              
            </Box>
            </Collapse>
          </Box>
      </Box>
   </Box>
  )
}

export default Navbar
