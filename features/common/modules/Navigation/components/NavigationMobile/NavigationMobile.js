import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, Text, Button, Menu, MenuList, MenuButton, IconButton, MenuItem} from "@chakra-ui/react"
import Link from "next/link"
import {HiHomeModern} from "react-icons/hi2"
import navigationLinks from "../../navigationConsts"


function NavigationMobile() {
  // display only on the base size which would be mobile and none when you get bigger than that
  return (
    <Box color='blue.100' padding='2rem' bgGradient='linear(to-r, #09203F, #537895)' display={{base: "block", md: "none"}}> 
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
            <Menu>
              <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon/>} variant="outline"/>
              <MenuList>
              {navigationLinks.map((item) => (
                  <NavigationLink key={item.title} {...item} />
              ))}
              </MenuList>
            </Menu>
        </Flex>
    </Box>
  )
}

export default NavigationMobile


//going to grab the navigation links we imported from the file we made (navigationConsts) and map through the links in that array and create links to those navlinks (line 25)
const NavigationLink = ({title, link, icon}) =>{
  return (
      <Link href={link}>
      <MenuItem align='center' gap='0.5rem'>
          {icon}
          {title}
      </MenuItem>
      </Link>
  )
}