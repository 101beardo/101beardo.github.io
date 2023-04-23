import { Box, Button, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { SiHtml5,SiCss3,SiJavascript,SiChakraui,SiReact,SiRedux,SiExpress, SiMongodb, SiNpm } from "react-icons/si";
import {BsGithub} from "react-icons/bs"
import {FaNode} from "react-icons/fa"
import { SimpleGrid } from '@chakra-ui/react'
import pic2 from"./assests/tripoto.png"
import pic from "./assests/greenhouse.io.png"
import pic3 from"./assests/mytheresa.png"



const Projects = () => {
  return (
    <Box pt={["70px"]} data-testid="projects" w="80%" id='projects' align="center" >
        <Text  
          fontWeight="bold" 
          fontSize={["35px", "35px", "55px"]}
          >
          Projects
        </Text>


        <Box className='project-card' align="center" mt="80px" w={["100%","90%","80%"]} boxShadow='dark-lg' >


        <Box>
                {/* - Project Title */}
                <Text fontWeight="bold" 
                      fontSize="30px"
                      p="10px"
                      mt="30px"
                      className='project-title'
                       >
                      IndustryBuying Clone

                </Text>

          </Box>


          <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                {/* Project Cover Image */}
                <Image className="project-img" borderRadius="1.5%" src="https://user-images.githubusercontent.com/76995063/213940407-29245dc1-3e9f-4d65-b9be-9cbf56947a89.png" />

          </Box>


          <Box>
          {/* - Project Description */}

                <Text className="project-description" fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                IndustryBuying is an e-commerce website made using MongoDb Chakra UI with all CRUD operations.

                E-commerce service in New Delhi for Purchase of products by organizations for their own use or re-sell.
                </Text>

          </Box>
      


          <Box>
          {/* - Tech Stacks used in the project are highlighted */}
          <Box  >
    <SimpleGrid className="project-tech-stack" mt={["5px","7px","10px"]}   w="75%" columns={[2, 3, 4]} spacing='80px'>
     
      



             

              {/* Chakra UI */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                className='skills-card'
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={SiChakraui} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Chakra UI
                      </Text>         
              </Box>

              
              
              
              
              
              {/* React */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                className='skills-card'
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      
                      className='skills-card-img'
                      as={SiReact} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        React
                      </Text>         
              </Box>


                        {/* Express JS  */}

                        <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                className='skills-card'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={SiExpress} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Express JS
                      </Text>         
                        </Box>



              {/* Mongo Db */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                className='skills-card'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={SiMongodb} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Mongo DB
                      </Text>         
              </Box>


                {/* NPM */}
                <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                className='skills-card'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={SiNpm} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        NPM
                      </Text>         
              </Box>



                {/* Node JS */}
                <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                className='skills-card'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={FaNode} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Node JS
                      </Text>         
              </Box>



              {/* Git Hub */}

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                className='skills-card'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      className='skills-card-img'
                      as={BsGithub} 
                      
                    />
                      <Text  
                        className='skills-card-name'
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Git Hub
                      </Text>         
              </Box>
              





    </SimpleGrid>
  </Box>



          </Box>



          <Box>
          {/* -Two buttons: GitHub, and Deployment/Video */}
          <Box > 
              <Link 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  className="project-deployed-link"  
                  href="https://aesthetic-kheer-0649e3.netlify.app/" >
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
                  className="project-github-link"
                  href="https://github.com/martina024/screeching-egg-574" >
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




        <Box className='project-card' align="center" mt="80px" w={["100%","90%","80%"]} boxShadow='dark-lg' >


        <Box>
                {/* - Project Title */}
                <Text fontWeight="bold" 
                      fontSize="30px"
                      p="10px"
                      mt="30px"
                      className='project-title'
                       >
                      MYTHERESA Clone

                </Text>

          </Box>


          <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                {/* Project Cover Image */}
                <Image className="project-img" borderRadius="10%" src={pic3} />

          </Box>


          <Box>
          {/* - Project Description */}

                <Text className="project-description" fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                An e-commerce website made using redux Chakra UI with all CRUD operations. MYTHERESA - THE FINEST EDIT IN LUXURY FASHION Mytheresa is the finest edit in luxury fashion for women, men and kids.
                </Text>

          </Box>
      


          <Box>
          {/* - Tech Stacks used in the project are highlighted */}
          <Box  >
    <SimpleGrid className="project-tech-stack"  mt={["5px","7px","10px"]}   w="75%" columns={[2, 3, 4]} spacing='80px'>
     
      



             

              {/* Chakra UI */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiChakraui} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Chakra UI
                      </Text>         
              </Box>

              
              
              
              
              
              {/* React */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiReact} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        React
                      </Text>         
              </Box>


              {/* Redux */}

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiRedux} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Redux
                      </Text>         
              </Box>


              {/* Git Hub */}

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={BsGithub} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Git Hub
                      </Text>         
              </Box>
              





    </SimpleGrid>
  </Box>



          </Box>



          <Box>
          {/* -Two buttons: GitHub, and Deployment/Video */}
          <Box  > 
              <Link 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  className="project-deployed-link"   
                  href="https://luminous-swan-cc6644.netlify.app" >
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
                  className="project-github-link"
                  href="https://github.com/101beardo/goofy-shock-9631" >
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

        <Box className='project-card' align="center" mt="80px" w={["100%","90%","80%"]} boxShadow='dark-lg' >


        <Box>
                {/* - Project Title */}
                <Text fontWeight="bold" 
                      fontSize="30px"
                      p="10px"
                      mt="30px"
                      className='project-title'
                       >
                      greenhouse.io Clone

                </Text>

          </Box>


          <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                {/* Project Cover Image */}
                <Image className="project-img" borderRadius="10%" src={pic} />

          </Box>


          <Box>
          {/* - Project Description */}

                <Text className="project-description" fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
                Greenhouse's applicant tracking system and recruiting software is designed to help make companies great at hiring and hire for what's next.
                </Text>

          </Box>
      


          <Box>
          {/* - Tech Stacks used in the project are highlighted */}
          <Box  >
    <SimpleGrid className="project-tech-stack"  mt={["5px","7px","10px"]}   w="75%" columns={[2, 3, 4]} spacing='80px'>
     
      
              {/* HTML */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiHtml5} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        HTML
                      </Text>         
              </Box>



             

              {/* CSS */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiCss3} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        CSS
                      </Text>         
              </Box>

              
              
              
              
              
              {/* JavaScript */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiJavascript} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        JavaScript
                      </Text>         
              </Box>

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={BsGithub} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Git Hub
                      </Text>         
              </Box>





    </SimpleGrid>
  </Box>



          </Box>



          <Box>
          {/* -Two buttons: GitHub, and Deployment/Video */}
          <Box > 
              <Link 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  className="project-deployed-link"   
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
                  className="project-github-link"
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



        <Box className='project-card' align="center" mt="80px" w={["100%","90%","80%"]} boxShadow='dark-lg' >


<Box>
        {/* - Project Title */}
        <Text fontWeight="bold" 
              fontSize="30px"
              p="10px"
              mt="30px"
              className='project-title'
               >
              tripoto Clone

        </Text>

  </Box>


  <Box  boxShadow='outline' rounded='lg' mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
        {/* Project Cover Image */}
        <Image className="project-img" borderRadius="7%" src={pic2} />

  </Box>


  <Box>
  {/* - Project Description */}

        <Text className="project-description" fontSize={[null,null,"20px"]} mt={["5px","7px","10px"]} w={["75%","75%","75%"]} >
        Tripoto is the provider of a travelogue platform. Its web and app-based platforms enable travellers to connect with each other, write and share travelogues, discover destinations by bookable plans, publish trips, book hotels, plan trips with friends, view travel guides, holiday packages and itineraries.
        </Text>

  </Box>



  <Box>
  {/* - Tech Stacks used in the project are highlighted */}
  <Box >
    <SimpleGrid className="project-tech-stack" mt={["5px","7px","10px"]}  w="75%" columns={[2, 3, 4]} spacing='80px'>
     
      
              {/* HTML */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiHtml5} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        HTML
                      </Text>         
              </Box>



             

              {/* CSS */}
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiCss3} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        CSS
                      </Text>         
              </Box>

              
              
              
              
              
              {/* JavaScript */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiJavascript} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        JavaScript
                      </Text>         
              </Box>

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","100px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={BsGithub} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Git Hub
                      </Text>         
              </Box>





    </SimpleGrid>
  </Box>



  </Box>



  <Box>
  {/* -Two buttons: GitHub, and Deployment/Video */}
  <Box  > 
      <Link 
          style={{ textDecoration: 'none' }}  
          target="_blank" 
          className="project-deployed-link"
          href="https://lively-hotteok-119124.netlify.app/" >
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
          className="project-github-link"
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
