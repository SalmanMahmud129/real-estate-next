import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PropertyCard from '@/features/common/modules/PropertyCard'
import useIsDesktop from '@/features/common/Hooks/useIsDesktop'

function PropertySlider({featuredProperties}) {
    const {isDesktop} = useIsDesktop()
    console.log('featuredProperties:', featuredProperties)
    // loop so it never stops
    // loopFillGroup true so that it keeps looping with the first one becoming the last one
    // centeredSlides so that when one gets dragged by a mouse or a finger it will center 
  return (
    // if it is a desktop sized screen (checking through useIsDesktop hook), show 3 cards if its not then show 1
    <Swiper 
    slidesPerView={isDesktop ? 3 : 1 } 
    spaceBetween={10} 
    loop={true} 
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