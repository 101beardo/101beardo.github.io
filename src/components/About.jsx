import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pic from"./assests/me.png"
const About = () => {
  return (
    <Box mb="50px" w="80%" data-testid="about" className='about section' id="about" pt={["70px"]} align="center" >
           <Text  
              fontWeight="bold" 
              fontSize={["35px", "35px", "55px"]}
              >
              About Me
              </Text>

              <Box pt={["70px"]} justifyItems="center" alignItems="center"  display={["block","block","flex"]} >
                    <Text w={["95%","80%","80%"]} 
                    fontSize={[null,"15px","20px"]}
                  //   mt={["20px","40px","150px"]}
                    align="left"
                    ml={[null,null,"30px"]}
                    textAlign="justify"
                    >
                          Hello Everyone, I am Tarun Sharma from Chandigarh.
                          I am a highly inquisitive person with a passion for solving problems and implementing solutions in real life. I am constantly seeking new challenges and opportunities to put my problem-solving skills to the test. My interest in puzzles, self-help books, and astrophysics stems from my love of understanding the mechanics and working principles of the things around me. I find excitement in delving deep into a subject and uncovering the complexities that make it function. My innate curiosity and drive to learn have led me to continually seek out new experiences and knowledge, and I am eager to see where they take me next.

                    </Text>


                    <Box >
                          <Image className='home-img'  w="70%" src={pic} alt="me" />
                    </Box>


              </Box>

    </Box>
  )
}

export default About
