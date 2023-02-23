// any route that ends in an ID will match this file and fetch the data and render it. Seems like useParams

function PropertyPage({property}){
    console.log('property:', property)
    return(
        <>test</>
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