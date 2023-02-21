import { Box, Flex, Text } from "@chakra-ui/react"
import { agents } from "./agentConsts"
import AgentCard from "./components/AgentCard"


function MeetTheTeam() {
  return (
    <Box maxWidth='1280px' margin='0 auto' paddingY={{base: '3rem', sm: '6rem'}}>
        <Text fontSize={{base: '4xl', sm: '5xl'}} lineHeight='shorter' fontWeight='light' paddingX='2rem' textAlign='center'>
            Meet The Team
        </Text>
        <Text fontSize='2xl' fontWeight='light' marginTop='1rem' marginBottom='3rem' paddingX='2rem' textAlign='center'>
            Readily available to assist in your real estate goals
        </Text>

        <Flex direction={{base: 'column', sm: 'row'}} justifyContent='space-between' gap='1.5rem'>
            {agents.map((agent) => (
                <AgentCard key={agent.name} {...agent}/>
            ))}

        </Flex>
    </Box>
  )
}

export default MeetTheTeam