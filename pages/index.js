import DefaultLayout from "@/features/Layouts/DefaultLayout"
import HeroBanner from "@/features/Home/components/HeroBanner"
import FeaturedProperties from "@/features/Home/components/FeaturedProperties"



 function Home({featuredProperties}) {
  // anything that is added between the default layout tags will be passed as children to the default layout component. Those children will be placed between the navigation and footer because of where
  // we called the passed in children
  // default layout can now be the parent for the entire page regardless of where we are 
  return (
    <DefaultLayout>
      <HeroBanner/>
      <FeaturedProperties featuredProperties={featuredProperties}/>
    </DefaultLayout>
  )
}

export default Home

// fetches data at build time and creates a statically generated page. Will pass the data through getStaticProps to our index
export async function getStaticProps(){
  const {hits} = require('@/features/data/properties')

  return {
    props: { featuredProperties: hits }
  }
}