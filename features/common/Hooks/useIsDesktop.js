import { useEffect, useState } from "react"

// custom hook to determine screen size and this will assist in determining how many cards the featured slider will show
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(null)

  useEffect(() =>{
    if(window.innerWidth > 1080){
        setIsDesktop(true)
    } else{
        setIsDesktop(false)
    }

    const updateMedia = () => {
        if(window.innerWidth > 1080){
            setIsDesktop(true)
        } else{
            setIsDesktop(false)
        }
    }

    window.addEventListener('resize', updateMedia)
  }, [])

  return { isDesktop }
}

export default useIsDesktop