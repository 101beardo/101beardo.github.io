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
        data-testid="home"  
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
            <Text data-testid="user-detail-name"  color="blue.900">Tarun Sharma</Text>
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
                  data-testid="resume-link-2"
                  href="https://drive.google.com/uc?export=download&id=1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a"
                   >
                    <Button m="50px" 
                      bgGradient='linear(to-r, orange.900, blue.900)'
                      onClick={()=>{
                        window.open("https://drive.google.com/file/d/1jf0aDcplQQDA0_FoYrKm9QOg_8_zK91a/view?usp=sharing","_blank")
                      }}
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



        <Box m={["5px","10px","20px"]}  fontSize={[null,"15px","20px"]} >
          <Text data-testid="user-detail-intro" textAlign="justify" >
            A motivated and disciplined Full-Stack Web Developer with strong
            problem-solving skills and a passion for learning new technologies.
            Proficient in front-end technologies like HTML, CSS, JavaScript,

            TypeScript, React, Redux, Tailwind CSS, and Material-UI, and back-
            end skills like Node-js, express-js, and MongoDB. Eager to further

            develop skills as a full-stack MERN developer and build scalable
            websites.
          </Text>
        </Box> 

      </Box>
        

  )
}

export default Header
