// any route that ends in an ID will match this file and fetch the data and render it. Seems like useParams

import usePropertyFormat from '@/features/common/Hooks/usePropertyFormat'
import DefaultLayout from '@/features/Layouts/DefaultLayout'
import PropertyDetails from '@/features/Property/components/PropertyDetails'
import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider'
import { Badge, Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { TbMapPin } from 'react-icons/tb'

function PropertyPage({property}){
    const {address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furnished
    } = usePropertyFormat(property)
    console.log('property:', property)
    return(
        <DefaultLayout>
            <Box backgroundColor='#f7f8f9' paddingY='3rem'>
                {/* 6 repeating columns of equal width */}
                <Grid templateColumns='repeat(6,1fr)' gap='5' maxWidth='1280px' margin='0 auto'>
                    {/* want this particular item to span the entire width of the grid item since it is the title */}
                    <GridItem colSpan='6'>
                        <Text fontSize='3xl' fontWeight='medium' color='blue.800' textAlign={{base: 'center', sm: 'left'}}>
                            {propertyType} {title}
                        </Text>
                        <Flex fontSize='xl' color='blue.600' textAlign='center' alignItems='center' flexDirection={{base: 'column', sm: 'row'}} gap='0.5rem' marginY={{base: '1rem', sm: '0'}}>
                            <TbMapPin/>
                            <Text fontWeight='light'>{address} - ID: {externalID}</Text>
                            <Badge colorScheme='green'>{purpose}</Badge>
                        </Flex>
                    </GridItem>

                    {/* Picture slider. Should take up the whole page on mobile and half the page on bigger. Gets the photos from the property fetched from the server side props below which is passed
                    into this PropertyPage component. The photos come from the property being passed into our custom hook and having data that we need extracted */}
                    <GridItem colSpan={{base: 6, sm: 3}}>
                        <PropertyThumbnailSlider photos={photos}/>
                    </GridItem>

                    {/* property details */}
                    <GridItem>
                        <PropertyDetails rooms={rooms} baths={baths} price={price} sqSize={sqSize}/>
                    </GridItem>

                </Grid>

            </Box>
        </DefaultLayout>
    )
}

export default PropertyPage

// server side props will run before the page is shown to the user. Fetches data in real time. Different to get static props which runs at build time and makes a static html page

export async function getServerSideProps(){
    const property = require('@/features/data/property')

    return {
        props: { property }
    }
}