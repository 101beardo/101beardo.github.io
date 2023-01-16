import React from 'react'
import Typewriter from 'typewriter-effect'
import { Box, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

// border="1px solid red"

const Header = () => {
  return (
      <Box 
        id='header'  
        align={"center"}
        pt="130px"
        w="80%"
        >
      
        <Box 
          m={["10px","30px","30px"]}
          fontWeight="bold" 
          fontSize={[null,"20px","30px"]} 
          >
          <Box fontSize={["25px","40px","60px"]}  display="flex" w={["300px", "500px", "700px"]}>
            <Text color="orange.900" >Hello, I'm &nbsp;</Text>
            <Text  color="blue.900">Tarun Sharma</Text>
          </Box>
          

          <Box mt="20px" >
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
              
        </Box>
        
        
       

        <Box > 
              <Link 
                  style={{ textDecoration: 'none' }}  
                  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a" >
                    <Button m="50px" 
                      bgGradient='linear(to-r, orange.900, blue.900)'
                      _hover={{
                      bgGradient: 'linear(to-r, cyan.500, blue.500)',
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      }}    
                      color="white">
                      ⤓ Download Resume
                    </Button>
              </Link>
              <Link
                  style={{ textDecoration: 'none' }}  
                  href="#contact" >
                    <Button m="10px"
                    _hover={{
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      }} 
                    variant="outline" 
                    colorScheme='facebook'>
                    Let's Talk
                    </Button>
              </Link>
        </Box>



        <Box m="20px"  fontSize="20px" >
          <Text>A Passionate Full-Stack Web Developer with Problem Solving Skills, who is always motivated and disciplined to learn new concept, when it is encountered.  
          Excited about developing scalable websites using technical skills like HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind CSS, Material-UI, and back-end skills like Node-js, express-js, MongoDB. Looking forward to further enhance my skills.
          </Text>
        </Box> 

      </Box>
        

  )
}

export default Header
