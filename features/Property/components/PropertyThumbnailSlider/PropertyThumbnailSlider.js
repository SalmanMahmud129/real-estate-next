import { useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode,Navigation, Thumbs } from "swiper"
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Divider } from "@chakra-ui/react"


function PropertyThumbnailSlider({photos}) {
    // thumbs={{swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null}} ==== thumbnails continuously loop over and if we click on a certain thumbnail it shows the correct picture
    const [thumbSwiper, setThumbSwiper] = useState(null)
  return (
    <>
    {/* Big picture images */}
    <Swiper 
    style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} 
    loop={true} 
    navigation={true} 
    thumbs={{swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null}}
    modules={[FreeMode, Navigation, Thumbs]}
    className='mySwiper2'
    >
        {photos.map((image) => (
            <SwiperSlide key={image}><img  src={image}/></SwiperSlide>
        ))}
    </Swiper>

    <Divider marginY='1rem'/>

    {/* Thumbnail Swiper/row of images at the bottom */}
    <Swiper onSwiper={setThumbSwiper} loop={true} spaceBetween={10} slidesPerView={5} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className='mySwiper'>
        {photos.map((image) => (
            <SwiperSlide key={image}><img  src={image}/></SwiperSlide>
        ))}
    </Swiper>
    </>
  )
}

export default PropertyThumbnailSlider