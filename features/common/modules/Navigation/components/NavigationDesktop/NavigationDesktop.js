import { Box, Flex, Text, Button} from "@chakra-ui/react"
import Link from "next/link"
import {HiHomeModern} from "react-icons/hi2"
import navigationLinks from "../../navigationConsts"

function NavigationDesktop(){
    // for display, base will be the mobile view which we wouldnt want to show the desktop navigation in. So it would be none for base breakpoint. Medium breakpoint is where we will show
    // the desktop nav as a block
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
                <Flex gap='12' alignItems='center' fontWeight='medium'>
                    {navigationLinks.map((item) => (
                        <NavigationLink key={item.title} {...item} />
                    ))}
                    <Button padding='1.5rem' colorScheme='twitter' fontSize='0.8rem' fontWeight='bold'>CREATE LISTING</Button>
                </Flex>
            </Flex>
        </Box>
        </Box>
    ) 
}

export default NavigationDesktop


//going to grab the navigation links we imported from the file we made (navigationConsts) and map through the links in that array and create links to those navlinks (line 25)
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