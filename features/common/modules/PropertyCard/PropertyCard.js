import { Box } from "@chakra-ui/react"
import usePropertyFormat from "../../Hooks/usePropertyFormat"


function PropertyCard(property) {
  // all logic for gathering data needed for our page has been performed in this custom hook that we made
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID
  } = usePropertyFormat(property)
  return (
    <Box marginBottom='4rem' backgroundColor='white'>
      <Box backgroundImage={`url("${coverPhoto}")`} height='250px' backgroundPosition='center center'>

      </Box>

    </Box>
  )
}

export default PropertyCard