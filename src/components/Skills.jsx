
import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react';
import { SiHtml5,SiCss3,SiJavascript,SiReact,SiChakraui,SiRedux,SiExpress,SiMongodb,SiNpm,SiCypress } from "react-icons/si";
import {FaNode} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import { SimpleGrid } from '@chakra-ui/react'



const Skills = () => {
  
  return (
    <Box pt={["70px"]} id='skills' align="center" >
           <Text  
              fontWeight="bold" 
              fontSize={["35px", "35px", "55px"]}
              >
              Skills
           </Text>
          <Box  >
            <SimpleGrid  align="center" w="65%" columns={[2, 3, 4]} spacing='80px'>



              {/* HTML */}
            <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
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
                boxSize={["80px","90px","125px"]}
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
                boxSize={["80px","90px","125px"]}
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




                      {/* React */}

              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
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



                      {/* Chakra UI */}


              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
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
              
              
              
                      {/* Redux */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
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





                      {/* Cypress  */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiCypress} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Cypress
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
                boxSize={["80px","90px","125px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiExpress} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Express JS
                      </Text>         
              </Box>
              



              {/* Mongo DB  */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiMongodb} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Mongo DB
                      </Text>         
              </Box>



                      {/* NPM  */}


              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={SiNpm} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        NPM
                      </Text>         
              </Box>

                      {/* Github  */}


              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
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

              

              {/* Node JS  */}
              
              <Box 
                _hover={{
                        boxShadow:'dark-lg',
                        transitionDuration:"300ms",
                      }} 
                borderRadius="15%" 
                boxShadow='2xl'
                boxSize={["80px","90px","125px"]}
                color="blue.900"
                
                >
                  <Icon 
                      h="50%"
                      w="70%"
                      mt="20px"
                      as={FaNode} 
                      
                    />
                      <Text  
                        
                        fontSize={["8px", "10.455px", "15px"]} 
                        >
                        Node JS
                      </Text>         
              </Box>

              
              
              
            </SimpleGrid>
          </Box>
    </Box>
  )
}

export default Skills