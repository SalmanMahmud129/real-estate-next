import { Box, Fade, Text } from "@chakra-ui/react"
import HeroForm from "./HeroForm"


function HeroBanner() {
  return (
    <Fade in>
    <Box position='relative' minHeight={{base: '110vh', sm: '60vh' }} backgroundImage={`url('./hero/heroPic.jpg')`} backgroundPosition='center' backgroundSize="cover" backgroundAttachment='fixed'>
        {/* Box below is the blue hue over the background */}
        <Box position='absolute' width='100%' height='100%' opacity='0.6' backgroundColor='blue.900'></Box>
        {/* Box below holds the text and the form */}
        <Box 
        display='flex' 
        flexDirection={{base: 'column', sm: 'row'}} 
        alignItems='center'
        justifyContent={{base: 'flex-start', sm: 'space-between'}} 
        maxWidth='1280px' 
        position='absolute' 
        color='white' 
        fontWeight='light' 
        left='0' 
        right='0' 
        bottom='0'
        top='0'
        margin='0 auto'
        padding ='2rem'
        >
            {/* first box is the left side and second is the right */}
            <Box width={{base: "100%", sm: '50%'}}>
                <Text fontSize={{base:'4xl', sm: '5xl'}} lineHeight='shorter' marginBottom='1.5rem'>Browse from a <strong>wide selection</strong> of properties...</Text>
            </Box>
            <Box width={{base: "100%", sm: "auto"}}> <HeroForm/> </Box>
        </Box>
    </Box>
    </Fade>
  )
}

export default HeroBanner