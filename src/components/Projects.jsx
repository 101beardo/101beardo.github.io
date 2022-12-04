import { Box, Button, Card, CardBody, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { SiHtml5,SiCss3,SiJavascript } from "react-icons/si";
import {BsGithub} from "react-icons/bs"
import { SimpleGrid } from '@chakra-ui/react'
import pic2 from"./assests/tripoto.png"
import pic from "./assests/greenhouse.io.png"



const Projects = () => {
  return (
    <Box pt={["70px"]}  id='projects' align="center" >
        <Text  
          fontWeight="bold" 
          fontSize={["35px", "35px", "55px"]}
          >
          Projects
        </Text>


        <Box align="center" mt="80px" w={["80%","90%","80%"]} boxShadow='dark-lg' >


        <Box>
                {/* - Project Title */}
                <Text fontWeight="bold" 
                      fontSize="30px"
                      p="10px"
                      mt="30px"
                      
                       >
                      greenhouse.io Clone

                </Text>

          </Box>


          <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                {/* Project Cover Image */}
                <Image borderRadius="10%" src={pic} />

          </Box>


          <Box>
          {/* - Project Description */}

                <Text fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                Greenhouse's applicant tracking system and recruiting software is designed to help make companies great at hiring and hire for what's next.
                </Text>

          </Box>
      


          <Box>
          {/* - Tech Stacks used in the project are highlighted */}
          <Box  >
            <SimpleGrid mt={["5px","7px","10px"]} align="center" w="65%" columns={[2, 3, 4]} spacing='80px'>
              <Card _hover={{
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      size:"80px"
                      }} borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]}  as={SiHtml5} /><Text fontSize={["8px", "10.455px", "15px"]} > HTML</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiCss3} /><Text fontSize={["8px", "10.455px", "15px"]} >CSS</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiJavascript} /><Text fontSize={["8px", "10.455px", "15px"]} >JavaScript</Text></Box></CardBody></Card>
             
              <Card _hover={{
                transitionDuration:"300ms",
                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={BsGithub} /><Text fontSize={["8px", "10.455px", "15px"]} >Git</Text>  </Box></CardBody></Card>
              
            </SimpleGrid>
          </Box>



          </Box>



          <Box>
          {/* -Two buttons: GitHub, and Deployment/Video */}
          <Box> 
              <Link 
                  style={{ textDecoration: 'none' }}
                  target="_blank"   
                  href="https://taupe-lokum-022b8a.netlify.app/" >
                    <Button m="50px" 
                      bgGradient='linear(to-r, orange.900, blue.900)'
                      _hover={{
                      bgGradient: 'linear(to-r, cyan.500, blue.500)',
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      }}    
                      color="white">
                      Visit Live
                    </Button>
              </Link>
              <Link
                  style={{ textDecoration: 'none' }}  
                  target="_blank" 
                  href="https://github.com/Dhanraj4198/cuddly-smoke-9747" >
                    <Button m="10px"
                    _hover={{
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      }} 
                    variant="outline" 
                    colorScheme='facebook'>
                    View Code
                    </Button>
              </Link>
        </Box>

                      

          </Box>
      
      
        </Box>



        <Box align="center" mt="80px" w={["80%","90%","80%"]} boxShadow='dark-lg' >


<Box>
        {/* - Project Title */}
        <Text fontWeight="bold" 
              fontSize="30px"
              p="10px"
              mt="30px"
              
               >
              tripoto Clone

        </Text>

  </Box>


  <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
        {/* Project Cover Image */}
        <Image borderRadius="7%" src={pic2} />

  </Box>


  <Box>
  {/* - Project Description */}

        <Text fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
        Tripoto is the provider of a travelogue platform. Its web and app-based platforms enable travellers to connect with each other, write and share travelogues, discover destinations by bookable plans, publish trips, book hotels, plan trips with friends, view travel guides, holiday packages and itineraries.
        </Text>

  </Box>



  <Box>
  {/* - Tech Stacks used in the project are highlighted */}
  <Box  >
    <SimpleGrid mt={["5px","7px","10px"]} align="center" w="65%" columns={[2, 3, 4]} spacing='80px'>
      <Card _hover={{
              boxShadow:'dark-lg',
              transitionDuration:"300ms",
              size:"80px"
              }} borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]}  as={SiHtml5} /><Text fontSize={["8px", "10.455px", "15px"]} > HTML</Text></Box></CardBody></Card>
      <Card _hover={{
        transitionDuration:"300ms",

              boxShadow:'dark-lg'
              }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiCss3} /><Text fontSize={["8px", "10.455px", "15px"]} >CSS</Text></Box></CardBody></Card>
      <Card _hover={{
        transitionDuration:"300ms",

              boxShadow:'dark-lg'
              }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiJavascript} /><Text fontSize={["8px", "10.455px", "15px"]} >JavaScript</Text></Box></CardBody></Card>
     
      <Card _hover={{
        transitionDuration:"300ms",
              boxShadow:'dark-lg'
              }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={BsGithub} /><Text fontSize={["8px", "10.455px", "15px"]} >Git</Text>  </Box></CardBody></Card>
      
    </SimpleGrid>
  </Box>



  </Box>



  <Box>
  {/* -Two buttons: GitHub, and Deployment/Video */}
  <Box> 
      <Link 
          style={{ textDecoration: 'none' }}  
          target="_blank" 
          href="https://admirable-churros-c90fb5.netlify.app/" >
            <Button m="50px" 
              bgGradient='linear(to-r, orange.900, blue.900)'
              _hover={{
              bgGradient: 'linear(to-r, cyan.500, blue.500)',
              boxShadow:'dark-lg',
              transitionDuration:"300ms",
              }}    
              color="white">
              Visit Live
            </Button>
      </Link>
      <Link
          style={{ textDecoration: 'none' }}  
          target="_blank" 
          href="https://github.com/jkumari25/glistening-rock-2573" >
            <Button m="10px"
            _hover={{
              boxShadow:'dark-lg',
              transitionDuration:"300ms",
              }} 
            variant="outline" 
            colorScheme='facebook'>
            View Code
            </Button>
      </Link>
</Box>

              

  </Box>


        </Box>




    </Box>
  )
}

export default Projects
