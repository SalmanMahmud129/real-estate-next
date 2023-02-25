import DefaultLayout from "@/features/Layouts/DefaultLayout"
import HeroBanner from "@/features/Home/components/HeroBanner"
import FeaturedProperties from "@/features/Home/components/FeaturedProperties"
import MeetTheTeam from "@/features/Home/components/MeetTheTeam"
import Testimonials from "@/features/Home/components/Testimonials"
import { getProperties } from "@/features/common/api/getProperties"



 function Home({featuredProperties}) {
  console.log('featuredProperties:', featuredProperties)
  // anything that is added between the default layout tags will be passed as children to the default layout component. Those children will be placed between the navigation and footer because of where
  // we called the passed in children
  // default layout can now be the parent for the entire page regardless of where we are 
  return (
    <DefaultLayout>
      <HeroBanner/>
      <FeaturedProperties featuredProperties={featuredProperties}/>
      <MeetTheTeam/>
      <Testimonials/>
    </DefaultLayout>
  )
}

export default Home


export async function getStaticProps(){
  // call our api via getProperties and pass it a num which will be plugged into the amount of hits that we pull 
  const featuredProperties = await getProperties(5)
  
  // then we return those properties as props that will be passed to the index/home above
  return {
    props: { featuredProperties: featuredProperties }
  }
}





// fetches data at build time and creates a statically generated page. Will pass the data through getStaticProps to our index. Function returns a prop so that it can get passed
// export async function getStaticProps(){
//   const {hits} = require('@/features/data/properties')

//   return {
//     props: { featuredProperties: hits.slice(0,5) }
//   }
// }


// no longer need the above function because that was dealing with local json dummy data so that we dont exceed api call limit