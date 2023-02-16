import DefaultLayout from "@/features/Layouts/DefaultLayout"



 function Home() {
  // anything that is added between the default layout tags will be passed as children to the default layout component. Those children will be placed between the navigation and footer because of where
  // we called the passed in children
  // default layout can now be the parent for the entire page regardless of where we are 
  return (
    <DefaultLayout></DefaultLayout>
  )
}

export default Home