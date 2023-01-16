import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pic from"./assests/me.png"
const About = () => {
  return (
    <Box mb="50px" w="80%" id="about" pt={["70px"]} align="center" >
           <Text  
              fontWeight="bold" 
              fontSize={["35px", "35px", "55px"]}
              >
              About Me
              </Text>

              <Box pt={["70px"]} justifyItems="center" alignItems="center"  display={["block","block","flex"]} >
                    <Text w="80%" 
                    fontSize="20px"
                  //   mt={["20px","40px","150px"]}
                    align="left"
                    ml="30px"
                    >
                          Hello Everyone, I am Tarun Sharma from Chandigarh.
                          Highly Inquisitive about Solving Problems and implementing them in real life. I like solving puzzles, reading self-help books and astrophysics, as going in depth of the mechanism and  understanding the working principle of anything is always an exciting part of my life.

                    </Text>


                    <Box >
                          <Image  w="70%" src={pic} alt="me" />
                    </Box>


              </Box>

    </Box>
  )
}

export default About
