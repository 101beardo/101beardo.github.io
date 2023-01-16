import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  return (
    <Box align="center" >
        <Text  
          fontWeight="bold" 
          fontSize="30px"
          p="10px"
          mt="200px"
          >
          GitHub Statistics & Calender section
        </Text>



        <Box align="center" p="10px"   >
            <Box  mt={["50px","70px","100px"]}  >
                <GitHubCalendar
                    username="101beardo"
                    blockSize={15}
                    blockMargin={5}
                    color="blue"
                    fontSize={15}
                />
            </Box>



            <Box >
            <Image boxShadow='dark-lg' w={["85%","70%","35%"]} borderRadius="2%" mt="50px" src="https://github-readme-stats.vercel.app/api?username=101beardo&show_icons=true" alt="101beardo" />
            <Image boxShadow='dark-lg' w={["85%","70%","35%"]} borderRadius="2%" mt="50px"  src="https://github-readme-streak-stats.herokuapp.com/?user=101beardo" alt="101beardo" />
            <Image boxShadow='dark-lg' w={["85%","70%","35%"]} borderRadius="2%" mt="50px"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=101beardo&layout=compact" alt="101beardo" />
            </Box>

            
           
        
        </Box>



    </Box>
  )
}

export default Github
