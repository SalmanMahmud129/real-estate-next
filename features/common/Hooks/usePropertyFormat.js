
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
    externalID
  }
}

export default usePropertyFormat