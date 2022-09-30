import React from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import s from './Slider.module.css'
import { Autoplay, Pagination } from "swiper";
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"

function Slider() {
  return (
   <div className={s.imgContainer}>
     <Swiper
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,

    }}
    loop={true}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
    className={s.mySwiper}
    >
      <SwiperSlide className={s.swiper_slider}>
        <div className=' items-center justify-center'>
        <p className='opacity-60  w-[100px] block m-auto '>MISSION</p>

          <h1 className='text-4xl text-center font-normal'>
            To create simpler and more effective products for daily bodywork work aiming at increasingly eco-friendly applications.
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
      <div className=' items-center justify-center'>
        <p className='opacity-60  w-[100px] block m-auto '>VISION</p>
          <h1 className='text-4xl text-center font-normal'>
         
            Offer everything needed for the Car Refinish from ONE source.
          </h1>
        </div>
      </SwiperSlide>
      
    </Swiper>
   </div>
  )
}

export default Slider