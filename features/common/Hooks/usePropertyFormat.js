
function usePropertyFormat(property) {
// map over the location array of objects in our properties json and map through it 
const address = property.location.map((item) => item.name).join(", ")

const coverPhoto = property.coverPhoto.url

// each property in the json has 2 objects in the category array. We are getting the name value
// from each. For example, the first property in the json file has the first category (index 0)
// as residential and the second category (index 1) as apartments
// so this property's propertyType value will be interpolated as Residential, Apartments
const propertyType = `${property.category[0].name}, ${property.category[1].name} `

const price = property.price.toLocaleString('en-US', {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

const title = property.title

const rooms = property.rooms

const baths = property.baths 

const purpose = property.purpose

const sqSize = property.area.toFixed(2)

const externalID = property.externalID


// pulling single property data

// if a photo exists in the photo array, map through and give the url for each, otherwise 
// give an empty array
const photos = property.photos?.map((photo) => photo.url) || []

const description = property.description

// link in json is the share link and not the embed link so we need to slice
// the id off the share link and use it to create an embed link
const coverVideoUrl = property.coverVideo.url
// start at the end and strip off 11 which gives us the id
const coverVideo = coverVideoUrl.slice(coverVideoUrl.length - 11)

// if panoramas array contains something then give us the first object in the array
// otherwise give an empty array
const panorama = property.panoramas?.length ? property.panoramas[0].url : []

// flatmap condenses all nested arrays into one. Then extract/map from the second amenities array 
const amenities = property.amenities?.flatMap(({amenities}) => amenities).map((item) => item.text)

const furnished = property.furnishingStatus



  return {
    address,
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
  }
}

export default usePropertyFormat