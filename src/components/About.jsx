import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pic from"./assests/me.png"
const About = () => {
  return (
    <Box id="about" pt={["70px"]} align="center" >
           <Text  
              fontWeight="bold" 
              fontSize={["35px", "35px", "55px"]}
              >
              About Me
              </Text>

              <Box>



                    <Box>
                          <Image mt="60px" h="325px" src={pic} alt="me" />
                    </Box>



                    <Text w="70%" 
                    fontSize="20px"
                    
                    >
                          Hello Everyone, I am Tarun Sharma from Chandigarh.
                          Highly Inquisitive about Solving Problems and implementing them in real life. I like solving puzzles, reading self-help books and astrophysics, as going in depth of the mechanism and  understanding the working principle of anything is always an exciting part of my life.

                          
                    </Text>



              </Box>

    </Box>
  )
}

export default About
