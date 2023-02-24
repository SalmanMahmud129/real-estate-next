import { Box } from "@chakra-ui/react"

function PropertyMatterPortEmbed({panorama}) {
 
    //ratio for youtube so that when page loads it doesnt jump all over the place when loading in
    const ratio = (315 / 560) * 100
  return (
    <Box paddingTop={`${ratio}%`} position='relative' height='0' overflow='hidden' frameBorder='0'>
        <iframe 
        style={{position: 'absolute', top: 0, bottom: 0}} 
        width='100%' 
        height='100%' 
        src={panorama}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />


    </Box>
  )
}

export default PropertyMatterPortEmbed