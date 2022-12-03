
import { Box, Card, CardBody, Icon, Text } from '@chakra-ui/react'
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
              <Card _hover={{
                      boxShadow:'dark-lg',
                      transitionDuration:"300ms",
                      
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
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiReact} /><Text fontSize={["8px", "10.455px", "15px"]} >React</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiChakraui} /><Text fontSize={["8px", "10.455px", "15px"]} >Chakra UI</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiRedux} /><Text fontSize={["8px", "10.455px", "15px"]} >Redux</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiCypress} /><Text fontSize={["8px", "10.455px", "15px"]} >Cypress</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiExpress} /><Text fontSize={["8px", "10.455px", "15px"]} >Express JS</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiMongodb} /><Text fontSize={["8px", "10.455px", "15px"]} >Mongo DB</Text></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",

                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={SiNpm} /><Text fontSize={["8px", "10.455px", "15px"]}>NPM</Text ></Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",
                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={BsGithub} /><Text fontSize={["8px", "10.455px", "15px"]} >Git</Text>  </Box></CardBody></Card>
              <Card _hover={{
                transitionDuration:"300ms",
                      boxShadow:'dark-lg'
                      }}borderRadius="15%" boxShadow='2xl' ><CardBody><Box color="blue.900"><Icon boxSize={["40px","50px","60px"]} as={FaNode} /><Text fontSize={["8px", "10.455px", "15px"]}  >Node JS</Text></Box></CardBody></Card>
            </SimpleGrid>
          </Box>
    </Box>
  )
}

export default Skills