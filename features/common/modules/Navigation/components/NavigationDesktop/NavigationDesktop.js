import { Box, Flex, Text, Button} from "@chakra-ui/react"
import Link from "next/link"
import {HiHomeModern} from "react-icons/hi2"
import navigationLinks from "../../navigationConsts"

function NavigationDesktop(){
    return(
        <Box color='blue.100' paddingY='2rem' bgGradient='linear(to-r, #09203F, #537895)' display={{base: "none", md: "block"}}>
        <Box maxWidth='1280px' margin="0 auto">
            <Flex alignItems='center' justifyContent='space-between'>
                <Link href='/'>
                <Box display="flex" gap='2' alignItems='center'>
                    <HiHomeModern color='gold' size="30" />
                    <Text color='white'fontSize="2xl" fontWeight="black">
                        Real Estate NEXT
                    </Text>
                    
                </Box>
                <Text color='gray.300'>
                        Seamlessly Find Your NEXT Home
                </Text>
                </Link>
                {navigationLinks.map((item) => (
                    <NavigationLink key={item.title} {...item} />
                ))}
                <Button padding='1.5rem' colorScheme='twitter' fontSize='0.8rem' fontWeight='bold'>CREATE LISTING</Button>
            </Flex>
        </Box>
        </Box>
    ) 
}

export default NavigationDesktop


const NavigationLink = ({title, link, icon}) =>{
    return (
        <Link href={link}>
        <Flex align='center' gap='0.5rem'>
            {icon}
            {title}
        </Flex>
        </Link>
    )
}