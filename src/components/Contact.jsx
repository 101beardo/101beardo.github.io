import { Box, Icon, Text,Link } from '@chakra-ui/react'
import React from 'react'
import {BsLinkedin,BsWhatsapp} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiHackerrank} from "react-icons/si"
import {AiFillTwitterSquare} from "react-icons/ai"

const Contact = () => {
  return (
    <Box align="center" pt="70px" id='contact'>
        <Text  
          fontWeight="bold" 
          fontSize={["35px", "35px", "55px"]}
          >
          Contact
        </Text>

        <Text
        fontWeight="bold" 
        fontSize={["20px","25px","30px"]}
        p="10px"
        mt={["220px","150px","150px"]}
        >
          <Text>Phone:+91 6283837873</Text>
          <Text mt="20px" >Email: 101tash101@gmail.com</Text>
        </Text>


        <Box mt="150px" justifyContent="space-between" w={["80%","70%","60%"]}  display="flex"  >
          <Link  p="10px" href="https://www.linkedin.com/in/tarun-sharma-93008a190/" target="_blank"  rel="noreferrer"><Icon boxSize={["40px","60px","40px"]} as={BsLinkedin} /></Link>
          <Link  p="10px" href="https://github.com/101beardo" target="_blank"  rel="noreferrer"><Icon boxSize={["40px","60px","40px"]} as={FaGithub} /></Link>
          <Link  p="10px" href="https://www.hackerrank.com/_beardo_" target="_blank"  rel="noreferrer"><Icon boxSize={["40px","60px","40px"]} as={SiHackerrank} /></Link>
          <Link  p="10px" href="https://wa.me/+916283837873" target="_blank"  rel="noreferrer"><Icon boxSize={["40px","60px","40px"]} as={BsWhatsapp} /></Link> 
          <Link  p="10px" href="https://twitter.com/_beardo__" target="_blank"  rel="noreferrer"><Icon boxSize={["40px","60px","40px"]} as={AiFillTwitterSquare} /></Link> 
        </Box>



    </Box>
  )
}

export default Contact
