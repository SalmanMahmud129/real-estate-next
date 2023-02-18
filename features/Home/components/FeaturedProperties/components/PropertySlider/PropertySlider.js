import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PropertyCard from '@/features/common/modules/PropertyCard'

function PropertySlider({featuredProperties}) {
    console.log('featuredProperties:', featuredProperties)
    // loop so it never stops
    // loopFillGroup true so that it keeps looping with the first one becoming the last one
    // centeredSlides so that when one gets dragged by a mouse or a finger it will center 
  return (
    <Swiper 
    slidesPerView={3} 
    spaceBetween={10} 
    loop={true} 
    loopFIllGroupWithBlank={true} 
    centeredSlides={true} 
    autoplay={{delay: 2000, disableOnInteraction: true}} 
    pagination={{dynamicBullets: true}} 
    modules={[Autoplay, Pagination]} 
    className='mySwiper'
    >

        {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
                <PropertyCard {...property} />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default PropertySlider