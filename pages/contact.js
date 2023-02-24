import TextContentBox from "@/features/common/modules/TextContentBox"
import DefaultLayout from "@/features/Layouts/DefaultLayout"
import { Box, Divider, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react"
import Link from "next/link"
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'


function ContactPage() {
  return (
    <DefaultLayout>
        <Box backgroundColor='#f7f8f9' paddingY='3rem'>
            <Grid templateColumns='repeat(6,1fr)' gap='5' maxWidth='1280px' margin='0 auto'>
                <GridItem colSpan={{base:6, sm: 4}}>
                    <TextContentBox title='Contact Us'>


                    </TextContentBox>

                </GridItem>

                <GridItem colSpan={{base: 6, sm: 2}}>
                    <TextContentBox title='For Inquiries Contact: '>
                        <Flex alignItems='center' justifyContent='space-between' gap={3} flexDirection={{base: 'column', sm: 'row'}}>
                        <Text fontWeight='light' color='gray.600' fontSize='1rem' marginBottom='1rem' textAlign='center'>
                            Salman Mahmud <br/>
                            {/* <Divider/> */}
                            Software Developer <br/>
                            {/* <Divider/> */}
                            Flatiron School Alum
                            {/* <Divider/> */}
                        </Text>
                        
                        <Box alignItems='center' display='flex' justifyContent='center'>

                        <Image src={'./profilepic/profile.jfif'} width='7rem' height='7rem' justifyContent='center' borderRadius='full' shadow='md' objectFit='cover'/>
                        </Box>

                        </Flex>
                        <Divider marginY='1rem'/>
                        <Flex justifyContent='space-between'>
                            <Link href='https://www.linkedin.com/in/salman-mahmud-129sm/'> <FaLinkedin size='2rem' color="blue"/></Link>
                            <Link href='https://github.com/SalmanMahmud129'> <FaGithub size='2rem'/></Link>
                            {/* <Link href='https://www.linkedin.com/in/salman-mahmud-129sm/' > </Link> */}
                            <CgWebsite size='2rem'/>

                        </Flex>

                        <Text textAlign='right' fontWeight='light' color='gray.600' fontSize='.75rem'>(Coming Soon)</Text>
                    </TextContentBox>

                </GridItem>

            </Grid>

        </Box>
    </DefaultLayout>
  )
}

export default ContactPage